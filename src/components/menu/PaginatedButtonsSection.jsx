import React from "react"
import { motion } from "motion/react"
import { setCurrentPage } from "../../features/menuSlice"
import { useDispatch } from "react-redux"

const PaginatedButtonsSection = ({ itemVariants, currentPage, totalPages }) => {
  const dispatch = useDispatch()
  return (
    <motion.div className="flex justify-center mt-8" variants={itemVariants}>
      <nav className="flex flex-wrap items-center gap-1">
        <button
          onClick={() => dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => dispatch(setCurrentPage(page))}
            className={`px-4 py-2 rounded-lg ${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </motion.div>
  )
}

export default PaginatedButtonsSection
