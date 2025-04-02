import { motion, AnimatePresence } from "framer-motion"
import {
  FiUser,
  FiLogOut,
  FiHeart,
  FiShoppingBag,
  FiHome,
  FiUserCheck,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiMoon,
  FiSun,
} from "react-icons/fi"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive" // Add this import

const MenuItem = ({ to, icon, text, onClick }) => (
  <motion.div
    whileHover={{ x: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
    >
      <span className="mr-3 h-4 w-4">{icon}</span>
      {text}
    </Link>
  </motion.div>
)

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

const UserDropdown = ({
  isLoggedIn,
  setIsLoggedIn,
  isScrolled,
  closeMobileMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)
  const isMobile = useMediaQuery({ maxWidth: 1024 })

  useClickOutside(dropdownRef, () => setIsOpen(false))

  const handleUserAction = () => {
    if (isMobile) {
      navigate(isLoggedIn ? "/profile" : "/login")
      closeMobileMenu?.() // Close mobile menu if function exists
    } else {
      setIsOpen(!isOpen)
    }
  }

  const handleMenuItemClick = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleUserAction}
        className={`flex items-center gap-3 ml-2 rounded-full transition-all cursor-pointer ${
          isLoggedIn
            ? "hover:bg-gray-100 dark:hover:bg-gray-700"
            : isMobile
            ? ""
            : isScrolled
            ? "bg-[#1E1E1E] hover:bg-[#2A2A2A]"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {isLoggedIn ? (
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-400 rounded-full border border-white dark:border-gray-800"></span>
          </div>
        ) : isMobile ? (
          <button className="flex items-center p-2 rounded-full hover:bg-white/10">
            <div className="bg-orange-500 rounded-full p-1.5 border-2 border-white">
              <FiUser className="h-4 w-4 fill-[#1E1E1E]" />
            </div>
            <span className="ml-2 text-white">Login</span>
          </button>
        ) : (
          <motion.div
            className="flex items-center gap-2 px-3 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`p-1.5 rounded-full transition-all ${
                isScrolled
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
              whileHover={{ rotate: 10 }}
            >
              <FiUser
                className={`h-4 w-4 ${
                  isScrolled ? "text-white" : "text-orange-400"
                } transition-colors`}
              />
            </motion.div>

            <motion.span
              className={`text-base font-medium tracking-wide ${
                isScrolled ? "text-white" : "text-gray-900"
              } transition-colors`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Login
            </motion.span>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              duration: 0.15,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
          >
            <div className="py-1">
              {isLoggedIn ? (
                <>
                  {/* User Profile Section */}
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                    className="px-4 py-3 border-b border-gray-100 dark:border-gray-700"
                  >
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      john@example.com
                    </p>
                  </motion.div>

                  {/* Menu Items with subtle animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ staggerChildren: 0.05 }}
                  >
                    <MenuItem
                      to="/account"
                      icon={<FiUserCheck />}
                      text="My Account"
                      onClick={() => handleMenuItemClick("/account")}
                    />

                    <MenuItem
                      to="/orders"
                      icon={<FiShoppingBag />}
                      text="My Orders"
                      onClick={() => handleMenuItemClick("/account")}
                    />

                    <MenuItem
                      to="/favorites"
                      icon={<FiHeart />}
                      text="My Favorites"
                      onClick={() => handleMenuItemClick("/account")}
                    />

                    <MenuItem
                      to="/addresses"
                      icon={<FiHome />}
                      text="Saved Addresses"
                      onClick={() => handleMenuItemClick("/account")}
                    />

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsLoggedIn(false)
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
                    >
                      <FiLogOut className="mr-3 h-4 w-4" />
                      Log Out
                    </motion.button>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/login"
                    onClick={() => {
                      setIsOpen(false)
                      setIsLoggedIn(true)
                    }}
                    className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
                  >
                    <FiUser className="mr-3 h-4 w-4" />
                    Log In
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Usage in your header component:
// <UserDropdown isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Add login state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Help", href: "/help" },
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md"
          : "bg-black/30 dark:bg-gray-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <NavLink to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">Foodie</span>
              <span
                className={`text-2xl font-bold ${
                  isScrolled
                    ? "text-gray-800 dark:text-white"
                    : "text-white drop-shadow-lg"
                }`}
              >
                Express
              </span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
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

          {/* Right side icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex items-center space-x-4"
          >
            {/* Dark/Light mode toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {darkMode ? (
                <FiSun
                  className={`h-6 w-6 ${isScrolled ? "" : "text-yellow-300"}`}
                />
              ) : (
                <FiMoon className="h-6 w-6" />
              )}
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full relative ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10 drop-shadow-md"
              }`}
            >
              <FiShoppingCart className="h-6 w-6" />
              <motion.span className="absolute -top-1 -right-1 bg-orange-500 text-neutral-700 text-sm font-semibold rounded-full h-5 w-5 flex items-center justify-center drop-shadow-md">
                3
              </motion.span>
            </motion.button>

            {/* User Profile with your specific styling */}
            <UserDropdown
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              isScrolled={isScrolled}
              closeMobileMenu={() => setIsMenuOpen(false)}
            />
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="lg:hidden flex items-center"
          >
            <button
              className={`p-2 rounded-full ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10 drop-shadow-md"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden w-full bg-gray-900/95 dark:bg-gray-900 backdrop-blur-sm`}
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
                  `block px-3 py-2 rounded-md text-base font-medium text-white ${
                    isActive ? "bg-orange-500" : "hover:bg-white/10"
                  }`
                }
                onClick={() => setIsMenuOpen(false)} // Add this to close menu on click
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Improved Icons Section */}
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between space-x-4">
              <UserDropdown
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                isScrolled={isScrolled}
                closeMobileMenu={() => setIsMenuOpen(false)}
              />

              {/* Cart with badge */}
              <button className="flex items-center py-2 px-4 rounded-full hover:bg-white/10 relative">
                <FiShoppingCart className="h-6 w-6 text-white" />
                <span className="ml-2 text-white text-lg">Cart</span>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-white/10"
              >
                {darkMode ? (
                  <FiSun className="h-6 w-6 text-yellow-300" />
                ) : (
                  <FiMoon className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
