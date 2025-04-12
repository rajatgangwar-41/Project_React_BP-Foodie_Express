import { motion } from "motion/react"
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi"

const CartItem = ({
  item,
  handleRemoveItem,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, x: 50 }}
    className="flex gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
  >
    <motion.img
      src={item.image}
      alt={item.name}
      className="w-20 h-20 rounded-lg object-cover"
      whileHover={{ scale: 1.05 }}
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <h3 className="font-medium text-gray-800 dark:text-white">
          {item.name}
        </h3>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleRemoveItem(item)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <FiTrash2 className="h-5 w-5" />
        </motion.button>
      </div>
      <p className="text-orange-500 font-medium mt-1">
        ₹{item?.price?.toFixed(2)}
      </p>
      <div className="flex items-center mt-2">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleDecreaseQuantity(item)}
          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <FiMinus className="h-4 w-4" />
        </motion.button>
        <motion.span
          className="mx-3 w-8 text-center"
          key={item.quantity}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
        >
          {item?.quantity}
        </motion.span>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleIncreaseQuantity(item)}
          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <FiPlus className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  </motion.div>
)

export default CartItem
