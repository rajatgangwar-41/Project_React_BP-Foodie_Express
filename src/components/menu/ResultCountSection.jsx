import React from "react"
import { clearAllFilters } from "../../features/menuSlice"
import { useDispatch } from "react-redux"
import { MdOutlineClear } from "react-icons/md"

const ResultCountSection = ({ filteredItems, filters }) => {
  const dispatch = useDispatch
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}{" "}
        found
      </div>
      {(filters.rating ||
        filters.cuisine.length > 0 ||
        filters.dish.length > 0 ||
        filters.restaurant.length > 0 ||
        filters.tag.length > 0 ||
        filters.dietary.vegetarian ||
        filters.dietary.glutenFree ||
        filters.dietary.spicy ||
        filters.searchQuery) && (
        <button
          onClick={() => dispatch(clearAllFilters())}
          className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 flex items-center gap-1"
        >
          <MdOutlineClear className="h-4 w-4" />
          Clear filters
        </button>
      )}
    </div>
  )
}

export default ResultCountSection
