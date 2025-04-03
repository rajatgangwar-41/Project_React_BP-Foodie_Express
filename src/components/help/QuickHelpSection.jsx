import { motion } from "motion/react"
import {
  FaCookieBite,
  FaFileAlt,
  FaQuestionCircle,
  FaShieldAlt,
} from "react-icons/fa"

const QuickHelpSection = ({ containerVariants, itemVariants, fadeInUp }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-12 md:mb-16"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
      >
        Quick{" "}
        <span className="text-orange-500 dark:text-orange-400">
          Help Topics
        </span>
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
      >
        {[
          {
            icon: <FaQuestionCircle className="text-xl sm:text-2xl" />,
            title: "Getting Started",
            link: "##",
          },
          {
            icon: <FaFileAlt className="text-xl sm:text-2xl" />,
            title: "Orders",
            link: "#",
          },
          {
            icon: <FaShieldAlt className="text-xl sm:text-2xl" />,
            title: "Account",
            link: "#",
          },
          {
            icon: <FaCookieBite className="text-xl sm:text-2xl" />,
            title: "Payments",
            link: "#",
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            href={item.link}
            className="bg-orange-50 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 border border-orange-100 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/50 dark:hover:shadow-gray-900"
          >
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 text-orange-600 dark:text-orange-400">
              {item.icon}
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-orange-500 dark:text-orange-400 mt-2 text-sm font-medium">
              View details →
            </p>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default QuickHelpSection
