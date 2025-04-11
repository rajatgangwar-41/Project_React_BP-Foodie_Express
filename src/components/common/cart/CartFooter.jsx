import { motion } from "motion/react"
import { useState } from "react"

const MAX_DELIVERY_FEE = 50
const MIN_DELIVERY_FEE = 10

const CartFooter = ({ totalAmount }) => {
  const [deliveryFee] = useState(() =>
    Math.floor(
      Math.random() * (MAX_DELIVERY_FEE - MIN_DELIVERY_FEE) + MIN_DELIVERY_FEE
    )
  )
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-t border-gray-200 dark:border-gray-700 p-4"
    >
      <div className="flex justify-between mb-4">
        <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
        <span className="font-medium text-gray-800 dark:text-white">
          ₹{totalAmount}
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600 dark:text-gray-300">Delivery</span>
        <span className="font-medium text-gray-800 dark:text-white">
          ₹{deliveryFee}
        </span>
      </div>
      <div className="flex justify-between text-lg font-bold mb-6">
        <span className="text-gray-800 dark:text-white">Total</span>
        <span className="text-orange-500">
          ₹{(totalAmount + deliveryFee).toFixed(2)}
        </span>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
      >
        Proceed to Checkout
      </motion.button>
    </motion.div>
  )
}

export default CartFooter
