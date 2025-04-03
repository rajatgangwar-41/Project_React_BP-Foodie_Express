import { FaChevronLeft, FaChevronRight, FaTag, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

const ExclusiveDeals = ({ containerVariants, itemVariants }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const restaurants = [
    {
      id: 1,
      name: "The Golden Fork",
      originalPrice: 1200,
      discountPercentage: 40,
      discountedPrice: 720,
      rating: 4.7,
      cuisine: "Fine Dining",
      deliveryTime: "25-35 min",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      id: 2,
      name: "Bella Napoli Pizzeria",
      originalPrice: 900,
      discountPercentage: 35,
      discountedPrice: 585,
      rating: 4.5,
      cuisine: "Italian",
      deliveryTime: "20-30 min",
      image:
        "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Sakura Sushi Bar",
      originalPrice: 1500,
      discountPercentage: 25,
      discountedPrice: 1125,
      rating: 4.9,
      cuisine: "Japanese",
      deliveryTime: "30-40 min",
      image:
        "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Le Petit Bistro",
      originalPrice: 1100,
      discountPercentage: 30,
      discountedPrice: 770,
      rating: 4.3,
      cuisine: "French",
      deliveryTime: "25-35 min",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Burger Junction",
      originalPrice: 800,
      discountPercentage: 20,
      discountedPrice: 640,
      rating: 4.2,
      cuisine: "American",
      deliveryTime: "15-25 min",
      image:
        "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "Tandoori Nights",
      originalPrice: 950,
      discountPercentage: 15,
      discountedPrice: 807.5,
      rating: 4.6,
      cuisine: "Indian",
      deliveryTime: "20-30 min",
      image:
        "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
  ]

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
        <Link
          to="/categories"
          className="px-6 py-2 sm:px-8 sm:py-3 bg-black dark:bg-gray-800 text-white text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg dark:hover:bg-gray-700"
        >
          View All
        </Link>
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
          {restaurants.map((restaurant) => (
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
                  <Link
                    to={`/restaurant/${restaurant.id}`}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors duration-300 text-sm"
                  >
                    Order Now
                  </Link>
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
