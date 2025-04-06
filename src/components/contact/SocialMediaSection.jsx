import { motion } from "motion/react"
import { socialMedia } from "../../constants"

const SocialMediaSection = ({ containerVariants, itemVariants }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 md:p-8 text-center mb-8 sm:mb-12 border border-gray-100 dark:border-gray-700"
    >
      <motion.h3
        variants={itemVariants}
        className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-6"
      >
        Connect With Us
      </motion.h3>
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-4 sm:gap-6"
      >
        {socialMedia.map((social, index) => (
          <motion.a
            key={index}
            whileHover={{ y: -5, scale: 1.1 }}
            href="#"
            className={`${social.color} hover:opacity-80 transition-all`}
            aria-label={social.label}
          >
            {<social.icon className={social.className} />}
          </motion.a>
        ))}
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="mt-4 sm:mt-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base"
      >
        Follow us for daily food inspiration, special offers, and more!
      </motion.p>
    </motion.div>
  )
}

export default SocialMediaSection
