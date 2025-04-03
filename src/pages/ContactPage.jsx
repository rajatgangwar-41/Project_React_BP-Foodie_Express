import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  HeroSection,
  ReachOutSection,
  ContactFormSection,
  ContactInfoSection,
  SocialMediaSection,
  NeedHelpSection,
} from "../components/contact"

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
    },
  },
}

const ContactPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Motion */}
      <HeroSection />

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Why Contact Section with Motion */}
        <ReachOutSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Contact + Animation Grid */}
        <ContactFormSection />

        {/* Contact Info Cards */}
        <ContactInfoSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Social Media Section */}
        <SocialMediaSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Need Help Section */}
        <NeedHelpSection
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />
      </div>
    </div>
  )
}

export default ContactPage
