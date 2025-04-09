import { FaStar, FaCheck, FaLock } from "react-icons/fa"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { stats, popularFoodItems } from "../../constants"

const HeroSection = ({ containerVariants, itemVariants, fadeInUp }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === popularFoodItems.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[900px] pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-0 lg:pb-0 overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ opacity: 0.8, scale: 1.1 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${popularFoodItems[currentIndex].image}')`,
                backgroundPosition: "center 30%",
                filter: "brightness(0.7)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto relative z-10 h-full w-full max-w-screen-9xl px-4 sm:px-6 pt-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="h-full flex flex-col lg:flex-row items-center"
        >
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0 pb-8 lg:pb-0">
            <motion.div variants={itemVariants} className="max-w-xl">
              <div className="mb-8">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/30"
                >
                  <FaStar className="mr-2 text-amber-200" />
                  PREMIUM DELIVERY
                </motion.span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight text-white">
                <motion.span
                  variants={fadeInUp}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100"
                >
                  Restaurant quality
                </motion.span>
                <br />
                <motion.span
                  variants={fadeInUp}
                  className="text-orange-400 drop-shadow-[0_2px_10px_rgba(251,146,60,0.4)]"
                >
                  meals at home
                </motion.span>
              </h1>

              <motion.div
                variants={itemVariants}
                className="relative mb-8 pl-6 border-l-4 border-orange-400/50"
              >
                <p className="text-xl text-gray-100 font-medium">
                  Our chefs prepare each dish with care using only the freshest
                  ingredients delivered to your door
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-5 mb-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/menu")}
                  className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-xl shadow-orange-500/30"
                >
                  <span className="relative z-10 text-lg sm:text-xl">
                    Order Now
                  </span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  ></span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/menu")}
                  className="px-8 py-4 bg-transparent border-2 border-white/40 hover:border-white text-white font-medium rounded-xl shadow-lg backdrop-blur-sm hover:backdrop-blur transition-all duration-300 text-lg sm:text-xl"
                >
                  View Menu
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center min-[506px]:justify-start gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-md"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaCheck className="text-green-300" />
                  </motion.div>
                  <span className="text-white font-medium">
                    No shipping charge
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-md"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaLock className="text-green-300" />
                  </motion.div>
                  <span className="text-white font-medium">
                    100% secure checkout
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col min-[530px]:flex-row justify-start gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -3, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    }}
                    className="w-full max-w-3xs mx-auto min-[530px]:w-[calc(33.333%-12px)] sm:max-md:flex-1 min-w-[150px] bg-black/40 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <motion.img
                        alt=""
                        className="w-10 h-10 object-contain"
                        src={stat.icon}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.3,
                        }}
                      />
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Food Card */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-4 lg:p-8">
            <Link
              to={`/food-item/${popularFoodItems[currentIndex].id}`}
              state={popularFoodItems[currentIndex]}
              className="relative  w-full max-w-lg"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.8,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    transition: { duration: 0.5 },
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl dark:shadow-xl dark:shadow-gray-900/30"
                >
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                    <motion.img
                      key={`image-${currentIndex}`}
                      initial={{ opacity: 0.8, scale: 1.1 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1.5 },
                      }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full object-cover"
                      src={popularFoodItems[currentIndex].image}
                      alt={popularFoodItems[currentIndex].name}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md flex items-center"
                    >
                      ₹{popularFoodItems[currentIndex].price.toFixed(2)}
                    </motion.div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700">
                    <motion.h3
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                      {popularFoodItems[currentIndex].name}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 dark:text-gray-300 mb-6"
                    >
                      {popularFoodItems[currentIndex].description}
                    </motion.p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-orange-600 dark:to-orange-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 w-full max-w-screen-9xl px-4 justify-center">
        {popularFoodItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-orange-400 to-amber-500 shadow-[0_0_8px_rgba(251,146,60,0.6)]"
                : "w-4 bg-white/60"
            }`}
            aria-label={`Show ${item.name}`}
          ></motion.button>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
