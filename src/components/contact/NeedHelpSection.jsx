import { motion } from "motion/react"

const NeedHelpSection = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 text-center border border-gray-100 dark:border-gray-700"
    >
      <motion.h3
        variants={itemVariants}
        className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-orange-50 mb-2 sm:mb-4"
      >
        Need Help?
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="text-gray-600 dark:text-orange-100 mb-3 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base"
      >
        Check out our FAQ section for quick answers to common questions about
        orders, delivery, and more.
      </motion.p>
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-600 dark:bg-orange-700 hover:bg-orange-700 dark:hover:bg-orange-600 text-white font-bold py-2 px-4 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base shadow-md dark:shadow-orange-900/30"
      >
        Visit Help Center
      </motion.button>
    </motion.div>
  )
}

export default NeedHelpSection
