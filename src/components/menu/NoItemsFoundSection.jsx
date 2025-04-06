import React from "react"
import { motion } from "motion/react"
import { clearAllFilters } from "../../features/menuSlice"
import { useDispatch } from "react-redux"
import { FiSearch } from "react-icons/fi"

const NoItemsFoundSection = ({ itemVariants }) => {
  const dispatch = useDispatch
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm"
      variants={itemVariants}
    >
      <div className="w-32 h-32 mb-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        <FiSearch className="h-16 w-16 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        No items found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        We couldn't find any menu items matching your filters. Try adjusting
        your search or filters.
      </p>
      <button
        onClick={() => dispatch(clearAllFilters())}
        className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
      >
        Clear all filters
      </button>
    </motion.div>
  )
}

export default NoItemsFoundSection
