import { HeroSection, SignupForm } from "../components/signup"

const SignupPage = () => {
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
