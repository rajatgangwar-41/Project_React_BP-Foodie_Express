import { useRef, useState } from "react"
import {
  FiUser,
  FiClock,
  FiHeart,
  FiShoppingCart,
  FiShoppingBag,
  FiLogOut,
  FiEdit,
  FiEye,
  FiEyeOff,
  FiChevronRight,
  FiX,
  FiUpload,
  FiCamera,
} from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import { FaRegCalendarAlt, FaCrown, FaCheckCircle } from "react-icons/fa"

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account")
  const [activeOrderTab, setActiveOrderTab] = useState("inProcess")
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const fileInputRef = useRef(null)

  const [userData, setUserData] = useState({
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    firstName: "Alex",
    lastName: "Johnson",
    username: "alexj",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    about: "Food enthusiast and restaurant reviewer",
    password: "mysecurepassword123",
    memberSince: "January 2022",
    loyaltyPoints: 1250,
    membershipTier: "Gold",
  })

  // Sample data
  const favoriteFoods = [
    {
      id: 1,
      name: "Margherita Pizza",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      price: 12.99,
      rating: 4.8,
      prepTime: 20,
      restaurant: "Pizza Heaven",
      restaurantImage:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      tags: ["Italian", "Vegetarian"],
      isPopular: true,
    },
    {
      id: 2,
      name: "Avocado Salad",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      price: 9.99,
      rating: 4.5,
      prepTime: 15,
      restaurant: "Green Leaf",
      restaurantImage:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      tags: ["Healthy", "Vegan"],
    },
    {
      id: 3,
      name: "Beef Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      price: 14.99,
      rating: 4.7,
      prepTime: 25,
      restaurant: "Burger King",
      restaurantImage:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      tags: ["American", "Fast Food"],
      isPopular: true,
    },
  ]

  const [orders, setOrders] = useState({
    inProcess: [
      {
        id: "ORD-89123",
        date: "2023-06-02T14:30:00",
        items: 2,
        total: 24.98,
        status: "On the way",
        itemsPreview: [
          {
            name: "Margherita Pizza",
            image:
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
          {
            name: "Garlic Bread",
            image:
              "https://images.unsplash.com/photo-1608190003443-86a8cd7f754c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
        ],
      },
    ],
    completed: [
      {
        id: "ORD-78945",
        date: "2023-05-15T18:45:00",
        deliveredDate: "2023-05-15T19:30:00",
        items: 3,
        total: 38.97,
        status: "Delivered",
        rated: false,
        itemsPreview: [
          {
            name: "Pepperoni Pizza",
            image:
              "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
          {
            name: "Caesar Salad",
            image:
              "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
          {
            name: "Chocolate Brownie",
            image:
              "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
          },
        ],
      },
    ],
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeProfileImage = () => {
    setProfileImage(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative h-96 w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          className="w-full h-full object-cover opacity-70 overflow-hidden"
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Help Center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              My Profile
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white max-w-2xl"
            whileHover={{ scale: 1.01 }}
          >
            Manage your account and preferences{" "}
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 sticky top-4">
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab("account")}
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
                  onClick={() => setActiveTab("favorites")}
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
                  onClick={() => setActiveTab("orders")}
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
                  onClick={() => setActiveTab("logout")}
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

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Account Section */}
            {activeTab === "account" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                {/* Section Header with Edit/Save Buttons */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Account Details
                  </h2>
                  <div className="flex gap-3">
                    {isEditing ? (
                      <>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <FiX size={16} />
                          <span>Cancel</span>
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                        >
                          <FiUpload size={16} />
                          <span>Save</span>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/40 transition-colors"
                      >
                        <FiEdit size={16} />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Personal Information Section */}
                <div className="flex flex-col md:flex-row gap-8 mb-10">
                  {/* Left Column - Profile Picture and About (1/3 width) */}
                  <div className="md:w-1/3 space-y-6">
                    <div className="flex flex-col items-center">
                      <div className="relative group mb-4">
                        <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                          <img
                            src={profileImage || userData.profilePic}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {isEditing && (
                          <>
                            <div className="absolute inset-0 rounded-full bg-black/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => fileInputRef.current.click()}
                                className="p-2 bg-white rounded-full text-gray-800 mb-2"
                              >
                                <FiCamera size={18} />
                              </button>
                              <button
                                onClick={removeProfileImage}
                                className="p-2 bg-white rounded-full text-gray-800"
                              >
                                <FiX size={18} />
                              </button>
                            </div>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleImageUpload}
                              accept="image/*"
                              className="hidden"
                            />
                          </>
                        )}
                      </div>
                      {isEditing && (
                        <button
                          onClick={() => fileInputRef.current.click()}
                          className="text-sm text-orange-600 dark:text-orange-400 font-medium"
                        >
                          Change Profile Photo
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        About
                      </label>
                      {isEditing ? (
                        <textarea
                          name="about"
                          value={userData.about}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                        />
                      ) : (
                        <p
                          className={`p-4 bg-gray-50 dark:bg-gray-700 rounded-lg ${
                            userData.about
                              ? "text-gray-800 dark:text-gray-200"
                              : "text-gray-400 dark:text-gray-500 italic"
                          }`}
                        >
                          {userData.about || "No description provided"}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Personal Details (2/3 width) */}
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* First Column */}
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            First Name
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              name="firstName"
                              value={userData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                            />
                          ) : (
                            <p className="py-2.5 text-gray-800 dark:text-gray-200 font-medium">
                              {userData.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Email
                          </label>
                          {isEditing ? (
                            <input
                              type="email"
                              name="email"
                              value={userData.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                            />
                          ) : (
                            <p className="py-2.5 text-gray-800 dark:text-gray-200 font-medium">
                              {userData.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Second Column */}
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Last Name
                          </label>
                          {isEditing ? (
                            <input
                              type="text"
                              name="lastName"
                              value={userData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                            />
                          ) : (
                            <p className="py-2.5 text-gray-800 dark:text-gray-200 font-medium">
                              {userData.lastName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            Phone Number
                          </label>
                          {isEditing ? (
                            <input
                              type="tel"
                              name="phone"
                              value={userData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                            />
                          ) : (
                            <p className="py-2.5 text-gray-800 dark:text-gray-200 font-medium">
                              {userData.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Full Width Fields */}
                    <div className="mt-5 space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Username
                        </label>
                        <p className="py-2.5 text-gray-800 dark:text-gray-200 font-medium flex items-center">
                          {userData.username}
                          <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">
                            Cannot be changed
                          </span>
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          {isEditing ? (
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={userData.password}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all pr-10"
                            />
                          ) : (
                            <div className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-transparent pr-10">
                              {showPassword ? userData.password : "••••••••"}
                            </div>
                          )}
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Information Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3">
                    <div className="w-2 h-6 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></div>
                    Account Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Member Since */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                          <FaRegCalendarAlt className="text-blue-500 text-lg" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Member Since
                          </p>
                          <p className="font-medium text-gray-800 dark:text-white">
                            {userData.memberSince}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Loyalty Points */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                          <FaCrown className="text-orange-500 text-lg" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Loyalty Points
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-gray-800 dark:text-white">
                              {userData.loyaltyPoints}
                            </p>
                            <span className="text-xs bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 text-orange-600 dark:text-orange-300 px-2 py-0.5 rounded-full">
                              {userData.membershipTier} Tier
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Account Status */}
                    <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                          <FaCheckCircle className="text-green-500 text-lg" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Account Status
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <p className="font-medium text-gray-800 dark:text-white">
                              Active
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Favorites Section */}
            {activeTab === "favorites" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Your Favorite Items
                </h2>

                {favoriteFoods.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteFoods.map((food) => (
                      <div
                        key={food.id}
                        className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        {/* Food Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          {food.isPopular && (
                            <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>

                        {/* Food Details */}
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                              {food.name}
                            </h3>
                            <span className="text-lg font-bold text-orange-500 dark:text-orange-400">
                              ${food.price.toFixed(2)}
                            </span>
                          </div>

                          {/* Restaurant Info */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                              <img
                                src={food.restaurantImage}
                                alt={food.restaurant}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {food.restaurant}
                            </span>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                              <FiClock className="text-orange-500" size={12} />
                              {food.prepTime} mins
                            </span>
                            {food.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Rating and Add to Cart */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar
                                    key={i}
                                    className={`text-sm ${
                                      i < Math.floor(food.rating)
                                        ? "text-yellow-400"
                                        : "text-gray-300 dark:text-gray-500"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {food.rating}
                              </span>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg flex items-center gap-1"
                            >
                              <FiShoppingCart size={14} />
                              <span>Add</span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                      <FiHeart className="text-gray-400 dark:text-gray-500 text-3xl" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                      No favorites yet
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Save your favorite items to see them here
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Orders Section */}
            {activeTab === "orders" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Your Orders
                </h2>

                {/* Tab Slider */}
                <div className="relative mb-8">
                  <div className="flex border-b border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setActiveOrderTab("inProcess")}
                      className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                        activeOrderTab === "inProcess"
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      In Process
                    </button>
                    <button
                      onClick={() => setActiveOrderTab("completed")}
                      className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                        activeOrderTab === "completed"
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>

                {/* Order Content */}
                <div className="space-y-6">
                  {activeOrderTab === "inProcess" ? (
                    orders.inProcess.length > 0 ? (
                      orders.inProcess.map((order) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600"
                        >
                          <div className="flex flex-col sm:flex-row justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg font-semibold text-gray-800 dark:text-white">
                                  Order #{order.id}
                                </span>
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                  {order.status}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                Ordered on{" "}
                                {new Date(order.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </p>

                              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <span>{order.items} items</span>
                                <span>•</span>
                                <span>${order.total.toFixed(2)}</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:items-end gap-2">
                              <button className="px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                                Track Order
                              </button>
                              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>

                          {/* Order Items Preview */}
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                              Items
                            </h4>
                            <div className="flex gap-3 overflow-x-auto pb-2">
                              {order.itemsPreview.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white dark:bg-gray-600"
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                          <FiShoppingBag className="text-gray-400 dark:text-gray-500 text-3xl" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                          No orders in process
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          Your current orders will appear here
                        </p>
                      </div>
                    )
                  ) : orders.completed.length > 0 ? (
                    orders.completed.map((order) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex flex-col sm:flex-row justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                                Order #{order.id}
                              </span>
                              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                                {order.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                              Ordered on{" "}
                              {new Date(order.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )}
                              {order.deliveredDate && (
                                <>
                                  <br />
                                  Delivered on{" "}
                                  {new Date(
                                    order.deliveredDate
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </>
                              )}
                            </p>

                            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span>{order.items} items</span>
                              <span>•</span>
                              <span>${order.total.toFixed(2)}</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:items-end gap-2">
                            <button className="px-4 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors">
                              Reorder
                            </button>
                            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>

                        {/* Order Items Preview */}
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            Items
                          </h4>
                          <div className="flex gap-3 overflow-x-auto pb-2">
                            {order.itemsPreview.map((item, index) => (
                              <div
                                key={index}
                                className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-white dark:bg-gray-600"
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Rating Option for Completed Orders */}
                        {!order.rated && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <button className="text-sm text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
                              Rate this order
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                        <FiCheckCircle className="text-gray-400 dark:text-gray-500 text-3xl" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                        No completed orders
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Your order history will appear here
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Logout Section */}
            {activeTab === "logout" && (
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
                    Ready to leave?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    You'll need to sign in again to access your account
                  </p>
                  <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium">
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
