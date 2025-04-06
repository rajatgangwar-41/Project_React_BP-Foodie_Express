import {
  FiClock,
  FiShoppingBag,
  FiMapPin,
  FiCreditCard,
  FiTruck,
  FiUser,
  FiPhone,
  FiStar,
} from "react-icons/fi"
import { motion } from "framer-motion"

const OrderDetailsPage = () => {
  // Updated order data with discount and rider info
  const order = {
    id: "ORD-78945",
    date: "2023-05-15T18:45:00",
    deliveredDate: "2023-05-15T19:30:00",
    status: "Delivered",
    total: 35.97,
    subtotal: 35.0,
    deliveryFee: 3.5,
    tax: 0.47,
    discount: {
      amount: 3.0,
      code: "SAVE3",
    },
    paymentMethod: "Credit Card (•••• •••• •••• 4242)",
    deliveryAddress: "123 Main St, Apt 4B, New York, NY 10001",
    restaurant: "Pizza Palace",
    rider: {
      name: "Alex Johnson",
      phone: "+1 (555) 123-4567",
      rating: 4.8,
      vehicle: "Motorcycle",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        price: 12.99,
        quantity: 1,
        specialInstructions: "Extra cheese",
      },
      {
        id: 2,
        name: "Garlic Bread",
        image:
          "https://images.unsplash.com/photo-1608190003443-86a8cd7f754c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        price: 4.99,
        quantity: 2,
      },
      {
        id: 3,
        name: "Caesar Salad",
        image:
          "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        price: 8.99,
        quantity: 1,
        specialInstructions: "No croutons",
      },
    ],
    tracking: [
      {
        status: "Order placed",
        time: "2023-05-15T18:45:00",
        completed: true,
      },
      {
        status: "Preparing your food",
        time: "2023-05-15T18:50:00",
        completed: true,
      },
      {
        status: "Driver assigned",
        time: "2023-05-15T19:05:00",
        completed: true,
      },
      {
        status: "On the way",
        time: "2023-05-15T19:15:00",
        completed: true,
      },
      {
        status: "Delivered",
        time: "2023-05-15T19:30:00",
        completed: true,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative h-96 w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          className="w-full h-full object-cover opacity-70 overflow-hidden"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Help Center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Order Details
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl"
            whileHover={{ scale: 1.01 }}
          >
            Order #{order.id}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Order Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Order Summary
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {new Date(order.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                    : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                }`}
              >
                {order.status}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400">
                {order.rider.vehicle}
              </span>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Qty: {item.quantity}
                  </p>
                  {item.specialInstructions && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span className="font-medium">Note:</span>{" "}
                      {item.specialInstructions}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800 dark:text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Totals */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="font-medium">${order.subtotal.toFixed(2)}</span>
            </div>

            {order.discount && (
              <div className="flex justify-between py-2">
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <span>Discount</span>
                  <span className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 px-2 py-0.5 rounded-full">
                    {order.discount.code}
                  </span>
                </div>
                <span className="font-medium text-green-600 dark:text-green-400">
                  -${order.discount.amount.toFixed(2)}
                </span>
              </div>
            )}

            <div className="flex justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">
                Delivery Fee
              </span>
              <span className="font-medium">
                ${order.deliveryFee.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span className="font-medium">${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3 border-t border-gray-200 dark:border-gray-700 mt-2">
              <span className="font-bold text-gray-800 dark:text-white">
                Total
              </span>
              <span className="font-bold text-orange-500">
                ${order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Delivery, Payment, and Rider Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                <FiTruck className="text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Delivery Information
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Restaurant
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {order.restaurant}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Delivery Address
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {order.deliveryAddress}
                </p>
              </div>
              {order.deliveredDate && (
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
              )}
            </div>
          </motion.div>

          {/* Rider Info */}
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
                  src={order.rider.image}
                  alt={order.rider.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  {order.rider.name}
                </h4>
                <div className="flex items-center gap-1">
                  <FiStar className="text-yellow-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {order.rider.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FiPhone className="text-gray-500 dark:text-gray-400" />
                <a
                  href={`tel:${order.rider.phone.replace(/\D/g, "")}`}
                  className="font-medium text-gray-800 dark:text-white hover:text-orange-500 transition-colors"
                >
                  {order.rider.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiTruck className="text-gray-500 dark:text-gray-400" />
                <span className="font-medium text-gray-800 dark:text-white">
                  {order.rider.vehicle}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Payment Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <FiCreditCard className="text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Payment Information
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Payment Method
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {order.paymentMethod}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Payment Status
                </p>
                <p className="font-medium text-green-600 dark:text-green-400">
                  Paid
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Total Paid
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Order Tracking */}
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

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <button className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
            Reorder
          </button>
          <button className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Contact Support
          </button>
          <button className="flex-1 px-6 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
            <FiStar className="text-yellow-400" />
            Rate Order
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderDetailsPage
