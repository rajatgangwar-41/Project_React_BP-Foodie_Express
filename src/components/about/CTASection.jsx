import { motion } from "motion/react"

const CTASection = ({ containerVariants, fadeInUp }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 rounded-2xl p-8 md:p-12 text-center"
    >
      <motion.div variants={fadeInUp}>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Hungry for Great Food?
        </h2>
        <p className="text-white/90 dark:text-white/80 mb-6 max-w-2xl mx-auto">
          Join over 500,000 satisfied customers who enjoy delicious meals
          delivered fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 dark:text-orange-700 hover:bg-gray-100 dark:hover:bg-gray-50 font-bold py-3 px-6 rounded-lg shadow-md dark:shadow-gray-900/30 transition-colors">
            Order Now
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 dark:hover:bg-white/30 font-bold py-3 px-6 rounded-lg transition-colors">
            Become a Partner
          </button>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default CTASection
