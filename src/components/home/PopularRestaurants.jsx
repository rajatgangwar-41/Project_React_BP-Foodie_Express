import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

const PopularRestaurants = ({ containerVariants, itemVariants }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const restaurants = [
    {
      name: "McDonald's",
      rating: 4.5,
      image:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/mcdonalds-logo.jpg?quality=82&strip=all",
    },
    {
      name: "Domino's Pizza",
      rating: 4.3,
      image:
        "https://i.pinimg.com/736x/5c/b3/9b/5cb39bb0b3c34fe6fd5736d8a7d629af.jpg",
    },
    {
      name: "Burger King",
      rating: 4.2,
      image:
        "https://www.allrecipes.com/thmb/swXNezpEjAoCXT0I0Y6cDhVjZxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-burger-king-logo-4x3-13a40f7f403a4e1cb25d0dba19871284.jpg",
    },
    {
      name: "KFC",
      rating: 4.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZ1VgXgLN1MgY9v525GevpepDSwd_TDQR7Q&s",
    },
    {
      name: "Subway",
      rating: 4.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUznIOFbi8lFHyUqGpiHO_wzpKN2KRu6IeA&s",
    },
    {
      name: "Pizza Hut",
      rating: 4.1,
      image:
        "https://cdn-payscale.com/content/logos/Pizza-Hut-Inc.SOURCE.crunchbase.png",
    },
    {
      name: "Taco Bell",
      rating: 4.1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2P3q3Sn5OGYW4GCkUiBVJAsbYi10MkoasZQ&s",
    },
    {
      name: "Starbucks",
      rating: 4.6,
      image:
        "https://cdn.logoworks.com/wp-content/uploads/2017/06/Untitled-2-640x360-1.png",
    },
    {
      name: "Wendy's",
      rating: 4.4,
      image:
        "https://logocreator.io/wp-content/uploads/2023/11/Wendys-Emblem.png",
    },
    {
      name: "Chik Fil A",
      rating: 4.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RT1bzoaHXN2h2wmUlrQgwV1ngq6xyHIAQ&s",
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
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-56 sm:w-60 md:w-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white dark:bg-gray-800"
            >
              <div className="relative h-40 sm:h-48 md:h-56 w-full">
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
