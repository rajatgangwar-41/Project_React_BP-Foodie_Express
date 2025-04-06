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
import { useMediaQuery } from "react-responsive"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../../features/themeSlice"
import { Cart } from "../common"

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
      // navigate(isLoggedIn ? "/profile" : "/login")
      isLoggedIn
        ? navigate("/profile")
        : navigate("/login", { state: { path: "/" } })
      closeMobileMenu?.()
    } else {
      if (isLoggedIn) {
        setIsOpen(!isOpen)
      } else {
        navigate("/login", { state: { path: "/" } })
      }
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
            ? "hover:bg-gray-100 dark:hover:bg-gray-700 p-1"
            : isMobile
            ? ""
            : isScrolled
            ? "bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            : "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
        }`}
      >
        {isLoggedIn ? (
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
            />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></span>
          </div>
        ) : isMobile ? (
          <div className="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="bg-orange-500 dark:bg-orange-600 rounded-full p-1.5 border-2 border-white dark:border-gray-800">
              <FiUser className="h-4 w-4 text-white" />
            </div>
            <span className="ml-2 text-gray-900 dark:text-white">Login</span>
          </div>
        ) : (
          <motion.div
            className="flex items-center gap-2 px-3 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`p-1.5 rounded-full transition-all ${
                isScrolled
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              <FiUser className="h-4 w-4 text-white" />
            </div>

            <span
              className={`text-base font-medium tracking-wide ${
                isScrolled ? "text-white" : "text-gray-900 dark:text-white"
              } transition-colors`}
            >
              Login
            </span>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen &&
          isLoggedIn && ( // Only show menu if logged in
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
            >
              <div className="py-1">
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

                {/* Menu Items */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  <MenuItem
                    to="/account"
                    icon={
                      <FiUserCheck className="text-gray-700 dark:text-gray-300" />
                    }
                    text="My Account"
                    onClick={() => handleMenuItemClick("/account")}
                  />

                  <MenuItem
                    to="/orders"
                    icon={
                      <FiShoppingBag className="text-gray-700 dark:text-gray-300" />
                    }
                    text="My Orders"
                    onClick={() => handleMenuItemClick("/orders")}
                  />

                  <MenuItem
                    to="/favorites"
                    icon={
                      <FiHeart className="text-gray-700 dark:text-gray-300" />
                    }
                    text="My Favorites"
                    onClick={() => handleMenuItemClick("/favorites")}
                  />

                  <MenuItem
                    to="/addresses"
                    icon={
                      <FiHome className="text-gray-700 dark:text-gray-300" />
                    }
                    text="Saved Addresses"
                    onClick={() => handleMenuItemClick("/addresses")}
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
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}

// MenuItem helper component
const MenuItem = ({ to, icon, text, onClick }) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
    >
      <span className="mr-3">{icon}</span>
      {text}
    </Link>
  </motion.div>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const theme = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Help", href: "/help" },
  ]

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white dark:bg-gray-900 shadow-md py-4"
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
                <span className="text-2xl font-bold text-orange-500">
                  Foodie
                </span>
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
                onClick={handleThemeToggle}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {theme === "dark" ? (
                  <FiSun className={`h-6 w-6 text-yellow-300`} />
                ) : (
                  <FiMoon className="h-6 w-6" />
                )}
              </motion.button>

              {/* Cart */}
              <motion.button
                onClick={() => {
                  setIsCartOpen(true)
                  setIsMenuOpen(false) // Close mobile menu when opening cart
                }}
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
          className={`lg:hidden overflow-hidden w-full ${
            theme === "dark"
              ? "bg-gray-900/95 backdrop-blur-sm"
              : "bg-white/95 backdrop-blur-sm shadow-lg"
          }`}
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
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    } ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : theme === "dark"
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}

            {/* Icons Section */}
            <div
              className={`pt-4 border-t ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between space-x-4">
                <UserDropdown
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  isScrolled={isScrolled}
                  closeMobileMenu={() => setIsMenuOpen(false)}
                />

                {/* Cart with badge */}
                <button
                  className={`flex items-center py-2 px-4 rounded-full ${
                    theme === "dark"
                      ? "hover:bg-gray-800 text-white"
                      : "hover:bg-gray-100 text-gray-900"
                  } relative`}
                >
                  <FiShoppingCart className="h-6 w-6" />
                  <span className="ml-2 text-lg">Cart</span>
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Dark Mode Toggle */}
                <button
                  onClick={handleThemeToggle}
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  }`}
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
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Header
