import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

const PopularRestaurants = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

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
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Popular <span className="text-orange-400">Restaurants</span>
        </h2>
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
              className="flex-shrink-0 w-56 sm:w-60 md:w-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-40 sm:h-48 md:h-56 w-full">
                <img
                  alt={restaurant.name}
                  className="h-full w-full object-cover"
                  src={restaurant.image}
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{restaurant.rating}</span>
                </div>
              </div>
              <div className="bg-orange-500 h-16 sm:h-20 flex items-center justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white text-center px-2">
                  {restaurant.name}
                </h3>
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

export default PopularRestaurants
