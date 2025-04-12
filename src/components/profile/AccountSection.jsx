import { motion } from "motion/react"
import { useRef, useState } from "react"
import { FaCheckCircle, FaCrown, FaRegCalendarAlt } from "react-icons/fa"
import {
  FiCamera,
  FiEdit,
  FiEye,
  FiEyeOff,
  FiUpload,
  FiX,
} from "react-icons/fi"
import { useAuth } from "../../hooks"
import { useUpdateUserMutation } from "../../features/authApiSlice"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { updateCredentials } from "../../features/authSlice"

const AccountSection = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const fileInputRef = useRef(null)
  const dispatch = useDispatch()

  const { user, id } = useAuth()
  const [updateUser, { isLoading }] = useUpdateUserMutation()

  const [userData, setUserData] = useState({
    image: user.image || "https://randomuser.me/api/portraits/men/32.jpg",
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    username: user.username || "",
    email: user.email || "",
    phone: user.phone || "",
    about: user.about || "",
    password: user.password || "",
    memberSince: user.memberSince || "January 2022",
    loyaltyPoints:
      user.loyaltyPoints || Math.floor((Math.random() * 100 + 1100) / 10) * 10,
    membershipTier:
      user.membershipTier ||
      ["Platinum", "Diamond", "Gold", "Silver", "Bronze"][
        Math.floor(Math.random() * 5)
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
        setUserData((prev) => {
          return { ...prev, image: event.target.result }
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const removeProfileImage = () => {
    setUserData((prev) => {
      return { ...prev, image: null }
    })
  }

  const handleSaveButton = async () => {
    const toastOptions = {
      position: "top-center",
      duration: 4000,
      style: {
        color: "#fff",
      },
    }

    const toastId = toast.loading("Updating your Details...", {
      ...toastOptions,
      style: {
        ...toastOptions.style,
        background: "#F59E0B",
      },
      icon: "⏳",
    })
    setIsEditing(false)

    try {
      const { token: _, ...user } = await updateUser({ id, userData }).unwrap()

      dispatch(updateCredentials({ user }))

      // Show success toast
      toast.success("Updated successfully!", {
        ...toastOptions,
        icon: "👋",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })
    } catch (error) {
      console.error("Update error:", error.data.details)

      // Show error toast
      toast.error(error.data.message, {
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
                onClick={() => handleSaveButton()}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                <FiUpload size={16} />
                <span>Save</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              disabled={isLoading}
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
                  src={userData.image}
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
                  <p
                    className={`${
                      userData.firstName
                        ? "py-2.5 text-gray-800 dark:text-gray-200 font-medium"
                        : "p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-400 dark:text-gray-500 italic"
                    }`}
                  >
                    {userData.firstName || "Add First Name"}
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
                  <p
                    className={`${
                      userData.email
                        ? "py-2.5 text-gray-800 dark:text-gray-200 font-medium"
                        : "p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-400 dark:text-gray-500 italic"
                    }`}
                  >
                    {userData.email || "Add Email"}
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
                  <p
                    className={`${
                      userData.lastName
                        ? "py-2.5 text-gray-800 dark:text-gray-200 font-medium"
                        : "p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-400 dark:text-gray-500 italic"
                    }`}
                  >
                    {userData.lastName || "Add Last Name"}
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
                  <p
                    className={`${
                      userData.phone
                        ? "py-2.5 text-gray-800 dark:text-gray-200 font-medium"
                        : "p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-400 dark:text-gray-500 italic"
                    }`}
                  >
                    {userData.phone || "Add Phone Number"}
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
  )
}

export default AccountSection
