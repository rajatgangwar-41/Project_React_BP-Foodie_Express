import {
  FaShieldAlt,
  FaCookieBite,
  FaFileAlt,
  FaQuestionCircle,
  FaSitemap,
  FaUserLock,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa"
import { motion } from "framer-motion"

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
      ease: "easeOut",
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const HelpPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
              Help Center
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to your questions and learn about our policies
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Quick Help Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            Quick Help Topics
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              {
                icon: <FaQuestionCircle className="text-xl sm:text-2xl" />,
                title: "Getting Started",
                link: "##",
              },
              {
                icon: <FaFileAlt className="text-xl sm:text-2xl" />,
                title: "Orders",
                link: "#",
              },
              {
                icon: <FaShieldAlt className="text-xl sm:text-2xl" />,
                title: "Account",
                link: "#",
              },
              {
                icon: <FaCookieBite className="text-xl sm:text-2xl" />,
                title: "Payments",
                link: "#",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                href={item.link}
                className="bg-orange-50 hover:bg-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center text-center transition-all duration-300 border border-orange-100 shadow-sm hover:shadow-md"
              >
                <div className="bg-orange-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4 text-orange-600">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-orange-500 mt-2 text-sm font-medium">
                  View details →
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Policy Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center"
          >
            Our Policies & Information
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <FaShieldAlt className="text-lg sm:text-xl" />,
                title: "Privacy Policy",
                description:
                  "Learn how we collect, use, and protect your personal information.",
                link: "#",
              },
              {
                icon: <FaFileAlt className="text-lg sm:text-xl" />,
                title: "Terms of Service",
                description:
                  "Understand the terms governing your use of our services and website.",
                link: "#",
              },
              {
                icon: <FaCookieBite className="text-lg sm:text-xl" />,
                title: "Cookie Policy",
                description:
                  "Discover how we use cookies to enhance your browsing experience.",
                link: "#",
              },
              {
                icon: <FaUserLock className="text-lg sm:text-xl" />,
                title: "GDPR Compliance",
                description:
                  "Information about our compliance with EU data protection regulations.",
                link: "#",
              },
              {
                icon: <FaSitemap className="text-lg sm:text-xl" />,
                title: "Sitemap",
                description:
                  "Navigate our website structure and find what you're looking for.",
                link: "#",
              },
              {
                icon: <FaQuestionCircle className="text-lg sm:text-xl" />,
                title: "Contact Support",
                description:
                  "Can't find what you need? Our support team is here to help.",
                link: "#contact",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 sm:p-6 flex items-center border-b border-gray-100">
                  <div className="bg-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 shadow-sm">
                    <div className="text-orange-500">{item.icon}</div>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center group text-sm sm:text-base"
                  >
                    Read More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-8"
          id="faq"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <FaQuestionCircle className="mr-3" />
                Common Questions
              </h3>
            </div>
            <motion.div
              variants={containerVariants}
              className="divide-y divide-gray-100"
            >
              {[
                {
                  question: "How do I make a reservation?",
                  answer:
                    "You can make reservations through our website, mobile app, or by calling our restaurant directly.",
                },
                {
                  question: "What are your delivery hours?",
                  answer:
                    "We deliver from 11:00 AM to 10:00 PM daily, with extended hours until 11:00 PM on weekends.",
                },
                {
                  question: "Do you offer gluten-free options?",
                  answer:
                    "Yes, we have a dedicated gluten-free menu. Please inform your server about any dietary restrictions.",
                },
                {
                  question: "How can I modify or cancel my order?",
                  answer:
                    "Orders can be modified or canceled within 15 minutes of placement through your account or by calling us.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, Apple Pay, Google Pay, and cash for in-person orders.",
                },
              ].map((item, index) => (
                <motion.details
                  key={index}
                  variants={itemVariants}
                  className="group p-4 sm:p-6 hover:bg-orange-50 transition-colors duration-200"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-orange-600">
                      {item.question}
                    </h3>
                    <span className="text-orange-500 text-sm group-open:rotate-180 transition-transform duration-200">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm sm:text-base">
                    {item.answer}
                  </p>
                </motion.details>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HelpPage
