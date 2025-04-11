import { useState } from "react"
import { motion } from "motion/react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi"
import toast from "react-hot-toast"
import { useSignupMutation } from "../../features/authApiSlice"
import { setCredentials } from "../../features/authSlice"

const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(10, "Phone number must be exactly 10 digits")
      .max(10, "Phone number must be exactly 10 digits")
      .regex(
        /^\d{10}$/,
        "Please enter a valid 10-digit phone number (numbers only)"
      ),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be at most 50 characters"),
    confirmPassword: z.string(),
    agreeToTerms: z
      .boolean()
      .refine((val) => val, "You must agree to the terms and conditions"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const location = useLocation()
  const [signup] = useSignupMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const from = location.state?.from || "/"

  const onSubmit = async (data) => {
    const toastOptions = {
      position: "top-center",
      duration: 4000,
      style: {
        color: "#fff",
      },
    }

    const toastId = toast.loading("Creating your account...", {
      ...toastOptions,
      style: {
        ...toastOptions.style,
        background: "#F59E0B",
      },
      icon: "⏳",
    })

    try {
      const { confirmPassword: _, agreeToTerms: __, ...userData } = data
      const { token, ...user } = await signup(userData).unwrap()

      dispatch(
        setCredentials({
          user,
          token,
        })
      )

      console.log(user)

      toast.success("Account created successfully! Welcome!", {
        ...toastOptions,
        icon: "🎉",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })

      reset()
      navigate(from, { replace: true })
    } catch (error) {
      let errorMessage = "Signup failed. Please try again."
      let icon = "❌"

      if (error.data?.conflicts) {
        const { username, email } = error.data.conflicts

        if (username && email) {
          errorMessage = "Username and email already exist"
          icon = "⚠️"
        } else if (username) {
          errorMessage = "Username already taken"
          icon = "👤"
        } else if (email) {
          errorMessage = "Email already registered"
          icon = "✉️"
        }
      }

      toast.error(errorMessage, {
        ...toastOptions,
        icon,
        style: {
          ...toastOptions.style,
          background: "#EF4444",
        },
        id: toastId,
      })
    }
  }
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div
        className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                {...register("username")}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.username
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="foodieLover"
              />
            </div>
            {errors.username && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="your@email.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiPhone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                {...register("phone")}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="1234567890"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                {...register("password")}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                ) : (
                  <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                {...register("confirmPassword")}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                ) : (
                  <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                {...register("agreeToTerms")}
                className="h-4 w-4 text-orange-600 dark:text-orange-500 focus:ring-orange-500 border-gray-400 dark:border-gray-600 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="agreeToTerms"
                className="font-medium text-gray-800 dark:text-gray-300"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline"
                >
                  Privacy Policy
                </Link>
              </label>
              {errors.agreeToTerms && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                  {errors.agreeToTerms.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-wait"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Creating Account..."
            ) : (
              <>
                Sign Up <FiArrowRight className="h-5 w-5" />
              </>
            )}
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              replace
              className="font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SignupForm
