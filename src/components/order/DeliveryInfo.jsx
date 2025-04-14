import { motion } from "motion/react"
import { FiUser, FiMail, FiMapPin, FiPhone, FiCalendar } from "react-icons/fi"

const DeliveryInfo = ({ order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <FiUser className="text-orange-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Delivery Information
        </h3>
      </div>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <FiUser className="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Full Name
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              {order.personal.firstName} {order.personal.lastName}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiMail className="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Email Address
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              {order.personal.email}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiPhone className="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Phone Number
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              {order.personal.phone}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiMapPin className="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              Delivery Address
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              {order.personal.address}
            </p>
          </div>
        </div>

        {order.deliveredDate && (
          <div className="flex items-start gap-3">
            <FiCalendar className="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Delivered On
              </p>
              <p className="font-medium text-gray-800 dark:text-white">
                {new Date(order.deliveredDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default DeliveryInfo
