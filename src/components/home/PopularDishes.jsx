import { useEffect, useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { popularDishes } from "../../constants"
import { openFilterSection, setFilters } from "../../features/menuSlice"
import { useDispatch } from "react-redux"

const PopularDishes = ({ containerVariants, itemVariants }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  const handleViewAll = () => {
    dispatch(openFilterSection("dish"))
    navigate("/menu")
  }

  const handleOrderButton = (dishName) => {
    dispatch(openFilterSection("dish"))
    dispatch(setFilters({ filterType: "dish", value: dishName }))
    navigate("/menu")
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      // Initial check with slight delay to ensure container is rendered
      setTimeout(checkScrollPosition, 100)
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition)
      }
    }
  }, [])

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 dark:bg-gray-900"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Popular{" "}
          <span className="text-orange-500 dark:text-orange-400">Dishes</span>
        </h2>
        <button
          onClick={handleViewAll}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-black dark:bg-gray-800 text-white text-base sm:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg dark:hover:bg-gray-700"
        >
          View All
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="relative">
        {showLeftArrow && (
          <motion.button
            onClick={scrollLeft}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-2 top-1/2 -translate-y-9 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
        >
          {popularDishes.map((dish, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-36 sm:h-40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
            >
              <div
                onClick={() => handleOrderButton(dish.name)}
                className="w-full h-full flex items-center px-6 sm:px-8 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-500 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
              >
                <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                  <img
                    alt={dish.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-orange-100 dark:border-gray-600"
                    src={dish.image}
                    loading="lazy"
                  />
                </motion.div>
                <div className="flex-grow text-center px-3 sm:px-4">
                  <span className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {dish.name}
                  </span>
                </div>
                <motion.span
                  whileHover={{ x: 5 }}
                  className="text-gray-400 dark:text-gray-400 text-2xl sm:text-3xl pb-1 sm:pb-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {showRightArrow && (
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 top-1/2 -translate-y-9 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Scroll right"
          >
            <FaChevronRight className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}
      </motion.div>
    </motion.section>
  )
}

export default PopularDishes
