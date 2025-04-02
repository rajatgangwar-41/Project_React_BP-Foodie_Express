import {
  FaShoppingBag,
  FaCheckCircle,
  FaUtensils,
  FaHamburger,
} from "react-icons/fa"

const Stats = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Our Growing{" "}
          <span className="text-orange-400 dark:text-teal-400">Network</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Registered Orders */}
        <div className="bg-gradient-to-br from-white/80 to-gray-50 dark:from-gray-800/90 dark:to-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 group hover:-translate-y-1">
          <div className="text-teal-500 dark:text-teal-400 mb-4 flex justify-center">
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-900/30 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40 transition-all">
              <FaShoppingBag className="text-3xl" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2 text-gray-800 dark:text-white">
              10,000+
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Registered Orders
            </p>
          </div>
        </div>

        {/* Orders Delivered */}
        <div className="bg-gradient-to-br from-white/80 to-gray-50 dark:from-gray-800/90 dark:to-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 group hover:-translate-y-1">
          <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center">
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-all">
              <FaCheckCircle className="text-3xl" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2 text-gray-800 dark:text-white">
              8,500+
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Orders Delivered
            </p>
          </div>
        </div>

        {/* Restaurant Partners */}
        <div className="bg-gradient-to-br from-white/80 to-gray-50 dark:from-gray-800/90 dark:to-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 group hover:-translate-y-1">
          <div className="text-amber-500 dark:text-amber-400 mb-4 flex justify-center">
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/30 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40 transition-all">
              <FaUtensils className="text-3xl" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2 text-gray-800 dark:text-white">
              500+
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Restaurant Partners
            </p>
          </div>
        </div>

        {/* Food Items */}
        <div className="bg-gradient-to-br from-white/80 to-gray-50 dark:from-gray-800/90 dark:to-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 group hover:-translate-y-1">
          <div className="text-purple-500 dark:text-purple-400 mb-4 flex justify-center">
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/30 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-all">
              <FaHamburger className="text-3xl" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold mb-2 text-gray-800 dark:text-white">
              5,000+
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              Food Items
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
