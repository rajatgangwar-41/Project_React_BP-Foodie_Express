import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiCreditCard,
  FiShoppingBag,
  FiTruck,
  FiGift,
  FiChevronDown,
  FiCheck,
  FiX,
  FiLock,
  FiInfo,
} from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

// Zod validation schema
const userDetailsSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  specialInstructions: z.string().optional(),
})

const CheckoutPage = () => {
  const navigate = useNavigate()
  const [activePaymentMethod, setActivePaymentMethod] = useState("credit-card")
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [isCouponValid, setIsCouponValid] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userDetailsSchema),
  })

  // Sample order data
  const order = {
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        quantity: 1,
        specialInstructions: "Extra cheese",
      },
      {
        id: 2,
        name: "Garlic Bread",
        price: 4.99,
        quantity: 2,
      },
      {
        id: 3,
        name: "Caesar Salad",
        price: 8.99,
        quantity: 1,
        specialInstructions: "No croutons",
      },
    ],
    subtotal: 35.0,
    deliveryFee: 3.5,
    tax: 0.47,
    total: 38.97,
  }

  // Available coupons
  const availableCoupons = [
    { code: "SAVE10", discount: 10, minOrder: 30 },
    { code: "SAVE5", discount: 5, minOrder: 15 },
    { code: "FREEDEL", discount: 3.5, minOrder: 20, freeDelivery: true },
  ]

  const applyCoupon = () => {
    const coupon = availableCoupons.find((c) => c.code === couponCode)
    if (coupon) {
      if (order.subtotal >= coupon.minOrder) {
        setAppliedCoupon({ code: coupon.code, discount: coupon.discount })
        setIsCouponValid(true)

        // Apply free delivery if applicable
        if (coupon.freeDelivery) {
          order.deliveryFee = 0
        }

        // Recalculate total
        order.total =
          order.subtotal + order.deliveryFee + order.tax - coupon.discount
      } else {
        setIsCouponValid(false)
      }
    } else {
      setIsCouponValid(false)
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    setCouponCode("")
    setIsCouponValid(null)
    // Reset delivery fee and total
    order.deliveryFee = 3.5
    order.total = order.subtotal + order.deliveryFee + order.tax
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Navigate to payment result page (success/failure)
      // In a real app, you would handle actual payment processing first
      navigate("/payment-result")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative h-96 w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          className="w-full h-full object-cover opacity-70 overflow-hidden"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Help Center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Checkout
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl"
            whileHover={{ scale: 1.01 }}
          >
            Complete your order with confidence{" "}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - User Details */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 mb-6"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FiUser className="text-orange-500" />
                <span>Delivery Information</span>
              </h2>

              <form
                onSubmit={handleSubmit(handlePayment)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...register("firstName")}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.firstName
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...register("lastName")}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.lastName
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Delivery Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    {...register("address")}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.address
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                    placeholder="123 Main St, Apt 4B"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      {...register("city")}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.city
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      ZIP Code
                    </label>
                    <input
                      id="zipCode"
                      type="text"
                      {...register("zipCode")}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.zipCode
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                      placeholder="10001"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="specialInstructions"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    id="specialInstructions"
                    {...register("specialInstructions")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                    placeholder="Gate code, delivery preferences, etc."
                    rows={3}
                  />
                </div>
              </form>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 mb-6"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FiCreditCard className="text-orange-500" />
                <span>Payment Method</span>
              </h2>

              <div className="space-y-3">
                {/* Credit Card */}
                <div
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    activePaymentMethod === "credit-card"
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  onClick={() => setActivePaymentMethod("credit-card")}
                >
                  <div className="flex relative items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        activePaymentMethod === "credit-card"
                          ? "border-orange-500 bg-orange-500"
                          : "border-gray-400 dark:border-gray-500"
                      }`}
                    >
                      {activePaymentMethod === "credit-card" && (
                        <FiCheck className="text-white text-xs" />
                      )}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      Credit Card
                    </span>
                    <div className="ml-auto absolute right-0 flex items-center gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                        className="w-12 h-10 object-contain"
                        alt="Visa"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        className="w-12 h-8 object-contain"
                        alt="Mastercard"
                      />
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <div
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    activePaymentMethod === "paypal"
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  onClick={() => setActivePaymentMethod("paypal")}
                >
                  <div className="flex relative items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        activePaymentMethod === "paypal"
                          ? "border-orange-500 bg-orange-500"
                          : "border-gray-400 dark:border-gray-500"
                      }`}
                    >
                      {activePaymentMethod === "paypal" && (
                        <FiCheck className="text-white text-xs" />
                      )}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      PayPal
                    </span>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      className="w-20 h-16 absolute right-0 object-contain ml-auto"
                      alt="PayPal"
                    />
                  </div>
                </div>

                {/* UPI */}
                <div
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    activePaymentMethod === "upi"
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  onClick={() => setActivePaymentMethod("upi")}
                >
                  <div className="flex relative items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        activePaymentMethod === "upi"
                          ? "border-orange-500 bg-orange-500"
                          : "border-gray-400 dark:border-gray-500"
                      }`}
                    >
                      {activePaymentMethod === "upi" && (
                        <FiCheck className="text-white text-xs" />
                      )}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      UPI Payment
                    </span>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
                      className="w-16 h-10 absolute right-0 object-contain ml-auto"
                      alt="UPI"
                    />
                  </div>
                </div>

                {/* Cash on Delivery */}
                <div
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    activePaymentMethod === "cod"
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                  onClick={() => setActivePaymentMethod("cod")}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        activePaymentMethod === "cod"
                          ? "border-orange-500 bg-orange-500"
                          : "border-gray-400 dark:border-gray-500"
                      }`}
                    >
                      {activePaymentMethod === "cod" && (
                        <FiCheck className="text-white text-xs" />
                      )}
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      Cash on Delivery
                    </span>
                    <FiTruck className="text-gray-500 text-xl dark:text-gray-400 ml-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 sticky top-6"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <FiShoppingBag className="text-orange-500" />
                <span>Order Summary</span>
              </h2>

              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                        {item.quantity}
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white">
                          {item.name}
                        </h3>
                        {item.specialInstructions && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Note: {item.specialInstructions}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Coupon Section - Improved Responsiveness */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FiGift className="text-orange-500" />
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    Promo Code
                  </h3>
                </div>

                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-2">
                    <div className="flex items-center gap-2">
                      <FiCheck className="text-green-500" />
                      <span className="text-green-700 dark:text-green-400 font-medium">
                        {appliedCoupon.code}
                      </span>
                      <span className="text-green-700 dark:text-green-400 text-sm">
                        -${appliedCoupon.discount.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <FiX />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col min-[1150px]:flex-row gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="Enter promo code"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors sm:w-auto"
                    >
                      Apply
                    </button>
                  </div>
                )}

                {isCouponValid === false && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    <FiInfo className="flex-shrink-0" />
                    <span>Invalid or expired promo code</span>
                  </p>
                )}

                {/* Available Coupons - Improved Responsiveness */}
                <div className="mt-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Available coupons:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {availableCoupons.map((coupon) => (
                      <button
                        key={coupon.code}
                        onClick={() => {
                          setCouponCode(coupon.code)
                          applyCoupon()
                        }}
                        className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-2 py-1 rounded transition-colors"
                      >
                        {coupon.code}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="font-medium">
                    ${order.subtotal.toFixed(2)}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Discount
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      -${appliedCoupon.discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Delivery Fee
                  </span>
                  <span className="font-medium">
                    ${order.deliveryFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="font-medium">${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700 mt-2">
                  <span className="font-bold text-gray-800 dark:text-white">
                    Total
                  </span>
                  <span className="font-bold text-orange-500">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handleSubmit(handlePayment)}
                disabled={isProcessing}
                className={`w-full mt-6 py-3 px-6 rounded-lg font-medium text-white transition-colors flex items-center justify-center gap-2 ${
                  isProcessing
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {activePaymentMethod === "cod"
                      ? "Placing Order..."
                      : "Processing Payment..."}
                  </>
                ) : (
                  <>
                    {activePaymentMethod === "cod" ? (
                      "Place Order"
                    ) : (
                      <>
                        <FiLock className="flex-shrink-0" />
                        Pay ${order.total.toFixed(2)}
                      </>
                    )}
                  </>
                )}
              </button>

              {/* Security Info */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <FiLock className="flex-shrink-0" />
                <span>
                  {activePaymentMethod === "cod"
                    ? "Your order is secured"
                    : "Your payment is secured with 256 bit encryption"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
