import { motion } from "motion/react"
import { FiClock } from "react-icons/fi"

const Countdown = ({ countdown }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-8 text-center"
    >
      <div className="inline-flex dark:border-2 dark:border-gray-700 items-center bg-white dark:bg-gray-800 shadow-sm rounded-full px-6 py-2">
        <FiClock className="mr-2 text-gray-500" />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Redirecting in <span className="font-bold">{countdown}s</span>
        </span>
      </div>
    </motion.div>
  )
}

export default Countdown
