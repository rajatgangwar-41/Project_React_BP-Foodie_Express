import {
  FaShoppingBag,
  FaCheckCircle,
  FaUtensils,
  FaHamburger,
} from "react-icons/fa"
import { motion } from "framer-motion"

const Stats = ({ containerVariants, itemVariants }) => {
  const stats = [
    {
      icon: FaShoppingBag,
      value: "10,000+",
      label: "Registered Orders",
      color: "teal",
      delay: 0.1,
    },
    {
      icon: FaCheckCircle,
      value: "8,500+",
      label: "Orders Delivered",
      color: "blue",
      delay: 0.2,
    },
    {
      icon: FaUtensils,
      value: "500+",
      label: "Restaurant Partners",
      color: "amber",
      delay: 0.3,
    },
    {
      icon: FaHamburger,
      value: "5,000+",
      label: "Food Items",
      color: "purple",
      delay: 0.4,
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-900"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100"
        >
          Our Growing{" "}
          <span className="text-orange-500 dark:text-orange-400">Network</span>
        </motion.h2>
      </div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className={`bg-gradient-to-br from-white/80 to-gray-50 dark:from-gray-800/90 dark:to-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md dark:hover:shadow-gray-800/50 border border-gray-100 dark:border-gray-700 transition-all duration-300`}
          >
            <div
              className={`text-${stat.color}-500 dark:text-${stat.color}-400 mb-4 flex justify-center`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-4 rounded-2xl bg-${stat.color}-50 dark:bg-${stat.color}-900/30 hover:bg-${stat.color}-100 dark:hover:bg-${stat.color}-900/40 transition-all`}
              >
                <stat.icon className="text-3xl" />
              </motion.div>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2 text-gray-800 dark:text-white">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Stats
