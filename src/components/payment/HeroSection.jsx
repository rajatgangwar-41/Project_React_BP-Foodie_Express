import { motion } from "motion/react"
import { FiPackage } from "react-icons/fi"

const HeroSection = ({ statusConfig, orderId }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`pt-34 pb-16 text-center ${statusConfig.bgGradient} shadow-lg`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="inline-block mb-6"
        >
          {statusConfig.icon}
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-3 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {statusConfig.title}
        </motion.h1>

        <motion.p
          className="text-xl text-white/90 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {statusConfig.subtitle} {statusConfig.emoji}
        </motion.p>

        {statusConfig.showOrderNumber && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-normal break-words"
          >
            <FiPackage className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
            <span className="font-mono text-sm sm:text-base tracking-wide">
              #{orderId}
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default HeroSection
