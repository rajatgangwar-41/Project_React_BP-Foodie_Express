import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  HeroSection,
  QuickHelpSection,
  PoliciesSection,
  FaqSection,
} from "../components/help"

// Animation variants (unchanged as they're mode-agnostic)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const HelpPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Quick Help Section */}
        <QuickHelpSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          fadeInUp={fadeInUp}
        />

        {/* Policy Cards Grid */}
        <PoliciesSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          fadeInUp={fadeInUp}
        />

        {/* FAQ Section */}
        <FaqSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          fadeInUp={fadeInUp}
        />
      </div>
    </div>
  )
}

export default HelpPage
