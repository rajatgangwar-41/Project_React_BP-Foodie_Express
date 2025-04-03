import { motion } from "motion/react"
import { FaAward, FaHeart, FaLeaf, FaUsers } from "react-icons/fa"
import { GiChefToque } from "react-icons/gi"
import { MdDeliveryDining } from "react-icons/md"

const ValuesSection = ({ containerVariants, itemVariants, fadeInUp }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-16 md:mb-24"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
      >
        Our{" "}
        <span className="text-orange-500 dark:text-orange-400">
          Core Values
        </span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: (
              <FaLeaf className="text-3xl text-orange-500 dark:text-orange-400" />
            ),
            title: "Fresh Ingredients",
            description:
              "We source only the freshest, locally-grown ingredients for all our partner restaurants.",
          },
          {
            icon: (
              <FaHeart className="text-3xl text-orange-500 dark:text-orange-400" />
            ),
            title: "Passion for Food",
            description:
              "Every dish is prepared with love and attention to detail by our culinary partners.",
          },
          {
            icon: (
              <MdDeliveryDining className="text-3xl text-orange-500 dark:text-orange-400" />
            ),
            title: "Fast Delivery",
            description:
              "Your food arrives hot and fresh with our optimized delivery network.",
          },
          {
            icon: (
              <FaUsers className="text-3xl text-orange-500 dark:text-orange-400" />
            ),
            title: "Community Focus",
            description:
              "We support local businesses and food producers in every community we serve.",
          },
          {
            icon: (
              <FaAward className="text-3xl text-orange-500 dark:text-orange-400" />
            ),
            title: "Quality Guarantee",
            description:
              "Not satisfied? We'll make it right with our 100% satisfaction guarantee.",
          },
          {
            icon: (
              <GiChefToque className="text-3xl text-orange-500 dark:text-orange-400" />
            ),
            title: "Chef Partnerships",
            description:
              "We collaborate with top chefs to bring you innovative culinary experiences.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900 transition-all"
          >
            <div className="bg-orange-50 dark:bg-gray-700 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ValuesSection
