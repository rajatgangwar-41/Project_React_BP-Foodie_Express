import { motion } from "motion/react"

const AboutSection = ({ containerVariants, itemVariants }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-16 md:mb-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants}>
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Our Restaurant"
            className="w-full h-auto rounded-2xl shadow-xl dark:shadow-gray-800/50"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About{" "}
            <span className="text-orange-500 dark:text-orange-400">
              Foodie Express
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
            Founded in 2015 by chef Marco Rodriguez, Foodie Express began as a
            small family-owned restaurant in downtown San Francisco. What
            started as a passion project quickly grew into one of the most
            beloved food delivery services on the West Coast.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Today, we partner with over 200 local restaurants and employ more
            than 150 dedicated team members committed to bringing exceptional
            dining experiences right to your doorstep.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-lg border border-orange-100 dark:border-gray-700">
              <h3 className="font-bold text-orange-600 dark:text-orange-400">
                15K+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Daily Orders</p>
            </div>
            <div className="bg-orange-50 dark:bg-gray-800 p-4 rounded-lg border border-orange-100 dark:border-gray-700">
              <h3 className="font-bold text-orange-600 dark:text-orange-400">
                200+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Restaurant Partners
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection
