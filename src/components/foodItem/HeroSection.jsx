import { motion } from "motion/react"

const HeroSection = ({ cuisine }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-64 md:h-80 w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Food Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-2"
          whileHover={{ scale: 1.02 }}
        >
          {cuisine} Delicacy
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-md"
          whileHover={{ scale: 1.01 }}
        >
          Discover the authentic flavors
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
