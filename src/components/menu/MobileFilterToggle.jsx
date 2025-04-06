import React from "react"
import { FiFilter, FiX } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { setIsMobileFiltersOpen } from "../../features/menuSlice"

const MobileFilterToggle = ({ isMobileFiltersOpen }) => {
  const dispatch = useDispatch()
  return (
    <div className="lg:hidden flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        Filter Menu
      </h2>
      <button
        onClick={() => dispatch(setIsMobileFiltersOpen(!isMobileFiltersOpen))}
        className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
      >
        {isMobileFiltersOpen ? (
          <>
            <FiX className="h-5 w-5" />
            <span>Close</span>
          </>
        ) : (
          <>
            <FiFilter className="h-5 w-5" />
            <span>Filters</span>
          </>
        )}
      </button>
    </div>
  )
}

export default MobileFilterToggle
