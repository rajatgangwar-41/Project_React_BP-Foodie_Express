import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

const Partners = ({ containerVariants, itemVariants }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 dark:bg-gray-900"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Join{" "}
          <span className="text-orange-500 dark:text-orange-400">
            Our Network
          </span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-9xl mx-auto"
      >
        {/* Restaurant Partner Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="group relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-gray-800/50 transition-all duration-500"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Professional chef cooking"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="transform transition-all duration-500 group-hover:-translate-y-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Partner With Us
              </h3>
              <p className="text-white/90 mb-4 text-sm sm:text-base max-w-md">
                Grow your restaurant business with our platform
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/30 dark:group-hover:shadow-orange-400/30"
              >
                Get started{" "}
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaArrowRight className="ml-2" />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Rider Partner Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="group relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:hover:shadow-gray-800/50 transition-all duration-500"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Delivery rider with motorcycle"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="transform transition-all duration-500 group-hover:-translate-y-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ride With Us
              </h3>
              <p className="text-white/90 mb-4 text-sm sm:text-base max-w-md">
                Earn flexibly as a delivery partner
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-400/30"
              >
                Start earning{" "}
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <FaArrowRight className="ml-2" />
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Partners
