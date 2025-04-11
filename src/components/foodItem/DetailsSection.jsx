import { motion } from "motion/react"
import { FaLeaf, FaPepperHot } from "react-icons/fa"
import { FiAlertCircle, FiClock } from "react-icons/fi"

const DetailsSection = ({ foodItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="lg:w-2/3"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-8 border border-gray-100 dark:border-gray-700">
        {/* Key Features - Minimal Badges */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 rounded-full text-sm">
            <FiClock className="text-orange-500 text-sm" />
            <span className="text-orange-700 dark:text-orange-300">
              {foodItem.prepTime} mins
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm">
            <svg
              className="w-3.5 h-3.5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-blue-700 dark:text-blue-300">
              {foodItem.calories} kcal
            </span>
          </div>
          {foodItem.dietaryInfo.vegetarian && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full text-sm text-green-700 dark:text-green-300">
              <FaLeaf />
              Vegetarian
            </div>
          )}
          {foodItem.dietaryInfo.glutenFree && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 rounded-full text-sm text-purple-700 dark:text-purple-300">
              <FiAlertCircle />
              Gluten-Free
            </div>
          )}
          {foodItem.dietaryInfo.spicy && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 rounded-full text-sm text-red-700 dark:text-red-300">
              <FaPepperHot />
              Spicy
            </div>
          )}
        </div>

        {/* Ingredients - Card Grid */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></span>
            Ingredients
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {foodItem.ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                  {ingredient}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Serving Suggestions - Elegant Cards */}
        {foodItem.servingSuggestions && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></span>
              Serving Suggestions
            </h3>
            <div className="space-y-3">
              {foodItem.servingSuggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 2 }}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {suggestion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default DetailsSection
