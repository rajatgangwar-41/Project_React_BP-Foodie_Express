import { useDispatch } from "react-redux"
import { setActiveTab } from "../../features/profileSlice"
import {
  FiChevronRight,
  FiHeart,
  FiLogOut,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi"

const Sidebar = ({ activeTab }) => {
  const dispatch = useDispatch()

  return (
    <div className="lg:w-1/4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 sticky top-4">
        <div className="space-y-1">
          <button
            onClick={() => dispatch(setActiveTab("account"))}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeTab === "account"
                ? "bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400"
                : "hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <FiUser className="text-lg" />
            <span>Account</span>
            <FiChevronRight className="ml-auto" />
          </button>

          <button
            onClick={() => dispatch(setActiveTab("favorites"))}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeTab === "favorites"
                ? "bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400"
                : "hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <FiHeart className="text-lg" />
            <span>Favorites</span>
            <FiChevronRight className="ml-auto" />
          </button>

          <button
            onClick={() => dispatch(setActiveTab("orders"))}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeTab === "orders"
                ? "bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400"
                : "hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <FiShoppingBag className="text-lg" />
            <span>Orders</span>
            <FiChevronRight className="ml-auto" />
          </button>

          <button
            onClick={() => dispatch(setActiveTab("logout"))}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
              activeTab === "logout"
                ? "bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400"
                : "hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <FiLogOut className="text-lg" />
            <span>Log Out</span>
            <FiChevronRight className="ml-auto" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
