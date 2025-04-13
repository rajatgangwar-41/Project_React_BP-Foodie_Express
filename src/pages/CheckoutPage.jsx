import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../hooks"
import toast from "react-hot-toast"
import {
  HeroSection,
  DeliveryInformation,
  PaymentMethods,
  OrderSummary,
} from "../components/checkout"
import { updateCredentials } from "../features/authSlice"
import { useClearCartMutation } from "../features/cartApiSlice"
import { useOrderFoodMutation } from "../features/orderApiSlice"
import { resetOrder, updateOrder } from "../features/orderSlice"

// Base schema with all common fields
const baseSchema = z.object({
  // User details
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  specialInstructions: z.string().optional(),

  // Payment method (required)
  paymentMethod: z.enum(["credit-card", "paypal", "upi", "cod"], {
    required_error: "Please select a payment method",
  }),

  // Payment fields (all optional at base level)
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
  upiId: z.string().optional(),
})

// Refined schema with conditional validation
const checkoutSchema = baseSchema
  // Credit card validation
  .refine(
    (data) =>
      data.paymentMethod !== "credit-card" ||
      (data.cardNumber && data.cardNumber.length === 16),
    {
      message: "Card number must be 16 digits",
      path: ["cardNumber"],
    }
  )
  .refine(
    (data) =>
      data.paymentMethod !== "credit-card" ||
      (data.cardExpiry &&
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(data.cardExpiry)),
    {
      message: "Invalid expiry date (MM/YY format required)",
      path: ["cardExpiry"],
    }
  )
  .refine(
    (data) =>
      data.paymentMethod !== "credit-card" ||
      (data.cardCvc && data.cardCvc.length >= 3 && data.cardCvc.length <= 4),
    {
      message: "CVC must be 3-4 digits",
      path: ["cardCvc"],
    }
  )
  // UPI validation
  .refine(
    (data) =>
      data.paymentMethod !== "upi" || (data.upiId && data.upiId.includes("@")),
    {
      message: "Valid UPI ID required (must contain @)",
      path: ["upiId"],
    }
  )

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    unregister,
    trigger,
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "Rajat",
      lastName: "Gangwar",
      email: "rajat@gmail.com",
      phone: "1111111111",
      address: "Street Colony",
      city: "Delhi",
      zipCode: "11111",
      specialInstructions: "",
    },
  })

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [activePaymentMethod, setActivePaymentMethod] = useState("")
  const order = useSelector((state) => state.order)
  const [orderFood, { isLoading }] = useOrderFoodMutation()
  const [clearCart] = useClearCartMutation()
  const { user, id } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateOrder(user?.cart))
  }, [user?.cart, dispatch])

  const onSubmit = async (data) => {
    const toastOptions = {
      position: "top-center",
      duration: 4000,
      style: {
        color: "#fff",
      },
    }

    const toastId = toast.loading("Processing your order...", {
      ...toastOptions,
      style: {
        ...toastOptions.style,
        background: "#F59E0B",
      },
      icon: "⏳",
    })

    const { originalDeliveryFee: _, ...updatedOrder } = order
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zipCode,
      specialInstructions,
      ...payment
    } = data

    let orderDetails = {
      orderId: `order-id-${btoa(user?.email)}-${Date.now()}`,
      food: { ...updatedOrder, specialInstructions },
      personal: {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        zipCode,
      },
      payment,
    }

    try {
      const { token: __, ...updatedUser } = await orderFood({
        id,
        orders: [orderDetails, ...user.orders],
      }).unwrap()

      orderDetails = {
        ...orderDetails,
        orderStatus: "Order Placed",
        orderPlacedAt: new Date().toISOString(),
        deliveryTime: 30,
        deliveredOn: new Date().toISOString(),
        payment: {
          ...orderDetails.payment,
          paymentStatus:
            payment.paymentMethod !== "cod" ? "success" : "pending",
        },
        rider: {
          name: "Rider Name",
          phone: "Rider Phone",
          image: "Rider Image",
          rating: 4.5,
          vehicle: "Bike",
        },
      }

      dispatch(updateCredentials({ user: updatedUser }))

      const { token: ___, ...newUpdatedUser } = await clearCart({ id }).unwrap()

      toast.success("Order placed successfully!", {
        ...toastOptions,
        icon: "🎉",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })

      dispatch(resetOrder())
      navigate(`/payment-status/${orderDetails.orderId}`, {
        state: { order: orderDetails },
        replace: true,
      })
      setTimeout(
        () => dispatch(updateCredentials({ user: newUpdatedUser })),
        1000
      )
    } catch (error) {
      console.error("Order submission failed:", error)
      toast.error(error?.error || "Failed to place order. Please try again.", {
        ...toastOptions,
        icon: "❌",
        style: {
          ...toastOptions.style,
          background: "#EF4444",
        },
        id: toastId,
      })
      orderDetails = {
        ...orderDetails,
        orderStatus: "Order Not Placed",
        payment: {
          ...orderDetails.payment,
          paymentStatus: "failed",
          paymentError: error?.error,
        },
      }
      dispatch(
        updateCredentials({
          user: { ...user, orders: [orderDetails, ...user.orders] },
        })
      )
      navigate(`/payment-status/${orderDetails.orderId}`, {
        state: { order: orderDetails },
      })
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeroSection />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <DeliveryInformation register={register} errors={errors} />

              <PaymentMethods
                activePaymentMethod={activePaymentMethod}
                setActivePaymentMethod={setActivePaymentMethod}
                register={register}
                unregister={unregister}
                errors={errors}
                setValue={setValue}
                trigger={trigger}
              />
            </form>
          </div>

          <div className="lg:w-1/3">
            <OrderSummary
              order={order}
              activePaymentMethod={activePaymentMethod}
              isLoading={isLoading}
              handlePayment={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
