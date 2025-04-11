import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { FiShoppingCart, FiSun, FiMoon } from "react-icons/fi"
import { User } from "../header"
import { navLinks } from "../../../constants"

const MobileMenu = ({
  theme,
  cartItemsCount,
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  handleCartStatus,
  handleThemeToggle,
}) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden overflow-hidden w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-4 pt-2 pb-6 space-y-2">
        {navLinks.map((link) => (
          <motion.div
            key={link.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          </motion.div>
        ))}

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <User
              isScrolled={isScrolled}
              closeMobileMenu={() => setIsMenuOpen(false)}
            />

            <button
              className={`flex items-center py-2 px-4 rounded-full dark:hover:bg-gray-800 dark:text-white hover:bg-gray-100 text-gray-900 relative`}
              onClick={() => {
                handleCartStatus(true)
                setIsMenuOpen(false)
              }}
            >
              <FiShoppingCart className="h-6 w-6" />
              <span className="ml-2 text-lg">Cart</span>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            </button>

            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full dark:hover:bg-gray-800 hover:bg-gray-100
            `}
            >
              {theme === "dark" ? (
                <FiSun className="h-6 w-6 text-yellow-300" />
              ) : (
                <FiMoon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MobileMenu
