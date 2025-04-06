import { FaChevronLeft, FaChevronRight, FaTag, FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { openFilterSection, setFilters } from "../../features/menuSlice"
import { useDispatch } from "react-redux"
import { exclusiveDeals } from "../../constants"

const ExclusiveDeals = ({ containerVariants, itemVariants }) => {
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
    dispatch(openFilterSection("restaurant"))
    navigate("/menu")
  }

  const handleOrderButton = (restaurantName) => {
    dispatch(openFilterSection("restaurant"))
    dispatch(setFilters({ filterType: "restaurant", value: restaurantName }))
    navigate("/menu")
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      // Initial check
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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 dark:bg-gray-900"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
      >
        <div className="flex items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Exclusive{" "}
            <span className="text-orange-500 dark:text-orange-400">Deals</span>
          </h2>
          <FaTag className="text-black dark:text-white text-2xl sm:text-3xl ml-3 mt-1" />
        </div>
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
            className="absolute left-2 top-1/2 -translate-y-13 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
        >
          {exclusiveDeals.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white dark:bg-gray-800"
            >
              <div className="relative h-48 sm:h-56 w-full">
                <img
                  alt={restaurant.name}
                  className="h-full w-full object-cover"
                  src={restaurant.image}
                  loading="lazy"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute flex items-center justify-center top-3 rounded-l-full right-0 bg-black dark:bg-gray-900 text-white text-sm font-bold pl-3 pr-2 py-1 gap-2 z-10"
                >
                  <FaTag className="text-orange-400 text-sm" />
                  <span>-{restaurant.discountPercentage}%</span>
                </motion.div>
              </div>

              <div className="p-4 dark:text-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{restaurant.name}</h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    <FaStar className="text-yellow-400 mr-1 text-sm" />
                    <span className="text-sm font-medium">
                      {restaurant.rating}
                    </span>
                  </motion.div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {restaurant.cuisine} • {restaurant.deliveryTime}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 dark:text-gray-400 line-through text-sm">
                      ₹{restaurant.originalPrice}
                    </span>
                    <span className="text-orange-500 dark:text-orange-400 font-bold">
                      ₹{restaurant.discountedPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleOrderButton(restaurant.name)}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors duration-300 text-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showRightArrow && (
          <motion.button
            onClick={scrollRight}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 top-1/2 -translate-y-13 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Scroll right"
          >
            <FaChevronRight className="h-5 w-5 text-orange-500" />
          </motion.button>
        )}
      </motion.div>
    </motion.section>
  )
}

export default ExclusiveDeals
