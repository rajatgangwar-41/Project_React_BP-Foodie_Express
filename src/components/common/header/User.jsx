import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { toast } from "react-hot-toast"
import {
  FiUserCheck,
  FiShoppingBag,
  FiHeart,
  FiLogOut,
  FiUser,
} from "react-icons/fi"
import { useAuth } from "../../../hooks"
import { logout } from "../../../features/authSlice"

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

const UserDropdownMenu = ({ handleMenuItemClick, handleLogout }) => {
  const dropdownItems = [
    {
      text: "My Account",
      icon: FiUserCheck,
    },
    {
      text: "My Favorites",
      icon: FiHeart,
    },
    {
      text: "My Orders",
      icon: FiShoppingBag,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ staggerChildren: 0.05 }}
    >
      {dropdownItems.map((item) => (
        <motion.div
          key={item.text}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={() => handleMenuItemClick(item.text)}
            className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
          >
            <span className="mr-3">
              {<item.icon className="text-gray-700 dark:text-gray-300" />}
            </span>
            {item.text}
          </button>
        </motion.div>
      ))}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleLogout}
        className="w-full flex items-center px-4 py-3 text-sm text-red-500 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
      >
        <FiLogOut className="mr-3 h-4 w-4" />
        Log Out
      </motion.button>
    </motion.div>
  )
}

const User = ({ isScrolled, closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const dropdownRef = useRef(null)
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  const { user, isLoggedIn } = useAuth()

  useClickOutside(dropdownRef, () => setIsOpen(false))

  const handleUserAction = () => {
    if (isMobile) {
      isLoggedIn ? navigate(`/user/${user.userId}`) : navigate("/login")
      closeMobileMenu?.()
    } else {
      isLoggedIn ? setIsOpen(!isOpen) : navigate("/login")
    }
  }

  const handleMenuItemClick = () => {
    setIsOpen(false)
    navigate(`/user/${user.userId}`)
  }

  const handleLogout = () => {
    const toastOptions = {
      position: "top-center",
      duration: 4000,
      style: {
        color: "#fff",
      },
    }

    const toastId = toast.loading("Logging out...", {
      ...toastOptions,
      style: {
        ...toastOptions.style,
        background: "#F59E0B",
      },
      icon: "⏳",
    })
    try {
      dispatch(logout())

      setIsOpen(false)

      toast.success("Logged out successfully!", {
        ...toastOptions,
        icon: "👋",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })

      navigate("/")
    } catch (error) {
      toast.error(`Failed to logout-${error}`, {
        ...toastOptions,
        icon: "❌",
        style: {
          ...toastOptions.style,
          background: "#EF4444",
        },
        id: toastId,
      })
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User button/toggle remains exactly the same */}
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
              src={
                user.image || "https://randomuser.me/api/portraits/men/1.jpg"
              }
              alt={user.firstName || "User Image"}
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
        {isOpen && isLoggedIn && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
          >
            <div className="py-1">
              <motion.div
                whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                className="px-4 py-3 border-b border-gray-100 dark:border-gray-700"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user.firstName || "First Name"}{" "}
                  {user.lastName || "Last Name"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </motion.div>

              <UserDropdownMenu
                handleMenuItemClick={handleMenuItemClick}
                handleLogout={handleLogout}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default User
