import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { FaSearch, FaUtensils } from "react-icons/fa"

const NoFoodItemFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] px-4 mt-20 md:mt-10 text-center"
    >
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="mb-6 p-4 bg-rose-100 dark:bg-rose-900/20 rounded-full"
      >
        <FaUtensils className="text-4xl text-rose-500 dark:text-rose-400" />
      </motion.div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
        Food Item Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8">
        We couldn't find the dish you're looking for. It might have been removed
        or doesn't exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/menu"
          className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <FaUtensils />
          Browse Menu
        </Link>
        <Link
          to="/menu"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <FaSearch />
          Search Again
        </Link>
      </div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-sm text-gray-500 dark:text-gray-400"
      >
        Still can't find what you need? <br className="sm:hidden" />
        <Link
          to="/contact"
          className="text-rose-500 dark:text-rose-400 hover:underline"
        >
          Contact our support
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default NoFoodItemFound
