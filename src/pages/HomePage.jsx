import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import {
  HeroSection,
  ExclusiveDeals,
  PopularDishes,
  PopularRestaurants,
  AppDownload,
  Testimonials,
  Stats,
  Partners,
} from "../components/home"

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

const HomePage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <HeroSection
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            fadeInUp={fadeInUp}
          />
          <ExclusiveDeals
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
          <PopularDishes
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
          <PopularRestaurants
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
          <AppDownload
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
          <Partners
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
          <Testimonials
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
          <Stats
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            fadeInUp={fadeInUp}
          />
        </div>
      </main>
    </div>
  )
}

export default HomePage
