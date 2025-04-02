import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { z } from "zod"
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLeaf,
  FaPizzaSlice,
  FaHeadset,
  FaYoutube,
  FaLinkedin,
  FaPepperHot,
} from "react-icons/fa"
import { MdDeliveryDining } from "react-icons/md"

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().length(10, "Phone number must consist of 10 digits "),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission here
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section with Motion */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] min-h-[400px] bg-gray-900"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Help Center"
            className="w-full h-full object-cover opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We're always happy to hear from our foodie community!
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Why Contact Section with Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-8 md:mb-12"
          >
            Why Reach Out to Foodie Express?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4">
            {[
              {
                icon: (
                  <MdDeliveryDining className="text-orange-600 text-xl sm:text-2xl" />
                ),
                title: "Order Assistance",
                text: "Need help with your order? We'll guide you through the process.",
              },
              {
                icon: (
                  <FaClock className="text-orange-600 text-xl sm:text-2xl" />
                ),
                title: "Quick Response",
                text: "We typically respond within 2 hours during business hours.",
              },
              {
                icon: (
                  <FaLeaf className="text-orange-600 text-xl sm:text-2xl" />
                ),
                title: "Special Requests",
                text: "Allergies? Dietary needs? We'll accommodate your requirements.",
              },
              {
                icon: (
                  <FaHeadset className="text-orange-600 text-xl sm:text-2xl" />
                ),
                title: "24/7 Support",
                text: "Our customer care team is always ready to help you anytime.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col"
              >
                <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact + Animation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Contact Form with Validation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 sm:mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  {...register("phone")}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="+91-1234567890"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition duration-300 text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Animated Pizza Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 h-full flex flex-col min-h-[400px]"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-amber-50 flex items-center border-b border-orange-100">
              <div className="bg-orange-500/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 backdrop-blur-sm">
                <FaPizzaSlice className="text-orange-600 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Our Signature Pizza
                </h3>
                <p className="text-xs sm:text-sm text-orange-600 mt-1">
                  Freshly baked daily
                </p>
              </div>
            </div>

            {/* SVG Container */}
            <div className="relative flex-grow flex items-center justify-center p-2 sm:p-4 bg-[url('https://transparenttextures.com/patterns/food.png')] bg-opacity-5">
              {/* SVG animation remains the same */}
              <svg
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] z-10"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pizza Base - Animated Crust */}
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

                {/* Cheese Layer */}
                <circle cx="250" cy="250" r="190" fill="#FDE047" opacity="0.8">
                  <animate
                    attributeName="opacity"
                    values="0.8;0.9;0.8"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Pepperoni Slices - Animated */}
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

                {/* Cheese Bubbles - Animated */}
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

              {/* Floating ingredients with motion */}
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
                <FaLeaf className="text-green-500/30 text-2xl sm:text-4xl" />
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
                <FaPepperHot className="text-red-500/30 text-2xl sm:text-4xl" />
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 bg-orange-50/50 text-center border-t border-orange-100">
              <p className="text-xs sm:text-sm text-orange-700 font-medium">
                Available for dine-in or delivery
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
        >
          {[
            {
              icon: <FaPhone className="text-orange-600 text-lg sm:text-xl" />,
              title: "Call Us",
              text: "+91-1234567890",
            },
            {
              icon: (
                <FaWhatsapp className="text-orange-600 text-lg sm:text-xl" />
              ),
              title: "WhatsApp",
              text: "+91-1234567890",
            },
            {
              icon: (
                <MdDeliveryDining className="text-orange-600 text-lg sm:text-xl" />
              ),
              title: "Delivery Hotline",
              text: "+91-1234567890",
            },
            {
              icon: (
                <FaEnvelope className="text-orange-600 text-lg sm:text-xl" />
              ),
              title: "Email Us",
              text: "contact@foodieexpress.com",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <div className="bg-orange-100 p-2 sm:p-3 rounded-full inline-flex">
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-800 mt-2 sm:mt-3 text-sm sm:text-base">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center mb-8 sm:mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-6"
          >
            Connect With Us
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {[
              {
                icon: <FaFacebook className="text-2xl sm:text-3xl" />,
                label: "Facebook",
              },
              {
                icon: <FaTwitter className="text-2xl sm:text-3xl" />,
                label: "Twitter",
              },
              {
                icon: <FaInstagram className="text-2xl sm:text-3xl" />,
                label: "Instagram",
              },
              {
                icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
                label: "LinkedIn",
              },
              {
                icon: <FaYoutube className="text-2xl sm:text-3xl" />,
                label: "YouTube",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -5 }}
                href="#"
                className="text-orange-600 hover:text-orange-700 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base"
          >
            Follow us for daily food inspiration, special offers, and more!
          </motion.p>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-orange-50 rounded-xl p-4 sm:p-6 md:p-8 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4"
          >
            Need Help?
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-3 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Check out our FAQ section for quick answers to common questions
            about orders, delivery, and more.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 sm:px-6 rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Visit Help Center
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
