import { motion } from "motion/react"
import { FaGooglePay, FaPaypal, FaRupeeSign } from "react-icons/fa"
import { FiClock, FiCreditCard, FiXCircle } from "react-icons/fi"
import { MdPayment } from "react-icons/md"
import { TbCash } from "react-icons/tb"

const OrderDetails = ({ statusConfig, order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border ${
        order.payment.paymentStatus === "success"
          ? "border-green-100 dark:border-emerald-900"
          : order.payment.paymentStatus === "pending"
          ? "border-blue-100 dark:border-cyan-900"
          : "border-rose-100 dark:border-pink-900"
      }`}
    >
      {/* Status-specific content */}
      {order.payment.paymentStatus === "success" ||
      order.payment.paymentStatus === "pending" ? (
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <motion.div
              animate={
                statusConfig.pulse
                  ? {
                      scale: [1, 1.05, 1],
                      transition: { duration: 2, repeat: Infinity },
                    }
                  : {}
              }
              className="text-6xl"
            >
              {order.payment.paymentStatus === "success" ? "🍕🚴‍♂️" : "👨‍🍳⏱️"}
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {order.payment.paymentStatus === "success"
                  ? "Your food adventure begins!"
                  : "Preparing your order"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {order.payment.paymentStatus === "success"
                  ? "Our delivery partner is on the way with your delicious meal."
                  : "We're preparing your food with care. Delivery will start soon."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FiClock className="text-orange-500 mr-2" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Delivery Time
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {order.deliveryTime} minutes
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <MdPayment className="text-green-500 mr-2" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Total Amount
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹ {order.food.total.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 dark:border-orange-500 p-4 rounded-r-lg">
              <div className="flex items-center">
                {order.payment.paymentMethod === "credit-card" ? (
                  <FiCreditCard className="w-8 h-8 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                ) : order.payment.paymentMethod === "paypal" ? (
                  <FaPaypal className="w-9 h-9 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                ) : order.payment.paymentMethod === "upi" ? (
                  <FaGooglePay className="w-12 h-12 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                ) : (
                  <TbCash className="w-9 h-9 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                )}
                <div>
                  <h4 className="font-medium text-orange-800 dark:text-orange-200">
                    Payment Method
                  </h4>
                  <p className="text-orange-700 dark:text-orange-300">
                    {order.payment.paymentMethod === "credit-card"
                      ? "Credit Card"
                      : order.payment.paymentMethod === "paypal"
                      ? "Paypal"
                      : order.payment.paymentMethod === "upi"
                      ? "UPI"
                      : "Cash on Delivery"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              transition: { duration: 0.6 },
            }}
            className="mb-6"
          >
            <FiXCircle className="w-16 h-16 mx-auto text-rose-500" />
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Payment Not Completed
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            We couldn't process your payment. Please try again or use a
            different payment method. Your items have been saved in your cart.
          </p>

          <div className="bg-rose-50 dark:bg-rose-900/10 border-l-4 border-rose-400 dark:border-rose-500 p-4 rounded-r-lg max-w-md mx-auto mb-6">
            <div className="flex items-center">
              {order.payment.paymentMethod === "credit-card" ? (
                <FiCreditCard className="w-7 h-7 text-rose-500 mr-3 flex-shrink-0" />
              ) : order.payment.paymentMethod === "paypal" ? (
                <FaPaypal className="w-7 h-7 text-rose-500 mr-3 flex-shrink-0" />
              ) : order.payment.paymentMethod === "upi" ? (
                <FaGooglePay className="w-12 h-12 text-rose-500 mr-3 flex-shrink-0" />
              ) : (
                <TbCash className="w-9 h-9 text-rose-500 mr-3 flex-shrink-0" />
              )}
              <div>
                <p className="text-rose-700 dark:text-rose-300">
                  {order.payment.paymentError ||
                    "Payment processor declined the transaction"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default OrderDetails
