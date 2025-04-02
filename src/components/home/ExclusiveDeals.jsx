import { FaChevronLeft, FaChevronRight, FaTag } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

const ExclusiveDeals = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const restaurants = [
    {
      name: "The Golden Fork",
      discount: "-40%",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      name: "Bella Napoli Pizzeria",
      discount: "-35%",
      image:
        "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Sakura Sushi Bar",
      discount: "-25%",
      image:
        "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Le Petit Bistro",
      discount: "-30%",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Burger Junction",
      discount: "-20%",
      image:
        "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Tandoori Nights",
      discount: "-15%",
      image:
        "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
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
      checkScrollPosition()
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition)
      }
    }
  }, [])

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Exclusive<span className="text-orange-400">&nbsp;Deals</span>
          </h2>
          <FaTag className="text-black text-2xl sm:text-3xl ml-3 mt-1" />
        </div>
        <Link
          to="/categories"
          className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
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
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide"
        >
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all bg-white"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full">
                <img
                  alt={restaurant.name}
                  className="h-full w-full object-cover"
                  src={restaurant.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute flex items-center justify-center top-4 sm:top-5 rounded-l-full right-0 bg-black text-white text-sm sm:text-base md:text-lg font-bold pl-3 sm:pl-4 pr-2 py-1 gap-2 sm:gap-3 z-10">
                  <FaTag className="text-orange-400 text-sm sm:text-base md:text-lg" />
                  <span>{restaurant.discount}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-10">
                  <p className="text-orange-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-1">
                    Restaurant
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {restaurant.name}
                  </h3>
                </div>
              </div>
            </div>
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

export default ExclusiveDeals
