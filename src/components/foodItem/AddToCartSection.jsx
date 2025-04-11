import { motion } from "motion/react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi"
import { useAuth, usePopup } from "../../hooks"
import {
  useAddItemMutation,
  useIncreaseQuantityMutation,
} from "../../features/cartApiSlice"

const AddToCartSection = ({ foodItem }) => {
  const [quantity, setQuantity] = useState(1)
  const { items: cartItems } = usePopup()
  const { id } = useAuth()

  const [addItem] = useAddItemMutation()
  const [increaseQuantity] = useIncreaseQuantityMutation()

  // Handle add to cart
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      const newItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      )
      increaseQuantity({
        id,
        item,
        quantity,
        cartItems: [...newItems],
      })
      toast.success(`${item.name} quantity increased by 1!`, {
        position: "top-center",
        style: {
          background: "#10B981",
          color: "#fff",
        },
      })
    } else {
      addItem({
        id,
        item,
        quantity,
        cartItems: [{ ...item, quantity }, ...cartItems],
      })
      toast.success(`${quantity} ${item.name} Added to the cart!`, {
        position: "top-center",
        style: {
          background: "#10B981",
          color: "#fff",
        },
      })
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="lg:w-1/3"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 sticky top-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Order Now
        </h3>

        {/* Quantity Selector */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Quantity
          </label>
          <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden w-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FiMinus />
            </button>
            <span className="flex-1 text-center text-gray-800 dark:text-white font-medium">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FiPlus />
            </button>
          </div>
        </div>

        {/* Price Summary */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 dark:text-gray-400">Price</span>
            <span className="text-gray-800 dark:text-white">
              ₹{foodItem.price.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 dark:text-gray-400">Quantity</span>
            <span className="text-gray-800 dark:text-white">{quantity}</span>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-800 dark:text-white">
              Total
            </span>
            <span className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              ₹{(foodItem.price * quantity).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleAddToCart(foodItem)}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg shadow-md font-medium text-lg"
        >
          <FiShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default AddToCartSection
