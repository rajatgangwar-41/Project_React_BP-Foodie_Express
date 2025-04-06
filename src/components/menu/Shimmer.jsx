import React from "react"

const ShimmerMenuCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
    <div className="relative h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4 animate-pulse"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/5 animate-pulse"></div>
      </div>
    </div>
    <div className="px-4 pb-4">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
    </div>
  </div>
)

const Shimmer = ({ count = 8 }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <ShimmerMenuCard key={index} />
        ))}
      </div>
    </div>
  </div>
)

export default Shimmer
