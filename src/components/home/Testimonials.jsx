import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { testimonials } from "../../constants"

const Testimonials = ({ containerVariants, itemVariants }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const scrollSpeed = 1
  const scrollDirection = useRef(1)
  const animationFrameId = useRef(null)
  const isUserInteracting = useRef(false)
  const interactionTimeout = useRef(null)

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    isUserInteracting.current = true
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
    resetInteractionTimeout()
  }

  const scrollRight = () => {
    isUserInteracting.current = true
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
    resetInteractionTimeout()
  }

  const resetInteractionTimeout = () => {
    clearTimeout(interactionTimeout.current)
    interactionTimeout.current = setTimeout(() => {
      isUserInteracting.current = false
    }, 5000)
  }

  const scrollContent = () => {
    if (scrollContainerRef.current && !isUserInteracting.current) {
      const container = scrollContainerRef.current
      const maxScroll = container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollDirection.current * scrollSpeed
      }

      checkScrollPosition()
    }
    animationFrameId.current = requestAnimationFrame(scrollContent)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      setTimeout(checkScrollPosition, 100)
      animationFrameId.current = requestAnimationFrame(scrollContent)
    }
    return () => {
      if (container)
        container.removeEventListener("scroll", checkScrollPosition)
      cancelAnimationFrame(animationFrameId.current)
      clearTimeout(interactionTimeout.current)
    }
  }, [])

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 dark:bg-gray-900"
    >
      <motion.div variants={itemVariants} className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Customer{" "}
          <span className="text-orange-500 dark:text-orange-400">
            Testimonials
          </span>
        </h2>
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
          className="flex gap-6 overflow-x-auto pb-6 sm:pb-8 scrollbar-hide scroll-smooth"
          onMouseEnter={() => (isUserInteracting.current = true)}
          onMouseLeave={() => (isUserInteracting.current = false)}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-gray-800/50 transition-all bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 sm:border-4 border-orange-100 dark:border-gray-600"
                    src={testimonial.image}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      <FaMapMarkerAlt className="mr-1 sm:mr-2 text-orange-400" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="ml-auto flex items-center bg-orange-500 dark:bg-orange-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold"
                  >
                    <FaStar className="mr-1" />
                    <span>{testimonial.rating}</span>
                  </motion.div>
                </div>

                <div className="relative pl-6 sm:pl-8">
                  <FaQuoteLeft className="text-orange-200 dark:text-orange-300/50 text-2xl sm:text-3xl absolute left-0 top-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    <FaClock className="mr-1 sm:mr-2 text-orange-400" />
                    <span>{testimonial.date}</span>
                  </div>
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

export default Testimonials
