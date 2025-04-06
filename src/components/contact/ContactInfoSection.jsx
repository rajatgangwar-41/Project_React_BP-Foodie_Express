import { motion } from "motion/react"
import { contactInfo } from "../../constants"

const ContactInfoSection = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
    >
      {contactInfo.map((card, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-3 sm:p-4 md:p-6 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-lg dark:hover:shadow-gray-900 transition-all text-center border border-gray-100 dark:border-gray-700"
        >
          <div className="bg-orange-100 dark:bg-orange-900/20 p-2 sm:p-3 rounded-full inline-flex">
            {<card.icon className={card.className} />}
          </div>
          <h3 className="font-bold text-gray-800 dark:text-gray-100 mt-2 sm:mt-3 text-sm sm:text-base">
            {card.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            {card.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ContactInfoSection
