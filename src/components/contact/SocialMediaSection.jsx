import { motion } from "motion/react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

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
        {[
          {
            icon: <FaFacebook className="text-2xl sm:text-3xl" />,
            label: "Facebook",
            color: "text-blue-600 dark:text-blue-400",
          },
          {
            icon: <FaTwitter className="text-2xl sm:text-3xl" />,
            label: "Twitter",
            color: "text-sky-500 dark:text-sky-400",
          },
          {
            icon: <FaInstagram className="text-2xl sm:text-3xl" />,
            label: "Instagram",
            color: "text-pink-600 dark:text-pink-400",
          },
          {
            icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
            label: "LinkedIn",
            color: "text-blue-700 dark:text-blue-500",
          },
          {
            icon: <FaYoutube className="text-2xl sm:text-3xl" />,
            label: "YouTube",
            color: "text-red-600 dark:text-red-500",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            whileHover={{ y: -5, scale: 1.1 }}
            href="#"
            className={`${social.color} hover:opacity-80 transition-all`}
            aria-label={social.label}
          >
            {social.icon}
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
