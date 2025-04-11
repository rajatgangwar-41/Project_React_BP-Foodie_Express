import { motion } from "motion/react"

const CartLoading = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="h-full flex flex-col"
  >
    {/* Loading Header */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
      </div>
      <div className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
    </motion.div>

    {/* Loading Items */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: i * 0.1 },
          }}
          className="flex gap-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50"
        >
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="flex justify-between">
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
              <div className="h-5 w-5 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
            </div>
            <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
            <div className="flex items-center mt-3">
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
              <div className="h-5 w-8 mx-3 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-600 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Loading Footer */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4"
    >
      <div className="flex justify-between">
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
      </div>
      <div className="flex justify-between">
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
      </div>
      <div className="flex justify-between">
        <div className="h-5 w-20 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
        <div className="h-5 w-16 bg-gray-200 dark:bg-gray-600 rounded-md animate-pulse" />
      </div>
      <div className="h-12 w-full bg-gray-200 dark:bg-gray-600 rounded-lg animate-pulse" />
    </motion.div>
  </motion.div>
)

export default CartLoading
