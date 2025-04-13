import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useAuth } from "../../../hooks"
import { setIsCartOpen } from "../../../features/popupSlice"

const CartFooter = ({ totalAmount }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useAuth()
  const { deliveryFee, tax } = useSelector((state) => state.order)

  const handleCheckoutButton = () => {
    dispatch(setIsCartOpen(false))
    navigate(`/checkout/${user?.userId}`)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-t border-gray-200 dark:border-gray-700 p-4"
    >
      <div className="flex justify-between mb-4">
        <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
        <span className="font-medium text-gray-800 dark:text-white">
          ₹{totalAmount?.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600 dark:text-gray-300">Delivery</span>
        <span className="font-medium text-gray-800 dark:text-white">
          ₹{deliveryFee?.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600 dark:text-gray-300">Tax</span>
        <span className="font-medium text-gray-800 dark:text-white">
          ₹{tax}
        </span>
      </div>
      <div className="flex justify-between text-lg font-bold mb-6">
        <span className="text-gray-800 dark:text-white">Total</span>
        <span className="text-orange-500">
          ₹{(totalAmount + deliveryFee + tax).toFixed(2)}
        </span>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleCheckoutButton()}
        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
      >
        Proceed to Checkout
      </motion.button>
    </motion.div>
  )
}

export default CartFooter
