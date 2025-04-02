import {
  FaUtensils,
  FaSadTear,
  FaHome,
  FaSearch,
  FaPhoneAlt,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex flex-col items-center justify-center py-40 px-4 sm:py-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header - Updated to orange background */}
        <div className="bg-orange-500 p-6 text-white text-center">
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
              <FaSadTear className="text-8xl text-orange-400" />
              <span className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
                404
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved. Here
            are some helpful links instead:
          </p>

          {/* Navigation Options - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <Link
              to="/"
              className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg p-4 flex flex-col items-center transition-colors"
            >
              <FaHome className="text-orange-500 text-2xl mb-2" />
              <span className="font-medium text-gray-800">Home</span>
              <span className="text-sm text-gray-500">Back to safety</span>
            </Link>

            <Link
              to="/menu"
              className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg p-4 flex flex-col items-center transition-colors"
            >
              <FaSearch className="text-orange-500 text-2xl mb-2" />
              <span className="font-medium text-gray-800">Browse Menu</span>
              <span className="text-sm text-gray-500">Find delicious food</span>
            </Link>

            <Link
              to="/contact"
              className="bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-lg p-4 flex flex-col items-center transition-colors"
            >
              <FaPhoneAlt className="text-orange-500 text-2xl mb-2" />
              <span className="font-medium text-gray-800">Contact Us</span>
              <span className="text-sm text-gray-500">We're here to help</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Foodie Express. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
