import { HeroSection, LoginForm } from "../components/login"

const LoginPage = () => {
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
