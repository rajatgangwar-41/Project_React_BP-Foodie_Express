import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaUtensils, FaSadTear, FaHome, FaArrowLeft } from "react-icons/fa"

const NotFoundPage = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl ring-1 ring-gray-200/50 dark:ring-gray-700/50">
        {/* Header with subtle shadow */}
        <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 shadow-sm">
          <div className="flex items-center justify-center gap-3">
            <FaUtensils className="text-3xl text-orange-500 dark:text-orange-400" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Foodie Express
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative p-4 rounded-full bg-orange-50 dark:bg-gray-700 shadow-inner ring-1 ring-orange-100/50 dark:ring-gray-600/50">
              <FaSadTear className="text-7xl text-orange-400 dark:text-orange-300" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            404 - Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons with shadow effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={-1}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-medium rounded-lg transition-all shadow-md hover:shadow-lg ring-1 ring-gray-200 dark:ring-gray-600"
            >
              <FaArrowLeft /> Go Back
            </Link>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-orange-200/50 dark:shadow-orange-800/30"
            >
              <FaHome /> Go Home
            </Link>
          </div>
        </div>

        {/* Footer with subtle shadow */}
        <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 shadow-inner">
          © {new Date().getFullYear()} Foodie Express
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
