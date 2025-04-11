import { FaUser, FaTimes } from "react-icons/fa"
import { usePopup } from "../../hooks"
import { motion, AnimatePresence } from "framer-motion"
import { setIsLoginPopupOpen } from "../../features/popupSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginPopup = () => {
  const { isLoginPopupOpen } = usePopup()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCancelButton = () => {
    dispatch(setIsLoginPopupOpen(false))
  }

  const handleLoginButton = () => {
    dispatch(setIsLoginPopupOpen(false))
    navigate("/login")
  }

  return (
    <AnimatePresence>
      {isLoginPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2 dark:text-white">
                <FaUser className="text-blue-500 dark:text-blue-400" /> Login
                Required
              </h3>
              <button
                onClick={handleCancelButton}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>

            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Please login to access your user details.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelButton}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLoginButton}
                className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoginPopup
