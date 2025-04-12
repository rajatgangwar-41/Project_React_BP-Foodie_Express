import { motion } from "motion/react"
import { toast } from "react-hot-toast"
import { FiHeart, FiShare2 } from "react-icons/fi"
import { useUpdateFavoritesMutation } from "../../features/favoritesApiSlice"
import { useAuth } from "../../hooks"
import { useDispatch } from "react-redux"
import { updateCredentials } from "../../features/authSlice"

const AboutSection = ({ foodItem, renderStars, averageRating }) => {
  const dispatch = useDispatch()
  const { user, id } = useAuth()
  const [updateFavorites] = useUpdateFavoritesMutation()

  // Handle favorite toggle
  const handleFavorite = async (item) => {
    try {
      if (user?.favorites?.some((food) => food.id === item.id)) {
        // Remove from favorites
        const { token: _, ...updatedUser } = await updateFavorites({
          id,
          item,
          favorites: user.favorites.filter((food) => food.id !== item.id),
        }).unwrap()

        const successToast = toast.success(
          `${item.name} removed from favorites!`,
          {
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
          }
        )

        dispatch(updateCredentials({ user: updatedUser }))

        return successToast
      } else {
        // Add to favorites
        const { token: _, ...updatedUser } = await updateFavorites({
          id,
          item,
          favorites: [item, ...user.favorites],
        }).unwrap()

        const successToast = toast.success(`${item.name} added to favorites!`, {
          position: "top-center",
          style: {
            background: "#10B981", // Green background for addition
            color: "#fff",
            width: "fit-content",
            whiteSpace: "nowrap",
            padding: "12px 24px",
          },
          duration: 2000,
          icon: "❤️", // Heart icon for addition
        })

        dispatch(updateCredentials({ user: updatedUser }))

        return successToast
      }
    } catch (error) {
      // Dismiss any existing success toasts before showing error
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

      console.log("Failed to update favorites:", error)
    }
  }

  // Handle share
  const handleShare = () => {
    toast.success("Link copied to clipboard!", {
      position: "top-center",
    })
  }

  const isFavorite = user?.favorites?.some((food) => food.id === foodItem.id)

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-8">
      {/* Food Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-4">
          <img
            src={foodItem.image}
            alt={foodItem.name}
            className="w-full h-80 md:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          />
          {foodItem.isPopular && (
            <span className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
              Popular
            </span>
          )}
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="lg:w-1/2"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 h-full">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {foodItem.name}
            </h1>
            <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              ₹{foodItem.price.toFixed(2)}
            </span>
          </div>

          {/* Rating & Cuisine */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(averageRating)}</div>
              <span className="text-gray-700 dark:text-gray-300">
                {averageRating} (
                {foodItem.reviews.length +
                  Math.floor(Math.random() * 300 + 100)}
                )
              </span>
            </div>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full">
              {foodItem.cuisine}
            </span>
          </div>

          {/* Share & Save Buttons */}
          <div className="flex gap-3 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-sky-50 dark:bg-sky-900/20 rounded-lg text-sky-600 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors border border-sky-100 dark:border-sky-800/50"
            >
              <FiShare2 className="shrink-0" />
              <span>Share</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFavorite(foodItem)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors border ${
                isFavorite
                  ? "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 border-rose-200 dark:border-rose-800/50"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-200 dark:border-gray-600"
              }`}
            >
              <FiHeart
                className={isFavorite ? "text-rose-500 fill-rose-500" : ""}
              />
              <span>{isFavorite ? "Saved" : "Save"}</span>
            </motion.button>
          </div>

          {/* About the Food */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              About This Dish
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{foodItem.about}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutSection
