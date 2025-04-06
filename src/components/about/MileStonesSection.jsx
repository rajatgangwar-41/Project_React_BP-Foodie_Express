import { motion } from "motion/react"
import { milestones } from "../../constants"

const MileStonesSection = ({ containerVariants, itemVariants, fadeInUp }) => {
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
        <span className="text-orange-500 dark:text-orange-400">Journey</span>
      </motion.h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-orange-100 dark:bg-orange-900/50 transform -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-0">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative lg:flex ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center lg:w-full`}
            >
              <div className="lg:w-1/2 lg:px-8 mb-4 lg:mb-0">
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:px-8 flex justify-center lg:justify-center">
                <div className="bg-orange-500 dark:bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg dark:shadow-orange-900/50">
                  {milestone.year}
                </div>
              </div>
              <div className="lg:w-1/2 lg:px-8 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MileStonesSection
