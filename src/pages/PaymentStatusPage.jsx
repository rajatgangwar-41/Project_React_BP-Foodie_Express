import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
  FiCheckCircle,
  FiXCircle,
  FiHome,
  FiShoppingBag,
  FiClock,
} from "react-icons/fi"
import { motion } from "framer-motion"

const PaymentStatusPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { state } = location
  const [countdown, setCountdown] = useState(10)

  // Default values
  const status = state?.status || "cod" // 'success', 'failed', or 'cod'
  const orderNumber = state?.orderNumber || "ORD-78945"
  const paymentMethod = state?.paymentMethod || "Credit Card"

  // Order data
  const order = {
    total: 22.97,
    estimatedDelivery: "30-45 minutes",
  }

  // Auto-redirect to home after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [navigate])

  // Determine page content based on status
  const getStatusConfig = () => {
    switch (status) {
      case "success":
        return {
          bgGradient: "bg-gradient-to-r from-green-500 to-emerald-600",
          icon: (
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeatDelay: 1,
              }}
            >
              <FiCheckCircle className="w-16 h-16 mx-auto text-white" />
            </motion.div>
          ),
          title: "Payment Successful!",
          subtitle: "Your delicious food is on its way!",
          showOrderNumber: true,
        }
      case "cod":
        return {
          bgGradient: "bg-gradient-to-r from-blue-500 to-cyan-600",
          icon: (
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              <FiClock className="w-16 h-16 mx-auto text-white" />
            </motion.div>
          ),
          title: "Order Confirmed!",
          subtitle: "Please have cash ready for delivery",
          showOrderNumber: true,
        }
      case "failed":
      default:
        return {
          bgGradient: "bg-gradient-to-r from-red-500 to-pink-600",
          icon: <FiXCircle className="w-16 h-16 mx-auto text-white" />,
          title: "Payment Failed",
          subtitle: "We couldn't process your payment",
          showOrderNumber: false,
        }
    }
  }

  const statusConfig = getStatusConfig()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className={`py-12 text-center ${statusConfig.bgGradient} text-white`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
            className="inline-block mb-4"
          >
            {statusConfig.icon}
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {statusConfig.title}
          </h1>
          <p className="text-lg opacity-90">{statusConfig.subtitle}</p>
          {statusConfig.showOrderNumber && (
            <p className="mt-2 text-sm bg-white/20 rounded-full px-4 py-1 inline-block">
              Order #{orderNumber}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 mb-8 text-center"
        >
          {status === "success" || status === "cod" ? (
            <>
              <div className="text-5xl mb-4">🍕🚴‍♂️</div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {status === "cod"
                  ? "Cash on Delivery Order"
                  : "Your order is in process!"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {status === "cod"
                  ? "Our team is preparing your order. Please have the exact amount ready for the delivery person."
                  : "Our chef is preparing your meal and our delivery partner will be at your door soon."}
              </p>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mb-6">
                <p className="font-medium text-orange-700 dark:text-orange-300">
                  Estimated delivery: {order.estimatedDelivery}
                </p>
                {status === "cod" && (
                  <p className="font-medium text-orange-700 dark:text-orange-300 mt-1">
                    Amount to pay: ${order.total.toFixed(2)}
                  </p>
                )}
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Payment method: {paymentMethod}</p>
                {status === "success" && (
                  <p className="font-bold text-lg text-gray-800 dark:text-white">
                    Total: ${order.total.toFixed(2)}
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <FiXCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Payment Not Completed
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Please try again or use a different payment method. Your cart
                has been saved.
              </p>
            </>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          <button
            onClick={() => navigate("/")}
            className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <FiHome />
            Back to Home
          </button>
          {status === "failed" ? (
            <button
              onClick={() => navigate("/checkout")}
              className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiShoppingBag />
              Try Payment Again
            </button>
          ) : (
            <button
              onClick={() => navigate(`/orders/${orderNumber}`)}
              className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiShoppingBag />
              View Order Details
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <p>You'll be redirected to home in {countdown} seconds...</p>
        </motion.div>
      </div>
    </div>
  )
}

export default PaymentStatusPage
