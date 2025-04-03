import { FiArrowRight } from "react-icons/fi"
import { FaMagic, FaApple, FaGooglePlay } from "react-icons/fa"
import { motion } from "framer-motion"

const AppDownload = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 dark:bg-gray-900"
    >
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-indigo-900 to-purple-800 dark:from-indigo-950 dark:to-purple-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-auto"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            alt="Happy users ordering"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 sm:p-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-white"
            >
              <FaMagic className="text-yellow-400 text-2xl sm:text-3xl mr-3" />
              <div>
                <p className="text-xs sm:text-sm font-light">JOIN OVER</p>
                <p className="text-xl sm:text-2xl font-bold">
                  1 Million+ Happy Users
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={itemVariants}
          className="lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-yellow-400 dark:bg-yellow-500 text-black text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-3 sm:mb-4"
            >
              NEW GENERATION ORDERING
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
            >
              Ordering is more <br />
              <span className="text-yellow-400 dark:text-yellow-300">
                personalized
              </span>{" "}
              &amp;{" "}
              <span className="text-yellow-400 dark:text-yellow-300">
                instant
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/80 dark:text-gray-300 mb-4 sm:mb-6"
            >
              Experience the future of food ordering with AI-powered
              personalization and lightning-fast delivery.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="space-y-4 sm:space-y-6"
          >
            {[
              "Get personalized recommendations",
              "Skip lines with instant ordering",
              "Exclusive app-only deals",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <div className="flex-shrink-0 bg-yellow-400/20 dark:bg-yellow-300/20 p-2 rounded-full mr-3 sm:mr-4">
                  <FiArrowRight className="text-yellow-400 dark:text-yellow-300" />
                </div>
                <p className="text-white dark:text-gray-200 text-sm sm:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
            <h4 className="text-white/80 dark:text-gray-300 font-medium mb-3 sm:mb-4 text-base sm:text-lg">
              Download our app today
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center justify-center bg-black dark:bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg px-4 py-2 sm:px-5 sm:py-3 transition-colors duration-300"
              >
                <FaApple className="mr-2 text-xl" />
                <span>App Store</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center justify-center bg-black dark:bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg px-4 py-2 sm:px-5 sm:py-3 transition-colors duration-300"
              >
                <FaGooglePlay className="mr-2 text-xl" />
                <span>Google Play</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AppDownload
