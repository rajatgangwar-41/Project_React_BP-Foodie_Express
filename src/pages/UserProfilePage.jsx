import { useSelector } from "react-redux"
import {
  FavoritesSection,
  HeroSection,
  AccountSection,
  LogoutSection,
  OrdersSection,
  Sidebar,
} from "../components/profile"

const UserProfilePage = () => {
  const { activeTab } = useSelector((state) => state.profile)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar activeTab={activeTab} />

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Account Section */}
            {activeTab === "account" && <AccountSection />}

            {/* Favorites Section */}
            {activeTab === "favorites" && <FavoritesSection />}

            {/* Orders Section */}
            {activeTab === "orders" && <OrdersSection />}

            {/* Logout Section */}
            {activeTab === "logout" && <LogoutSection />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
