import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { popularRestaurants } from "../../constants"
import { useDispatch } from "react-redux"
import { openFilterSection, setFilters } from "../../features/menuSlice"

const PopularRestaurants = ({ containerVariants, itemVariants }) => {
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

  const handleOrderButton = (restaurantName) => {
    console.log(restaurantName)
    dispatch(openFilterSection("restaurant"))
    dispatch(setFilters({ filterType: "restaurant", value: restaurantName }))
    navigate("/menu")
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      // Initial check with slight delay
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
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Popular{" "}
          <span className="text-orange-500 dark:text-orange-400">
            Restaurants
          </span>
        </h2>
        <button
          onClick={handleViewAll}
          className="px-6 py-2 sm:px-8 sm:py-3 bg-black dark:bg-gray-800 text-white text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg dark:hover:bg-gray-700"
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
            className="absolute left-2 top-1/2 -translate-y-10 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
        >
          {popularRestaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-56 sm:w-60 md:w-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white dark:bg-gray-800"
            >
              <div
                onClick={() => handleOrderButton(restaurant.name)}
                className="relative h-40 sm:h-48 md:h-56 w-full"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  alt={restaurant.name}
                  className="h-full w-full object-cover"
                  src={restaurant.image}
                  loading="lazy"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-2 left-2 bg-black/70 dark:bg-gray-900/80 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full flex items-center gap-1"
                >
                  <FaStar className="text-yellow-400" />
                  <span>{restaurant.rating}</span>
                </motion.div>
              </div>
              <div className="bg-orange-500 dark:bg-orange-600 h-16 sm:h-20 flex items-center justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white text-center px-2">
                  {restaurant.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {showRightArrow && (
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 top-1/2 -translate-y-10 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Scroll right"
          >
            <FaChevronRight className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}
      </motion.div>
    </motion.section>
  )
}

export default PopularRestaurants
