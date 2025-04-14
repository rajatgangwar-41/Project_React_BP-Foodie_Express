import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import { FiHome, FiShoppingBag } from "react-icons/fi"

const ActionButtons = ({ order }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <button
        onClick={() => navigate("/")}
        className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-200 dark:hover:shadow-orange-900/50"
      >
        <FiHome className="text-lg" />
        <span>Back to Home</span>
      </button>

      {order.payment.paymentStatus === "failed" ? (
        <button
          onClick={() => navigate(-1)}
          className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all font-medium flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
        >
          <FiShoppingBag className="text-lg" />
          <span>Try Payment Again</span>
        </button>
      ) : (
        <button
          onClick={() =>
            navigate(`/order-details/${order.orderId}`, { state: { order } })
          }
          className="w-full px-6 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all font-medium flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
        >
          <FiShoppingBag className="text-lg" />
          <span>View Order Details</span>
        </button>
      )}
    </motion.div>
  )
}

export default ActionButtons
