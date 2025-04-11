import { motion } from "motion/react"
import { FiX } from "react-icons/fi"

const CartError = ({ error, refetch }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="h-full flex flex-col items-center justify-center p-6 text-center"
  >
    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
      <FiX className="text-red-500 dark:text-red-400 text-2xl" />
    </div>
    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
      Failed to load cart
    </h3>
    <p className="text-gray-500 dark:text-gray-400 mb-6">
      {error?.message || "Something went wrong"}
    </p>
    <motion.button
      onClick={refetch}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
    >
      Try Again
    </motion.button>
  </motion.div>
)

export default CartError
