import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom"
import { FiCheckCircle, FiXCircle, FiClock } from "react-icons/fi"
import {
  ActionButtons,
  Countdown,
  HeroSection,
  OrderDetails,
} from "../components/payment"

const PaymentStatusPage = () => {
  const navigate = useNavigate()
  const {
    state: { order },
  } = useLocation()
  const [countdown, setCountdown] = useState(10)

  // Auto-redirect to home after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // navigate("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [navigate])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  // Status configuration
  const getStatusConfig = () => {
    switch (order.payment.paymentStatus) {
      case "success":
        return {
          bgGradient: "bg-gradient-to-br from-green-400 to-emerald-600",
          icon: (
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <FiCheckCircle className="w-20 h-20 mx-auto text-white" />
            </motion.div>
          ),
          title: "Payment Successful!",
          subtitle: "Your order is confirmed and on its way",
          showOrderNumber: true,
          emoji: "🎉",
          pulse: true,
        }
      case "pending":
        return {
          bgGradient: "bg-gradient-to-br from-blue-400 to-cyan-600",
          icon: (
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              <FiClock className="w-20 h-20 mx-auto text-white" />
            </motion.div>
          ),
          title: "Order Confirmed!",
          subtitle: "Please have cash ready for delivery",
          showOrderNumber: true,
          emoji: "⏳",
          pulse: false,
        }
      case "failed":
      default:
        return {
          bgGradient: "bg-gradient-to-br from-rose-500 to-pink-600",
          icon: (
            <motion.div
              animate={{
                x: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.6 },
              }}
            >
              <FiXCircle className="w-20 h-20 mx-auto text-white" />
            </motion.div>
          ),
          title: "Payment Failed",
          subtitle: "We couldn't process your payment",
          showOrderNumber: false,
          emoji: "😞",
          pulse: false,
        }
    }
  }

  const statusConfig = getStatusConfig()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Status Header */}
      <HeroSection statusConfig={statusConfig} orderId={order.orderId} />

      {/* Order Details Card */}
      <div className="container mx-auto px-4 -mt-10 pb-30 max-w-2xl">
        <OrderDetails statusConfig={statusConfig} order={order} />

        {/* Action Buttons */}
        <ActionButtons order={order} />

        {/* Countdown */}
        <Countdown countdown={countdown} />
      </div>
    </div>
  )
}

export default PaymentStatusPage
