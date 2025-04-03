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

const Testimonials = ({ containerVariants, itemVariants }) => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const scrollSpeed = 1
  const scrollDirection = useRef(1)
  const animationFrameId = useRef(null)
  const isUserInteracting = useRef(false)
  const interactionTimeout = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment:
        "The food was delivered quickly and was still hot! Amazing service!",
      rating: 5,
      location: "New York",
      date: "Oct 15, 2023 at 7:30 PM",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      comment: "So many restaurant options to choose from. Never disappointed!",
      rating: 4,
      location: "San Francisco",
      date: "Nov 2, 2023 at 12:45 PM",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      comment:
        "Impressed with the packaging - everything was neatly packed and warm.",
      rating: 5,
      location: "Chicago",
      date: "Sep 28, 2023 at 6:15 PM",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Lee",
      comment: "The delivery driver was very friendly and professional.",
      rating: 4,
      location: "Los Angeles",
      date: "Dec 10, 2023 at 8:00 PM",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 5,
      name: "Jessica Patel",
      comment: "Great food, but the delivery was a bit late.",
      rating: 3,
      location: "Houston",
      date: "Jan 5, 2024 at 1:30 PM",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 6,
      name: "Kevin Garcia",
      comment: "The app is easy to use and the tracking is accurate.",
      rating: 5,
      location: "Philadelphia",
      date: "Feb 18, 2024 at 6:45 PM",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 7,
      name: "Amanda Brown",
      comment: "Delicious food and excellent customer service.",
      rating: 5,
      location: "Phoenix",
      date: "Mar 3, 2024 at 9:15 PM",
      image: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
      id: 8,
      name: "Christopher Wilson",
      comment: "A little pricey, but the quality is worth it.",
      rating: 4,
      location: "San Antonio",
      date: "Apr 20, 2024 at 11:00 AM",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      id: 9,
      name: "Ashley Davis",
      comment: "My order was incorrect, but they quickly fixed it.",
      rating: 4,
      location: "San Diego",
      date: "May 12, 2024 at 2:30 PM",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 10,
      name: "Matthew Martinez",
      comment: "Best delivery experience I've had in a long time.",
      rating: 5,
      location: "Dallas",
      date: "Jun 25, 2024 at 7:00 PM",
      image: "https://randomuser.me/api/portraits/men/99.jpg",
    },
    {
      id: 11,
      name: "Lauren Anderson",
      comment: "The food was cold when it arrived.",
      rating: 2,
      location: "San Jose",
      date: "July 8, 2024 at 1:15 PM",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 12,
      name: "Brandon Thomas",
      comment: "Great selection of desserts!",
      rating: 4,
      location: "Austin",
      date: "Aug 22, 2024 at 6:00 PM",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      id: 13,
      name: "Stephanie Jackson",
      comment: "The delivery was super fast, even during rush hour.",
      rating: 5,
      location: "Jacksonville",
      date: "Sep 14, 2024 at 10:45 AM",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 14,
      name: "Ryan White",
      comment: "The portions were smaller than expected.",
      rating: 3,
      location: "Columbus",
      date: "Oct 28, 2024 at 3:30 PM",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 15,
      name: "Nicole Harris",
      comment: "The restaurant followed my special instructions perfectly.",
      rating: 5,
      location: "Charlotte",
      date: "Nov 11, 2024 at 8:30 PM",
      image: "https://randomuser.me/api/portraits/women/77.jpg",
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
