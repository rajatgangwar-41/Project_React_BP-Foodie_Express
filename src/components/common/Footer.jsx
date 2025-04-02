import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-orange-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-teal-500 filter blur-3xl"></div>
      </div>

      <div className="container max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-orange-500">Foodie</span>
              <span className="text-3xl font-bold text-white">Express</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering culinary excellence to your doorstep since 2015. Our
              mission is to connect food lovers with the best local restaurants.
            </p>

            {/* App Downloads */}
            <div className="mt-6">
              <h4 className="text-white/90 font-medium mb-4 text-lg">
                Download our app
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <img
                    alt="App Store"
                    className="h-12"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <img
                    alt="Google Play"
                    className="h-12"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <FiMapPin className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  123 Foodie Street, Culinary District
                  <br />
                  New York, NY 10001, USA
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <FiPhone className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <FiMail className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm">
                  support@foodieexpress.com
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <FiClock className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-gray-400 text-sm">24/7 Customer Support</p>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {["About Us", "Our Services", "Testimonials", "Careers"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm block group"
                    >
                      <span className="group-hover:pl-2 transition-all duration-300 flex items-center">
                        <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                        {item}
                      </span>
                    </a>
                  )
                )}
              </div>
              <div className="space-y-3">
                {["FAQs", "Blog", "Partners", "News"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm block group"
                  >
                    <span className="group-hover:pl-2 transition-all duration-300 flex items-center">
                      <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                      {item}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold tracking-wide">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates, offers, and
              culinary tips.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  placeholder="Your email address"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                  type="email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
              >
                Subscribe Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: <FiFacebook />,
                    color: "hover:bg-blue-600 hover:text-white",
                    name: "Facebook",
                  },
                  {
                    icon: <FiTwitter />,
                    color: "hover:bg-blue-400 hover:text-white",
                    name: "Twitter",
                  },
                  {
                    icon: <FiInstagram />,
                    color: "hover:bg-pink-600 hover:text-white",
                    name: "Instagram",
                  },
                  {
                    icon: <FiLinkedin />,
                    color: "hover:bg-blue-700 hover:text-white",
                    name: "LinkedIn",
                  },
                  {
                    icon: <FiYoutube />,
                    color: "hover:bg-red-600 hover:text-white",
                    name: "YouTube",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`text-gray-400 transition-all duration-300 text-lg bg-gray-800 p-2 rounded-lg w-10 h-10 flex items-center justify-center ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "GDPR",
                "Sitemap",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} FoodieExpress. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Crafted with <span className="text-orange-500">♥</span> by{" "}
                <a
                  href="#"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Rajat Gangwar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
