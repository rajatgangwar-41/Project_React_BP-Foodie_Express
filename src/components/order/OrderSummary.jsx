import { motion } from "motion/react"

const OrderSummary = ({ order }) => {
  return (
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
            {order.tracking.filter((item) => item.completed).at(-1).status}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400">
            {order.rider.vehicle}
          </span>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {order.food.items.map((item) => (
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
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-800 dark:text-white">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Special Instructions Section */}
      {order.food.specialInstructions && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <h4 className="font-medium text-gray-800 dark:text-white mb-2">
            Special Instructions
          </h4>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {order.food.specialInstructions}
          </div>
        </div>
      )}

      {/* Order Totals */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between py-2">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="font-medium">₹{order.food.subTotal.toFixed(2)}</span>
        </div>

        {order.food.discount > 0 && (
          <div className="flex justify-between py-2">
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <span>Discount</span>
              <span className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 px-2 py-0.5 rounded-full">
                {order.food.couponCode}
              </span>
            </div>
            <span className="font-medium text-green-600 dark:text-green-400">
              -₹{order.food.discount.toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex justify-between py-2">
          <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
          <span className="font-medium">
            ₹{order.food.deliveryFee.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="font-medium">₹{order.food.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-3 border-t border-gray-200 dark:border-gray-700 mt-2">
          <span className="font-bold text-gray-800 dark:text-white">Total</span>
          <span className="font-bold text-orange-500">
            ₹{order.food.total.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default OrderSummary
