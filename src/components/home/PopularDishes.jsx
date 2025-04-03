import { useEffect, useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const PopularDishes = ({ containerVariants, itemVariants }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const categories = [
    {
      name: "Soup",
      path: "/category/soup",
      image:
        "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Bread",
      path: "/category/bread",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Steak",
      path: "/category/steak",
      image:
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Pasta",
      path: "/category/pasta",
      image:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Dessert",
      path: "/category/dessert",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Drinks",
      path: "/category/drinks",
      image:
        "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Burgers",
      path: "/category/burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Pizza",
      path: "/category/pizza",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Sushi",
      path: "/category/sushi",
      image:
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      name: "Salads",
      path: "/category/salads",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
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
        <Link
          to="/categories"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-black dark:bg-gray-800 text-white text-base sm:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg dark:hover:bg-gray-700"
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
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-36 sm:h-40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 snap-start"
            >
              <Link
                to={category.path}
                className="w-full h-full flex items-center px-6 sm:px-8 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-500 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
              >
                <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                  <img
                    alt={category.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-orange-100 dark:border-gray-600"
                    src={category.image}
                    loading="lazy"
                  />
                </motion.div>
                <div className="flex-grow text-center px-3 sm:px-4">
                  <span className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {category.name}
                  </span>
                </div>
                <motion.span
                  whileHover={{ x: 5 }}
                  className="text-gray-400 dark:text-gray-400 text-2xl sm:text-3xl pb-1 sm:pb-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  →
                </motion.span>
              </Link>
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
