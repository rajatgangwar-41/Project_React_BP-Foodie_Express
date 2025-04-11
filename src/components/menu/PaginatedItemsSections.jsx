import React, { useState } from "react"
import { motion } from "motion/react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { FiClock, FiShoppingCart, FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"
import {
  useAddItemMutation,
  useIncreaseQuantityMutation,
} from "../../features/cartApiSlice"
import { useAuth, usePopup } from "../../hooks"
import toast from "react-hot-toast"

// Tag colors mapping
const tagColors = {
  "Wood-fired":
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  Authentic:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Fresh:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  Shareable: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  "Comfort Food":
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Seafood: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200", // Default color if not specified
  Healthy: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "Best Seller":
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Vegetarian:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Quick Meal": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
  Seasonal: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  Classic:
    "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  Breakfast:
    "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
  Sweet:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", // Default color if not specified
  Spicy: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Street Food":
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  New: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Dairy-Free": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  Steamed: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "Hand-folded":
    "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  Juicy: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
}

const PaginatedItemsSections = ({
  containerVariants,
  itemVariants,
  paginatedItems,
  filteredItems,
}) => {
  // Get color for tag
  const getTagColor = (tag) => {
    return (
      tagColors[tag] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    )
  }

  const [_, setMenuItems] = useState(filteredItems)
  const { items: cartItems } = usePopup()
  const [addItem] = useAddItemMutation()
  const [increaseQuantity] = useIncreaseQuantityMutation()
  const { id } = useAuth()

  // Toggle favorite status
  const toggleFavorite = (itemId) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
      )
    )
  }

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      const newItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
      increaseQuantity({
        id,
        item,
        quantity: 1,
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
        quantity: 1,
        cartItems: [{ ...item, quantity: 1 }, ...cartItems],
      })
      toast.success(`1 ${item.name} Added to the cart!`, {
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
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
      variants={containerVariants}
    >
      {paginatedItems.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 group relative"
        >
          {item.isPopular && (
            <div className="absolute top-3 left-3 z-10 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </div>
          )}
          <Link to={`/food-item/${item.id}`} state={item} className="block">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  toggleFavorite(item.id)
                }}
                className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label={
                  item.isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                {item.isFavorite ? (
                  <FaHeart className="h-5 w-5 text-red-500" />
                ) : (
                  <FaRegHeart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
              {item.tags.length > 0 && (
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs font-medium rounded-full shadow-sm ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">
                  <FiStar className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                    {item.rating}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {item.restaurant}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                {item.cuisine}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FiClock className="h-4 w-4" />
                  <span>{item.prepTime} min</span>
                </div>
                <div className="text-lg font-bold text-orange-500 dark:text-orange-400">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            </div>
          </Link>

          <div className="px-4 pb-4">
            <button
              onClick={() => handleAddToCart(item)}
              className="w-full flex items-center justify-center gap-2 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              <FiShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default PaginatedItemsSections
