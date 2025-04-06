import { motion } from "motion/react"
import { team } from "../../constants"

const TeamSection = ({ containerVariants, itemVariants, fadeInUp }) => {
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
        Meet{" "}
        <span className="text-orange-500 dark:text-orange-400">
          Our Leadership
        </span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((person, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center"
          >
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-100 dark:border-orange-900/50 shadow-md dark:shadow-gray-800">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {person.name}
            </h3>
            <p className="text-orange-500 dark:text-orange-400 font-medium mb-2">
              {person.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {person.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default TeamSection
