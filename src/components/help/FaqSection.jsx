import { motion } from "motion/react"
import { FaQuestionCircle } from "react-icons/fa"
import { faqs } from "../../constants"

const FaqSection = ({ containerVariants, itemVariants, fadeInUp }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-8"
      id="faq"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
      >
        Frequently{" "}
        <span className="text-orange-500 dark:text-orange-400">
          Asked Questions
        </span>
      </motion.h2>
      <motion.div
        variants={fadeInUp}
        className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-md dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700"
      >
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
            <FaQuestionCircle className="mr-3" />
            Common Questions
          </h3>
        </div>
        <motion.div
          variants={containerVariants}
          className="divide-y divide-gray-100 dark:divide-gray-700"
        >
          {faqs.map((item, index) => (
            <motion.details
              key={index}
              variants={itemVariants}
              className="group p-4 sm:p-6 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  {item.question}
                </h3>
                <span className="text-orange-500 dark:text-orange-400 text-sm group-open:rotate-180 transition-transform duration-200">
                  ▼
                </span>
              </summary>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default FaqSection
