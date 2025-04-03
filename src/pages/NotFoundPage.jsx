import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  FaUtensils,
  FaSadTear,
  FaHome,
  FaSearch,
  FaPhoneAlt,
} from "react-icons/fa"

const NotFoundPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center py-40 px-4 sm:py-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <div className="bg-orange-500 dark:bg-orange-600 p-6 text-white text-center">
          <div className="flex items-center justify-center gap-3">
            <FaUtensils className="text-3xl" />
            <h1 className="text-3xl font-bold tracking-tight">
              Foodie Express
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-8 px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <FaSadTear className="text-8xl text-orange-400 dark:text-orange-300" />
              <span className="absolute -bottom-2 -right-2 bg-orange-500 dark:bg-orange-600 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
                404
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The page you're looking for doesn't exist or has been moved. Here
            are some helpful links instead:
          </p>

          {/* Navigation Options - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link
              to="/"
              className="bg-orange-50 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 border border-orange-200 dark:border-gray-600 rounded-lg p-4 flex flex-col items-center transition-colors"
            >
              <FaHome className="text-orange-500 dark:text-orange-400 text-2xl mb-2" />
              <span className="font-medium text-gray-800 dark:text-gray-100">
                Home
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Back to safety
              </span>
            </Link>

            <Link
              to="/menu"
              className="bg-orange-50 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 border border-orange-200 dark:border-gray-600 rounded-lg p-4 flex flex-col items-center transition-colors"
            >
              <FaSearch className="text-orange-500 dark:text-orange-400 text-2xl mb-2" />
              <span className="font-medium text-gray-800 dark:text-gray-100">
                Browse Menu
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Find delicious food
              </span>
            </Link>

            <Link
              to="/contact"
              className="bg-orange-50 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 border border-orange-200 dark:border-gray-600 rounded-lg p-4 flex flex-col items-center transition-colors"
            >
              <FaPhoneAlt className="text-orange-500 dark:text-orange-400 text-2xl mb-2" />
              <span className="font-medium text-gray-800 dark:text-gray-100">
                Contact Us
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                We're here to help
              </span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 text-center text-sm text-gray-500 dark:text-gray-300">
          © {new Date().getFullYear()} Foodie Express. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
