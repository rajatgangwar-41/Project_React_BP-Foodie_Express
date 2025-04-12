import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { FiLogOut, FiTrash2 } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { logout } from "../../features/authSlice"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks"
import { useDeleteUserMutation } from "../../features/authApiSlice"

const LogoutSection = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useAuth()

  const [deleteUser] = useDeleteUserMutation()

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

      toast.success("Logged out successfully!", {
        ...toastOptions,
        icon: "👋",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })

      navigate("/menu")
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

  const handleDeleteAccount = async () => {
    const toastOptions = {
      position: "top-center",
      duration: 4000,
      style: {
        color: "#fff",
      },
    }

    const toastId = toast.loading("Deleting Account...", {
      ...toastOptions,
      style: {
        ...toastOptions.style,
        background: "#F59E0B",
      },
      icon: "⏳",
    })
    try {
      await deleteUser(id).unwrap()
      dispatch(logout())

      toast.success("Account Deleted successfully!", {
        ...toastOptions,
        icon: "👋",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })

      navigate("/menu")
    } catch (error) {
      toast.error(`Failed to Delete-${error}`, {
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 text-center"
    >
      <div className="max-w-md mx-auto py-8">
        <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
          <FiLogOut className="text-red-500 text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          Account Actions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Manage your account settings
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {/* Sign Out Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogout}
            className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <FiLogOut size={18} />
            Log Out
          </motion.button>

          {/* Delete Account Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDeleteAccount}
            className="px-6 py-2.5 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium flex items-center gap-2 border border-gray-300 dark:border-gray-600 transition-colors"
          >
            <FiTrash2 size={18} className="text-red-500" />
            Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default LogoutSection
