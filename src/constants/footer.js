import {
  FiClock,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi"

export const socialLinks = [
  { icon: FiFacebook, name: "Facebook", color: "hover:bg-blue-600" },
  { icon: FiTwitter, name: "Twitter", color: "hover:bg-blue-400" },
  { icon: FiInstagram, name: "Instagram", color: "hover:bg-pink-600" },
  { icon: FiLinkedin, name: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: FiYoutube, name: "YouTube", color: "hover:bg-red-600" },
]

export const quickLinks = [
  ["About Us", "Our Services", "Testimonials", "Careers"],
  ["FAQs", "Blog", "Partners", "News"],
]

export const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "GDPR",
  "Sitemap",
]

export const contactLinks = [
  {
    icon: FiMapPin,
    content: "123 Foodie Street, Culinary District\nNew York, NY 10001, USA",
  },
  {
    icon: FiPhone,
    content: "+1 (555) 123-4567",
  },
  {
    icon: FiMail,
    content: "support@foodieexpress.com",
  },
  {
    icon: FiClock,
    content: "24/7 Customer Support",
  },
]

export const appStoreLinks = [
  {
    name: "App Store",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg",
  },
  {
    name: "Google Play",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
  },
]
