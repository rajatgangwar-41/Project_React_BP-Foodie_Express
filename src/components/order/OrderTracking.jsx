import { motion } from "motion/react"
import { FiClock } from "react-icons/fi"

const OrderTracking = ({ order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <FiClock className="text-purple-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Order Tracking
        </h3>
      </div>

      <div className="relative">
        {/* Timeline */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        <div className="space-y-6 pl-8">
          {order.tracking.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute -left-8 top-0 w-4 h-4 rounded-full border-2 ${
                  step.completed
                    ? "bg-green-500 border-green-500"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                }`}
              ></div>
              <div
                className={`${
                  index !== order.tracking.length - 1 ? "pb-8" : ""
                }`}
              >
                <p
                  className={`font-medium ${
                    step.completed
                      ? "text-gray-800 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {step.status}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(step.time).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                {step.status === "Driver assigned" && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src={order.rider.image}
                        alt={order.rider.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {order.rider.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default OrderTracking
