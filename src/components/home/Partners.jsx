import { FaArrowRight } from "react-icons/fa"

const Partners = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Join <span className="text-orange-500">Our Network</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-9xl mx-auto">
        {/* Restaurant Partner Card */}
        <div className="group relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Professional chef cooking"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="transform transition-all duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Partner With Us
              </h3>
              <p className="text-white/90 mb-4 text-sm sm:text-base max-w-md">
                Grow your restaurant business with our platform
              </p>
              <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                Get started{" "}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Rider Partner Card */}
        <div className="group relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
          <img
            src="https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Delivery rider with motorcycle"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="transform transition-all duration-500 group-hover:-translate-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ride With Us
              </h3>
              <p className="text-white/90 mb-4 text-sm sm:text-base max-w-md">
                Earn flexibly as a delivery partner
              </p>
              <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                Start earning{" "}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
