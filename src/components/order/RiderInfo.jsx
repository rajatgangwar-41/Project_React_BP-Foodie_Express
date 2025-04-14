import { motion } from "motion/react"
import { FiPhone, FiStar, FiTruck, FiUser } from "react-icons/fi"

const RiderInfo = ({ rider }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <FiUser className="text-purple-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Your Rider
        </h3>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-200 dark:border-orange-800">
          <img
            src={rider.image}
            alt={rider.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white">
            {rider.name}
          </h4>
          <div className="flex items-center gap-1">
            <FiStar className="text-yellow-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {rider.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FiPhone className="text-gray-500 dark:text-gray-400" />
          <a
            href={`tel:${rider.phone.replace(/\D/g, "")}`}
            className="font-medium text-gray-800 dark:text-white hover:text-orange-500 transition-colors"
          >
            {rider.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FiTruck className="text-gray-500 dark:text-gray-400" />
          <span className="font-medium text-gray-800 dark:text-white">
            {rider.vehicle}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default RiderInfo
