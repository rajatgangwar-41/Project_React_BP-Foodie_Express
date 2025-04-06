import React from "react"
import { motion } from "motion/react"
import { menuHeroSection } from "../../assets/menu"

const HeroSection = () => {
  return (
    <motion.section
      className="relative h-96 w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black/30 z-10" />
      <img
        src={menuHeroSection}
        alt="Menu Hero Section"
        className="w-full h-full object-cover opacity-70 overflow-hidden"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
            Discover Our Menu
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white max-w-2xl"
          whileHover={{ scale: 1.01 }}
        >
          Explore delicious dishes from our talented chefs
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
