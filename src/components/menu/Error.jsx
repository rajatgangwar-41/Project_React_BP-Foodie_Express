import React from "react"
import { FiAlertCircle, FiRefreshCw, FiZap } from "react-icons/fi"

const Error = ({ error, onRetry }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Expanded error content area */}
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
                <FiAlertCircle className="h-8 w-8 text-red-500" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Failed to Load Menu Items
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                {error?.error ||
                  "We encountered an issue while loading the menu. Please try again."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <button
                  onClick={onRetry}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                >
                  <FiZap className="h-5 w-5" />
                  Retry Now
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
                >
                  <FiRefreshCw className="h-5 w-5" />
                  Full Refresh
                </button>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Need help?
                </h4>
                <div className="flex justify-center gap-4">
                  <a
                    href="/contact"
                    className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/faq"
                    className="text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional empty space with subtle pattern */}
          <div className="mt-8 h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 dark:opacity-5 pattern-dots pattern-gray-400 dark:pattern-gray-600 pattern-size-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Error
