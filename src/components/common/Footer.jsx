import { motion } from "framer-motion"
import {
  socialLinks,
  quickLinks,
  legalLinks,
  contactLinks,
  appStoreLinks,
} from "../../constants/footer"

const DecorativeElement = () => {
  return (
    <div className="absolute inset-0 opacity-10 dark:opacity-5">
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, 10, 0],
          transition: { duration: 15, repeat: Infinity },
        }}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-orange-400 dark:bg-orange-500 filter blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, -10, 0],
          transition: { duration: 20, repeat: Infinity },
        }}
        className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-teal-400 dark:bg-teal-500 filter blur-3xl"
      ></motion.div>
    </div>
  )
}

const BrandColumn = () => {
  return (
    <div className="space-y-6">
      <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
        <span className="text-3xl font-bold text-orange-500 dark:text-orange-400">
          Foodie
        </span>
        <span className="text-3xl font-bold text-gray-800 dark:text-white">
          Express
        </span>
      </motion.div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        Delivering culinary excellence to your doorstep since 2015. Our mission
        is to connect food lovers with the best local restaurants.
      </p>

      {/* App Downloads */}
      <div className="mt-6">
        <h4 className="text-gray-800 dark:text-white/90 font-medium mb-4 text-lg">
          Download our app
        </h4>
        <div className="flex flex-col sm:flex-row gap-3">
          {appStoreLinks.map((store) => (
            <motion.a
              key={store.name}
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                alt={store}
                className="h-12"
                src={store.image}
                loading="lazy"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

const ContactColumn = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-gray-800 dark:text-white text-lg font-semibold tracking-wide">
        Contact Us
      </h3>
      <div className="space-y-4">
        {contactLinks.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 group"
          >
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-orange-500 transition-colors">
              <div className="text-orange-500 dark:text-orange-400 group-hover:text-white transition-colors">
                {<item.icon />}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 whitespace-pre-line">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const LinksColumn = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-gray-800 dark:text-white text-lg font-semibold tracking-wide">
        Quick Links
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {quickLinks.map((column, colIndex) => (
          <div key={colIndex} className="space-y-3">
            {column.map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ x: 5 }}
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm block group"
              >
                <span className="group-hover:pl-2 transition-all duration-300 flex items-center">
                  <span className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  {item}
                </span>
              </motion.a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const NewsletterColumn = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-gray-800 dark:text-white text-lg font-semibold tracking-wide">
        Stay Updated
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Subscribe to our newsletter for the latest updates, offers, and culinary
        tips.
      </p>
      <form className="space-y-4">
        <div className="relative">
          <input
            placeholder="Your email address"
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            required
            type="email"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 hover:from-orange-600 hover:to-amber-600 dark:hover:from-orange-500 dark:hover:to-amber-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-orange-400/30 flex items-center justify-center gap-2"
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
        </motion.button>
      </form>

      {/* Social Media */}
      <div className="pt-4">
        <h4 className="text-gray-800 dark:text-white font-medium mb-4">
          Follow Us
        </h4>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href="#"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-600 dark:text-gray-400 transition-all duration-300 text-lg bg-gray-100 dark:bg-gray-800 p-2 rounded-lg w-10 h-10 flex items-center justify-center ${social.color} hover:text-white`}
              aria-label={social.name}
            >
              {<social.icon />}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

const BottomBar = () => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {legalLinks.map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-xs sm:text-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} FoodieExpress. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Crafted with{" "}
              <span className="text-orange-500 dark:text-orange-400">♥</span> by{" "}
              <a
                href="#"
                className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
              >
                Rajat Gangwar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 relative overflow-hidden">
      {/* Top Separator Line */}
      <div className="border-t border-gray-200 dark:border-gray-700 w-full"></div>
      {/* Decorative elements */}
      <DecorativeElement />

      <div className="container max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <BrandColumn />

          {/* Contact Column */}
          <ContactColumn />

          {/* Links Column */}
          <LinksColumn />

          {/* Newsletter Column */}
          <NewsletterColumn />
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </footer>
  )
}

export default Footer
