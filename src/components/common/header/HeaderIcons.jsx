import { motion } from "framer-motion"
import { FiShoppingCart, FiSun, FiMoon } from "react-icons/fi"
import { User } from "../header"

const HeaderIcons = ({
  theme,
  cartItemsCount,
  isScrolled,
  handleThemeToggle,
  handleCartStatus,
  setIsMenuOpen,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="hidden lg:flex items-center space-x-4"
    >
      {/* Theme Icon */}
      <motion.button
        onClick={handleThemeToggle}
        whileTap={{ scale: 0.9 }}
        className={`p-2 rounded-full ${
          isScrolled
            ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            : "text-white hover:bg-white/10"
        }`}
      >
        {theme === "dark" ? (
          <FiSun className="h-6 w-6 text-yellow-300" />
        ) : (
          <FiMoon className="h-6 w-6" />
        )}
      </motion.button>

      {/* Cart Icon */}
      <motion.button
        onClick={() => handleCartStatus(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-2 rounded-full relative ${
          isScrolled
            ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            : "text-white hover:bg-white/10 drop-shadow-md"
        }`}
      >
        <FiShoppingCart className="h-6 w-6" />
        <motion.span className="absolute -top-1 -right-1 bg-orange-500 text-gray-700 dark:text-gray-100 text-sm font-semibold rounded-full h-5 w-5 flex items-center justify-center drop-shadow-md">
          {cartItemsCount || 0}
        </motion.span>
      </motion.button>

      {/* User Icon  */}
      <User
        isScrolled={isScrolled}
        closeMobileMenu={() => setIsMenuOpen(false)}
      />
    </motion.div>
  )
}

export default HeaderIcons
