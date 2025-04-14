import { motion } from "motion/react"
import { FaGooglePay, FaPaypal } from "react-icons/fa"
import { FiCreditCard } from "react-icons/fi"
import { TbCash, TbCurrencyRupee } from "react-icons/tb"
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"

const PaymentInfo = ({ order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <FiCreditCard className="text-blue-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Payment Information
        </h3>
      </div>
      <div className="space-y-4">
        {/* Payment Method */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            {order.payment.paymentMethod === "credit-card" ? (
              <FiCreditCard className="text-blue-500" />
            ) : order.payment.paymentMethod === "paypal" ? (
              <FaPaypal className="text-blue-500" />
            ) : order.payment.paymentMethod === "upi" ? (
              <FaGooglePay className="text-blue-500" />
            ) : (
              <TbCash className="text-blue-500" />
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Payment Method
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              {order.payment.paymentMethod === "credit-card"
                ? "Credit Card"
                : order.payment.paymentMethod === "paypal"
                ? "PayPal"
                : order.payment.paymentMethod === "upi"
                ? "UPI Payment"
                : "Cash on Delivery"}
            </p>
          </div>
        </div>

        {/* Payment Status */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <IoCheckmarkDoneCircleOutline className="text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Payment Status
            </p>
            <p className="font-medium text-green-600 dark:text-green-400">
              {order.payment.paymentStatus === "success" ? "Paid" : "Pending"}
              {order.payment.paymentStatus === "success" && (
                <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <TbCurrencyRupee className="text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Total Amount
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              ₹ {order.food.total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Transaction ID (if available) */}
        {order.payment.transactionId && (
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <FiCreditCard className="text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Transaction ID
              </p>
              <p className="font-medium text-gray-800 dark:text-white text-sm font-mono">
                {order.payment.transactionId}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default PaymentInfo
