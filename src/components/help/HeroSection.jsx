import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[50vh] min-h-[400px] bg-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Help Center"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
            Help Center
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Find answers to your questions and learn about our policies
        </p>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
