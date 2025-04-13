import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"
import { toggleTheme } from "../../features/themeSlice"
import { setIsCartOpen, setIsLoginPopupOpen } from "../../features/popupSlice"
import { useTheme, useAuth } from "../../hooks"
import { DesktopNavigation, HeaderIcons, MobileMenu } from "./header"
import { toast } from "react-hot-toast"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const { user, isLoggedIn } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleThemeToggle = () => {
    dispatch(toggleTheme())

    toast.success(`Switched to ${theme === "light" ? "Dark" : "Light"} Mode`, {
      icon: theme === "light" ? "🌙" : "☀️",
      position: "top-center",
      duration: 1500,
      style: {
        background: theme === "light" ? "#1f2937" : "#f9fafb",
        color: theme === "light" ? "#f9fafb" : "#1f2937",
      },
    })
  }

  const handleCartStatus = (value) => {
    if (isLoggedIn) dispatch(setIsCartOpen(value))
    else dispatch(setIsLoginPopupOpen(true))
  }

  return (
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

          <DesktopNavigation isScrolled={isScrolled} />
          <HeaderIcons
            theme={theme}
            isScrolled={isScrolled}
            cartItemsCount={user?.cart?.length}
            handleThemeToggle={handleThemeToggle}
            handleCartStatus={handleCartStatus}
            setIsMenuOpen={setIsMenuOpen}
          />

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

      <MobileMenu
        theme={theme}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        cartItemsCount={user?.cart?.length}
        setIsMenuOpen={setIsMenuOpen}
        handleCartStatus={handleCartStatus}
        handleThemeToggle={handleThemeToggle}
      />
    </header>
  )
}

export default Header
