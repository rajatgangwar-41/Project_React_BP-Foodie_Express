import { motion, AnimatePresence } from "framer-motion"
import { FaStar, FaTrash } from "react-icons/fa"
import { FiAlertCircle, FiClock, FiHeart, FiShoppingCart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks"
import {
  useGetFavoritesQuery,
  useUpdateFavoritesMutation,
} from "../../features/favoritesApiSlice"
import { useDispatch } from "react-redux"
import { setCredentials, updateCredentials } from "../../features/authSlice"
import toast from "react-hot-toast"
import {
  useAddItemMutation,
  useIncreaseQuantityMutation,
} from "../../features/cartApiSlice"

const ErrorMessage = ({ message, onRetry, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        <FiAlertCircle className="text-red-500 dark:text-red-400 text-2xl mb-2" />
        <h3 className="text-red-600 dark:text-red-400 font-medium mb-2">
          Something went wrong
        </h3>
        <p className="text-red-500 dark:text-red-400 text-sm mb-4">
          {message || "Failed to load data"}
        </p>
        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRetry}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
          >
            Try Again
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

const LoadingSpinner = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "h-6 w-6 border-2",
    medium: "h-8 w-8 border-3",
    large: "h-12 w-12 border-4",
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`rounded-full border-t-transparent border-orange-500 ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

const FavoritesSection = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, id } = useAuth()

  // Fetch favorites with loading and error states
  const { data, isLoading, isError, error, refetch } = useGetFavoritesQuery(id)

  const [updateFavorites] = useUpdateFavoritesMutation()
  const [addItem] = useAddItemMutation()
  const [increaseQuantity] = useIncreaseQuantityMutation()
  const cartItems = user?.cart || []
  const favoriteFoods = data?.favorites || []

  const handleRemoveFromFavorites = async (item, e) => {
    e.stopPropagation()
    try {
      toast.success(`${item.name} removed from favorites!`, {
        position: "top-center",
        style: {
          background: "#EF4444", // Red background for removal
          color: "#fff",
          width: "fit-content",
          whiteSpace: "nowrap",
          padding: "12px 24px",
        },
        duration: 2000,
        icon: "🗑️", // Trash icon for removal
      })
      const { token: _, ...updatedUser } = await updateFavorites({
        id,
        item,
        favorites: favoriteFoods.filter((food) => food.id !== item.id),
      }).unwrap()
      dispatch(updateCredentials({ user: updatedUser }))
    } catch (error) {
      toast.dismiss()

      toast.error(`Failed to update favorites for ${item.name}!`, {
        position: "top-center",
        style: {
          background: "#F59E0B", // Amber background for errors
          color: "#fff",
          width: "fit-content",
          whiteSpace: "nowrap",
          padding: "12px 24px",
        },
        duration: 3000,
      })
      console.log("Failed to remove from favorites:", error)
    }
  }

  const handleAddToCart = async (item) => {
    try {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        // Increase quantity for existing item
        const newItems = cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )

        toast.success(`${item.name} quantity increased by 1!`, {
          position: "top-center",
          style: {
            background: "#10B981",
            color: "#fff",
            width: "fit-content",
            whiteSpace: "nowrap",
            padding: "12px 24px",
          },
          duration: 2000,
        })

        const { token: _, ...updatedUser } = await increaseQuantity({
          id,
          item,
          quantity: 1,
          cartItems: [...newItems],
        }).unwrap()

        dispatch(setCredentials({ user: updatedUser }))
      } else {
        // Add new item to cart

        toast.success(`1 ${item.name} added to cart!`, {
          position: "top-center",
          style: {
            background: "#10B981",
            color: "#fff",
            width: "fit-content",
            whiteSpace: "nowrap",
            padding: "12px 24px",
          },
          duration: 2000,
        })
        const { token: _, ...updatedUser } = await addItem({
          id,
          item,
          quantity: 1,
          cartItems: [{ ...item, quantity: 1 }, ...cartItems],
        }).unwrap()

        dispatch(setCredentials({ user: updatedUser }))
      }
    } catch (error) {
      toast.dismiss() // Clear any existing success toasts
      toast.error(`Failed to update cart for ${item.name}!`, {
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          width: "fit-content",
          whiteSpace: "nowrap",
          padding: "12px 24px",
        },
        duration: 3000,
      })
      console.error("Failed to update cart:", error)
    }
  }

  const handleFoodClick = (id) => {
    navigate(`/food-item/${id}`)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  // Error state
  if (isError) {
    return (
      <div className="p-6">
        <ErrorMessage
          message={error?.data?.message || "Failed to load favorites"}
          onRetry={refetch}
        />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Your Favorite Items
      </h2>

      {favoriteFoods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {favoriteFoods.map((food) => (
              <motion.div
                key={food.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleFoodClick(food.id)}
              >
                {/* Food Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {food.isPopular && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                {/* Food Details */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {food.name}
                    </h3>
                    <span className="text-lg font-bold text-orange-500 dark:text-orange-400">
                      ₹{food.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Restaurant Info */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={food.restaurantImage}
                        alt={food.restaurant}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {food.restaurant}
                    </span>
                  </div>

                  {/* Rating and Prep Time */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(food.rating)
                                ? "text-yellow-400"
                                : "text-gray-300 dark:text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {Number(food?.rating)?.toFixed(1)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiClock className="text-gray-500 dark:text-gray-400 text-sm" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {food.prepTime} min
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleRemoveFromFavorites(food, e)}
                      className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg flex items-center gap-1"
                    >
                      <FaTrash size={14} />
                      <span>Remove</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAddToCart(food)
                      }}
                      className="px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg flex items-center gap-1"
                    >
                      <FiShoppingCart size={14} />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <FiHeart className="text-gray-400 dark:text-gray-500 text-3xl" />
          </div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
            No favorites yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Save your favorite items to see them here
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default FavoritesSection
