import { useEffect, useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const PopularDishes = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

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
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
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
      checkScrollPosition() // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition)
      }
    }
  }, [])

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Popular <span className="text-orange-400">Dishes</span>
        </h2>
        <Link
          to="/categories"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-black text-white text-base sm:text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          View All
        </Link>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-9 z-10 bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="h-5 w-5 text-orange-500" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 md:gap-8 items-center overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-28 sm:h-32 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center px-4 sm:px-8 border snap-start border-gray-100 hover:border-orange-200 bg-white"
            >
              <img
                alt={category.name}
                className="w-25 h-25 sm:w-30 sm:h-30 rounded-full object-cover"
                src={category.image}
              />
              <div className="flex-grow text-center px-3 sm:px-4">
                <span className="text-lg sm:text-xl font-semibold text-gray-800">
                  {category.name}
                </span>
              </div>
              <span className="text-gray-400 text-2xl sm:text-3xl pb-1 sm:pb-2 hover:text-orange-500 transition-colors">
                →
              </span>
            </Link>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-9 z-10 bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <FaChevronRight className="h-5 w-5 text-orange-500" />
          </button>
        )}
      </div>
    </section>
  )
}

export default PopularDishes
