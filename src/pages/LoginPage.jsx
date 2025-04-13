import { useLocation } from "react-router-dom"
import { HeroSection, LoginForm } from "../components/login"
import { useEffect } from "react"

const LoginPage = () => {
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

      {/* Login Form */}
      <LoginForm />
    </div>
  )
}

export default LoginPage
