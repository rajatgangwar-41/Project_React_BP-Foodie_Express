import { motion } from "motion/react"
import { useState } from "react"
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks"
import { useGetOrdersQuery } from "../../features/orderApiSlice"

const ErrorMessage = ({ message, onRetry, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        <FiAlertCircle className="text-red-500 dark:text-red-400 text-2xl mb-2" />
        <h3 className="text-red-600 dark:text-red-400 font-medium mb-2">
          Something went wrong
        </h3>
        <p className="text-red-500 dark:text-red-400 text-sm mb-4">
          {message || "Failed to load data"}
        </p>
        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRetry}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
          >
            Try Again
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

const LoadingSpinner = ({ size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "h-6 w-6 border-2",
    medium: "h-8 w-8 border-3",
    large: "h-12 w-12 border-4",
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`rounded-full border-t-transparent border-orange-500 ${sizeClasses[size]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

const OrdersSection = () => {
  const [activeOrderTab, setActiveOrderTab] = useState("inProcess")
  const { id } = useAuth()

  // Fetch favorites with loading and error states
  const { data, isLoading, isError, error, refetch } = useGetOrdersQuery(id)
  const orders = data?.orders || []

  const inProcess = orders.filter(
    (order) => order.tracking.at(-1).completed === false
  )
  const completed = orders.filter(
    (order) => order.tracking.at(-1).completed === true
  )

  console.log(inProcess, completed)

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  // Error state
  if (isError) {
    return (
      <div className="p-6">
        <ErrorMessage
          message={error?.data?.message || "Failed to load favorites"}
          onRetry={refetch}
        />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Your Orders
      </h2>

      {/* Tab Slider */}
      <div className="relative mb-8">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveOrderTab("inProcess")}
            className={`px-4 py-2 font-medium text-sm focus:outline-none ${
              activeOrderTab === "inProcess"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            In Process
          </button>
          <button
            onClick={() => setActiveOrderTab("completed")}
            className={`px-4 py-2 font-medium text-sm focus:outline-none ${
              activeOrderTab === "completed"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Order Content */}
      <div className="space-y-6">
        {activeOrderTab === "inProcess" ? (
          inProcess.length > 0 ? (
            inProcess.map((order) => (
              <motion.div
                key={order.orderId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-800 dark:text-white">
                        Order #{order?.orderId}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                        {
                          order?.tracking
                            .filter((step) => step.completed)
                            .at(-1)?.status
                        }
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Ordered on{" "}
                      {new Date(order?.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span>{order?.food?.items.length} items</span>
                      <span>•</span>
                      <span>₹{order?.food?.total?.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2">
                    <Link
                      to={`/order-details/${order?.orderId}`}
                      state={order}
                      className="px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                    >
                      Track Order
                    </Link>
                    <Link
                      to={`/order-details/${order?.orderId}`}
                      state={order}
                      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Items
                  </h4>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {order?.food?.items?.map((item) => (
                      <div
                        key={item.id}
                        className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white dark:bg-gray-600"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <FiShoppingBag className="text-gray-400 dark:text-gray-500 text-3xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                No orders in process
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Your current orders will appear here
              </p>
            </div>
          )
        ) : completed.length > 0 ? (
          completed.map((order) => (
            <motion.div
              key={order.OrderId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                      Order #{order.orderId}
                    </span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                      {
                        order?.tracking.filter((step) => step.completed).at(-1)
                          ?.status
                      }
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Ordered on{" "}
                    {new Date(order.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                    {order.toLocaleDateString && (
                      <>
                        <br />
                        Delivered on{" "}
                        {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </>
                    )}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span>{order.food.items.length} items</span>
                    <span>•</span>
                    <span>₹{order.food.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <button className="px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                    Reorder
                  </button>
                  <Link
                    to={`/order-details/${order?.orderId}`}
                    state={order}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Items
                </h4>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {order.food.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white dark:bg-gray-600"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Option for Completed Orders */}
              {!order.rated && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                    Rate this order
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <FiCheckCircle className="text-gray-400 dark:text-gray-500 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
              No completed orders
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Your order history will appear here
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default OrdersSection
