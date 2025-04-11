import { motion } from "motion/react"
import { FiShoppingCart, FiX } from "react-icons/fi"
import { useDispatch } from "react-redux"

const CartHeader = ({ cartItemsCount, setIsCartOpen }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <FiShoppingCart className="h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Your Cart ({cartItemsCount})
        </h2>
      </div>
      <motion.button
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(setIsCartOpen(false))}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <FiX className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </motion.button>
    </div>
  )
}

export default CartHeader
