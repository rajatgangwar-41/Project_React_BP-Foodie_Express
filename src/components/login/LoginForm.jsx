import { useState } from "react"
import { motion } from "motion/react"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { toast } from "react-hot-toast"
import { useLoginMutation } from "../../features/authApiSlice"
import { setCredentials } from "../../features/authSlice"

const loginSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(3, "Username or Email must be at least 3 characters")
    .max(20, "Username or Email must be at most 20 characters")
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const usernameRegex = /^[a-zA-Z0-9_-]+$/
      return emailRegex.test(value) || usernameRegex.test(value)
    }, "Please enter a valid username or email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 50 characters"),
})

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  })

  const [showPassword, setShowPassword] = useState(false)
  const location = useLocation()
  const [login] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const from = location.state?.from || "/menu"

  const onSubmit = async (data) => {
    const toastOptions = {
      position: "top-center",
      duration: 4000,
      style: {
        color: "#fff",
      },
    }

    const toastId = toast.loading("Logging you in...", {
      ...toastOptions,
      style: {
        ...toastOptions.style,
        background: "#F59E0B",
      },
      icon: "⏳",
    })

    try {
      const { token, ...user } = await login(data).unwrap()

      dispatch(
        setCredentials({
          user,
          token,
        })
      )

      console.log(user)

      // Show success toast
      toast.success("Logged in successfully!", {
        ...toastOptions,
        icon: "👋",
        style: {
          ...toastOptions.style,
          background: "#10B981",
        },
        id: toastId,
      })

      reset()
      navigate(from, { replace: true })
    } catch (error) {
      console.error("Login error:", error.data.details)

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
    <div className="container mx-auto px-4 py-8 md:py-12">
      <motion.div
        className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Log In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username or Email Field */}
          <div>
            <label
              htmlFor="usernameOrEmail"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Username or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="usernameOrEmail"
                {...register("usernameOrEmail")}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.usernameOrEmail
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="Username or Email"
              />
            </div>
            {errors.usernameOrEmail && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.usernameOrEmail}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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
                {...register("password")}
                className={`block w-full pl-10 pr-10 py-2 border ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
                ) : (
                  <FiEye className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Forgot password?
            </Link>
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
              "Signing In..."
            ) : (
              <>
                Log In <FiArrowRight className="h-5 w-5" />
              </>
            )}
          </motion.button>
        </form>

        {/* Social Login Options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <motion.button
              type="button"
              className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub className="h-5 w-5" />
              <span className="ml-2">GitHub</span>
            </motion.button>

            <motion.button
              type="button"
              className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FcGoogle className="h-5 w-5" />
              <span className="ml-2">Google</span>
            </motion.button>
          </div>
        </div>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              replace
              className="font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginForm
