import React from "react"
import { motion } from "motion/react"
import { setFilters } from "../../features/menuSlice"
import { useDispatch } from "react-redux"
import { FiSearch } from "react-icons/fi"

const SearchSortSection = ({ itemVariants, filters }) => {
  const dispatch = useDispatch()
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-6"
      variants={itemVariants}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for dishes, restaurants or tags..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={filters.searchQuery}
            onChange={(e) =>
              dispatch(
                setFilters({
                  filterType: "searchQuery",
                  value: e.target.value,
                })
              )
            }
          />
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="sort"
            className="text-sm text-gray-700 dark:text-gray-300"
          >
            Sort by:
          </label>
          <select
            id="sort"
            value={filters.sortOption}
            onChange={(e) =>
              dispatch(
                setFilters({
                  filterType: "sortOption",
                  value: e.target.value,
                })
              )
            }
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </motion.div>
  )
}

export default SearchSortSection
