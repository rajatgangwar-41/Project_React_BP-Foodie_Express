import { motion } from "motion/react"
import { FiShoppingCart } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const EmptyCart = ({ setIsCartOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBrowseMenu = () => {
    dispatch(setIsCartOpen(false))
    navigate("/menu")
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col items-center justify-center p-6"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
        }}
      >
        <FiShoppingCart className="h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" />
      </motion.div>
      <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
        Your cart is empty
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">
        Looks like you haven't added anything to your cart yet
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
        onClick={handleBrowseMenu}
      >
        Browse Menu
      </motion.button>
    </motion.div>
  )
}

export default EmptyCart
