import { useLocation } from "react-router-dom"
import { HeroSection, SignupForm } from "../components/signup"
import { useEffect } from "react"

const SignupPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <HeroSection />

      {/* Signup Form */}
      <SignupForm />
    </div>
  )
}

export default SignupPage
