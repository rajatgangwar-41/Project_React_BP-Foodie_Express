import { motion } from "motion/react"

const RestaurantSection = ({ foodItem, renderStars }) => {
  const generateRestaurantRating = () => {
    const integerPart = Math.floor(Math.random()) + 4 // Random integer 1 to 5
    const decimalPart = Math.floor(Math.random() * 10) / 10 // Random decimal 0.0 to 0.9

    // Ensure we don't get 5.1 or higher due to floating-point inaccuracies
    if (integerPart === 5 && decimalPart > 0) {
      return 5.0
    }

    return (integerPart + decimalPart).toFixed(1)
  }

  const restaurantRating = generateRestaurantRating()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 mb-12"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        About the Restaurant
      </h3>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-orange-500">
          <img
            src={foodItem.restaurantImage}
            alt="Restaurant"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-gray-800 dark:text-white">
            {foodItem.restaurant}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Specializing in {foodItem.cuisine} cuisine
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex">
              {renderStars(restaurantRating)} {/* Assuming restaurant rating */}
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {restaurantRating} (
              {Math.floor(Math.random() * (400 - 100) + 100)} reviews)
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default RestaurantSection
