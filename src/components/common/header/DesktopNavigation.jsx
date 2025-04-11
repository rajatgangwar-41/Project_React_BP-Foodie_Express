import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
import { navLinks } from "../../../constants"

const DesktopNavigation = ({ isScrolled }) => (
  <nav className="hidden lg:flex items-center space-x-1">
    {navLinks.map((link, index) => (
      <motion.div
        key={link.name}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <NavLink
          to={link.href}
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-lg font-medium transition-colors ${
              isActive
                ? "bg-orange-600 text-white shadow-md"
                : isScrolled
                ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10 drop-shadow-md"
            }`
          }
        >
          {link.name}
        </NavLink>
      </motion.div>
    ))}
  </nav>
)

export default DesktopNavigation
