import { motion } from "motion/react"
import { reachOut } from "../../constants"

const ReachOutSection = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-7xl mx-auto mb-12 md:mb-16"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-bold text-center text-orange-600 dark:text-orange-500 mb-8 md:mb-12"
      >
        Why Reach Out to Foodie Express?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
        {reachOut.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900 transition-all duration-300 text-center h-full flex flex-col border border-gray-100 dark:border-gray-700"
          >
            <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              {<card.icon className={card.className} />}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-gray-100">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base flex-grow">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ReachOutSection
