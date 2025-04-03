import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  AboutSection,
  CTASection,
  HeroSection,
  MileStonesSection,
  TeamSection,
  ValuesSection,
} from "../components/about"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const AboutPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Our Story Section */}
        <AboutSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Mission & Values */}
        <ValuesSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          fadeInUp={fadeInUp}
        />

        {/* Team Section */}
        <TeamSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          fadeInUp={fadeInUp}
        />

        {/* Milestones */}
        <MileStonesSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          fadeInUp={fadeInUp}
        />

        {/* CTA Section */}
        <CTASection containerVariants={containerVariants} fadeInUp={fadeInUp} />
      </div>
    </div>
  )
}

export default AboutPage
