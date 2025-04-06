import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaHeadset,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"
import { MdDeliveryDining } from "react-icons/md"

export const reachOut = [
  {
    icon: MdDeliveryDining,
    className: "text-orange-600 dark:text-orange-400 text-xl sm:text-2xl",
    title: "Order Assistance",
    text: "Need help with your order? We'll guide you through the process.",
  },
  {
    icon: FaClock,
    className: "text-orange-600 dark:text-orange-400 text-xl sm:text-2xl",
    title: "Quick Response",
    text: "We typically respond within 2 hours during business hours.",
  },
  {
    icon: FaLeaf,
    className: "text-orange-600 dark:text-orange-400 text-xl sm:text-2xl",
    title: "Special Requests",
    text: "Allergies? Dietary needs? We'll accommodate your requirements.",
  },
  {
    icon: FaHeadset,
    className: "text-orange-600 dark:text-orange-400 text-xl sm:text-2xl",
    title: "24/7 Support",
    text: "Our customer care team is always ready to help you anytime.",
  },
]

export const contactInfo = [
  {
    icon: FaPhone,
    className: "text-orange-600 dark:text-orange-400 text-lg sm:text-xl",
    title: "Call Us",
    text: "+91-1234567890",
  },
  {
    icon: FaWhatsapp,
    className: "text-orange-600 dark:text-orange-400 text-lg sm:text-xl",
    title: "WhatsApp",
    text: "+91-1234567890",
  },
  {
    icon: MdDeliveryDining,
    className: "text-orange-600 dark:text-orange-400 text-lg sm:text-xl",
    title: "Delivery Hotline",
    text: "+91-1234567890",
  },
  {
    icon: FaEnvelope,
    className: "text-orange-600 dark:text-orange-400 text-lg sm:text-xl",
    title: "Email Us",
    text: "contact@foodieexpress.com",
  },
]

export const socialMedia = [
  {
    icon: FaFacebook,
    className: "text-2xl sm:text-3xl",
    label: "Facebook",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: FaTwitter,
    className: "text-2xl sm:text-3xl",
    label: "Twitter",
    color: "text-sky-500 dark:text-sky-400",
  },
  {
    icon: FaInstagram,
    className: "text-2xl sm:text-3xl",
    label: "Instagram",
    color: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: FaLinkedin,
    className: "text-2xl sm:text-3xl",
    label: "LinkedIn",
    color: "text-blue-700 dark:text-blue-500",
  },
  {
    icon: FaYoutube,
    className: "text-2xl sm:text-3xl",
    label: "YouTube",
    color: "text-red-600 dark:text-red-500",
  },
]
