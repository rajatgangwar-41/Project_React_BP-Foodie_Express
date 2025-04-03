import { motion } from "motion/react"
import {
  FaCookieBite,
  FaFileAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaSitemap,
  FaUserLock,
} from "react-icons/fa"

const PoliciesSection = ({ containerVariants, itemVariants, fadeInUp }) => {
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
        className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 md:mb-8 text-center"
      >
        Our{" "}
        <span className="text-orange-500 dark:text-orange-400">
          Policies & Information
        </span>
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          {
            icon: <FaShieldAlt className="text-lg sm:text-xl" />,
            title: "Privacy Policy",
            description:
              "Learn how we collect, use, and protect your personal information.",
            link: "#",
          },
          {
            icon: <FaFileAlt className="text-lg sm:text-xl" />,
            title: "Terms of Service",
            description:
              "Understand the terms governing your use of our services and website.",
            link: "#",
          },
          {
            icon: <FaCookieBite className="text-lg sm:text-xl" />,
            title: "Cookie Policy",
            description:
              "Discover how we use cookies to enhance your browsing experience.",
            link: "#",
          },
          {
            icon: <FaUserLock className="text-lg sm:text-xl" />,
            title: "GDPR Compliance",
            description:
              "Information about our compliance with EU data protection regulations.",
            link: "#",
          },
          {
            icon: <FaSitemap className="text-lg sm:text-xl" />,
            title: "Sitemap",
            description:
              "Navigate our website structure and find what you're looking for.",
            link: "#",
          },
          {
            icon: <FaQuestionCircle className="text-lg sm:text-xl" />,
            title: "Contact Support",
            description:
              "Can't find what you need? Our support team is here to help.",
            link: "#contact",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-md dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900 transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-700 p-4 sm:p-6 flex items-center border-b border-gray-100 dark:border-gray-700">
              <div className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm dark:shadow-gray-900/50">
                <div className="text-orange-500 dark:text-orange-400">
                  {item.icon}
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                {item.description}
              </p>
              <a
                href={item.link}
                className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 font-medium flex items-center group text-sm sm:text-base"
              >
                Read More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default PoliciesSection
