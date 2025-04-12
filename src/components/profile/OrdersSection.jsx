import { motion } from "motion/react"
import { useState } from "react"
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi"

const OrdersSection = () => {
  const [activeOrderTab, setActiveOrderTab] = useState("inProcess")

  const [orders, _setOrders] = useState({
    inProcess: [
      {
        id: "ORD-89123",
        date: "2023-06-02T14:30:00",
        items: 2,
        total: 24.98,
        status: "On the way",
        itemsPreview: [
          {
            name: "Margherita Pizza",
            image:
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
          {
            name: "Garlic Bread",
            image:
              "https://images.unsplash.com/photo-1608190003443-86a8cd7f754c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
        ],
      },
    ],
    completed: [
      {
        id: "ORD-78945",
        date: "2023-05-15T18:45:00",
        deliveredDate: "2023-05-15T19:30:00",
        items: 3,
        total: 38.97,
        status: "Delivered",
        rated: false,
        itemsPreview: [
          {
            name: "Pepperoni Pizza",
            image:
              "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
          {
            name: "Caesar Salad",
            image:
              "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
          {
            name: "Chocolate Brownie",
            image:
              "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
        ],
      },
    ],
  })
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
          orders.inProcess.length > 0 ? (
            orders.inProcess.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold text-gray-800 dark:text-white">
                        Order #{order.id}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                        {order.status}
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
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span>{order.items} items</span>
                      <span>•</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2">
                    <button className="px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                      Track Order
                    </button>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Items
                  </h4>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {order.itemsPreview.map((item, index) => (
                      <div
                        key={index}
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
        ) : orders.completed.length > 0 ? (
          orders.completed.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                      Order #{order.id}
                    </span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                      {order.status}
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
                    {order.deliveredDate && (
                      <>
                        <br />
                        Delivered on{" "}
                        {new Date(order.deliveredDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </>
                    )}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span>{order.items} items</span>
                    <span>•</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <button className="px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                    Reorder
                  </button>
                  <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Items
                </h4>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {order.itemsPreview.map((item, index) => (
                    <div
                      key={index}
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
