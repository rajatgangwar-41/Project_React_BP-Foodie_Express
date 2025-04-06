import { motion } from "motion/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FaLeaf, FaPepperHot, FaPizzaSlice } from "react-icons/fa"
import { toast } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
  resetForm,
  resetStatus,
  sendContactForm,
  updateFormField,
} from "../../features/contactSlice"

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().length(10, "Phone number must consist of 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const dispatch = useDispatch()
  const { formData, status, error } = useSelector((state) => state.contact)

  useEffect(() => {
    if (status === "loading") {
      toast.loading("Sending your message...", {
        id: "form-loading-toast", // Unique ID for the loading toast
        position: "top-center",
        style: {
          background: "#F97316",
          color: "#fff",
        },
        icon: "✉️",
      })
    } else if (status === "succeeded") {
      // Remove loading toast before showing success
      toast.dismiss("form-loading-toast")

      toast.success(
        "Message sent successfully! We will get back to you soon.",
        {
          duration: 4000,
          position: "top-center",
          icon: "👋",
          style: {
            background: "#10B981",
            color: "#fff",
          },
        }
      )
      dispatch(resetForm())
    } else if (status === "failed") {
      // Remove loading toast before showing error
      toast.dismiss("form-loading-toast")

      toast.error(
        `Failed to send message: ${error?.message || "Please try again."}`,
        {
          duration: 4000,
          position: "top-center",
          icon: "❌",
          style: {
            background: "#EF4444",
            color: "#fff",
          },
        }
      )
      dispatch(resetStatus())
    }
  }, [status, error, dispatch])

  const onSubmit = (data) => {
    dispatch(sendContactForm(data))
  }

  const handleInputChange = (field, value) => {
    dispatch(updateFormField({ field, value }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
      {/* Contact Form with Validation */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.35 }}
        className="bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-500 mb-4 sm:mb-6">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4 md:space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              value={formData.name}
              {...register("name")}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                errors.name
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              value={formData.email}
              {...register("email")}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                errors.email
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              value={formData.phone}
              {...register("phone")}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                errors.phone
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
              placeholder="+91-1234567890"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              {...register("message")}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                errors.message
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-600"
              } focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
              placeholder="Your message..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "loading"}
            className={`w-full bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition duration-300 text-sm sm:text-base ${
              status === "loading" ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* Animated Pizza Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.35 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-orange-100 dark:border-gray-700 h-full flex flex-col min-h-[400px]"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-700 flex items-center border-b border-orange-100 dark:border-gray-700">
          <div className="bg-orange-500/10 dark:bg-orange-400/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 backdrop-blur-sm">
            <FaPizzaSlice className="text-orange-600 dark:text-orange-400 text-lg sm:text-xl" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
              Our Signature Pizza
            </h3>
            <p className="text-xs sm:text-sm text-orange-600 dark:text-orange-400 mt-1">
              Freshly baked daily
            </p>
          </div>
        </div>

        {/* SVG Container */}
        <div className="relative flex-grow flex items-center justify-center p-2 sm:p-4 bg-[url('https://transparenttextures.com/patterns/food.png')] bg-opacity-5 dark:bg-opacity-10">
          {/* SVG animation - adjusted colors for dark mode */}
          <svg
            className="w-full h-auto max-h-[300px] sm:max-h-[350px] z-10"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pizza Base - Adjusted for dark mode */}
            <circle
              cx="250"
              cy="250"
              r="200"
              fill="#F97316"
              stroke="#C2410C"
              strokeWidth="8"
              className="animate-pulse"
              style={{ animationDuration: "6s" }}
            >
              <animate
                attributeName="stroke-width"
                values="8;10;8"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Cheese Layer - Slightly darker in dark mode */}
            <circle cx="250" cy="250" r="190" fill="#FDE047" opacity="0.8">
              <animate
                attributeName="opacity"
                values="0.8;0.9;0.8"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Pepperoni Slices */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <circle
                key={i}
                cx={250 + 120 * Math.cos((angle * Math.PI) / 180)}
                cy={250 + 120 * Math.sin((angle * Math.PI) / 180)}
                r="25"
                fill="#B91C1C"
                stroke="#7F1D1D"
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 250 250`}
                  to={`5 250 250`}
                  dur={`${3 + i / 2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="25;27;25"
                  dur={`${4 - i / 3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Mushroom Slices */}
            {[30, 75, 150, 210, 300].map((angle, i) => (
              <g
                key={i}
                transform={`translate(${
                  250 + 140 * Math.cos((angle * Math.PI) / 180)
                }, ${250 + 140 * Math.sin((angle * Math.PI) / 180)})`}
              >
                <ellipse
                  cx="0"
                  cy="0"
                  rx="20"
                  ry="15"
                  fill="#F3F4F6"
                  stroke="#D1D5DB"
                  strokeWidth="1"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`0,0; 0,-5; 0,0`}
                    dur={`${5 - i / 2}s`}
                    repeatCount="indefinite"
                  />
                </ellipse>
                <ellipse cx="0" cy="10" rx="15" ry="10" fill="#E5E7EB" />
              </g>
            ))}

            {/* Olive Slices */}
            {[60, 120, 240, 330].map((angle, i) => (
              <circle
                key={i}
                cx={250 + 160 * Math.cos((angle * Math.PI) / 180)}
                cy={250 + 160 * Math.sin((angle * Math.PI) / 180)}
                r="12"
                fill="#1E293B"
              >
                <animate
                  attributeName="cx"
                  values={`
                ${250 + 160 * Math.cos((angle * Math.PI) / 180)};
                ${250 + 165 * Math.cos((angle * Math.PI) / 180)};
                ${250 + 160 * Math.cos((angle * Math.PI) / 180)}
              `}
                  dur={`${3 + i / 2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Cheese Bubbles */}
            {[...Array(15)].map((_, i) => {
              const angle = Math.random() * 360
              const distance = 50 + Math.random() * 140
              return (
                <circle
                  key={i}
                  cx={250 + distance * Math.cos((angle * Math.PI) / 180)}
                  cy={250 + distance * Math.sin((angle * Math.PI) / 180)}
                  r={3 + Math.random() * 4}
                  fill="#FEF3C7"
                  opacity="0.8"
                >
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur={`${2 + Math.random() * 3}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values={`${3 + Math.random() * 4};${
                      5 + Math.random() * 4
                    };${3 + Math.random() * 4}`}
                    dur={`${3 + Math.random() * 4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )
            })}

            {/* Steam Animation */}
            {[1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M${200 + i * 30},100 Q${205 + i * 30},80 ${
                  210 + i * 30
                },100 T${220 + i * 30},100`}
                fill="none"
                stroke="#F3F4F6"
                strokeWidth="2"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.7;0"
                  dur={`${3 + i / 2}s`}
                  repeatCount="indefinite"
                  begin={`${i}s`}
                />
                <animate
                  attributeName="d"
                  values={`
                M${200 + i * 30},100 Q${205 + i * 30},80 ${210 + i * 30},100 T${
                    220 + i * 30
                  },100;
                M${200 + i * 30},90 Q${205 + i * 30},70 ${210 + i * 30},90 T${
                    220 + i * 30
                  },90;
                M${200 + i * 30},100 Q${205 + i * 30},80 ${210 + i * 30},100 T${
                    220 + i * 30
                  },100
              `}
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            ))}
          </svg>

          {/* Floating ingredients */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-4 sm:top-8 left-4 sm:left-8 z-0"
          >
            <FaLeaf className="text-green-500/30 dark:text-green-400/20 text-2xl sm:text-4xl" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-0"
          >
            <FaPepperHot className="text-red-500/30 dark:text-red-400/20 text-2xl sm:text-4xl" />
          </motion.div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-orange-50/50 dark:bg-gray-700/50 text-center border-t border-orange-100 dark:border-gray-700">
          <p className="text-xs sm:text-sm text-orange-700 dark:text-orange-300 font-medium">
            Available for dine-in or delivery
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactFormSection
