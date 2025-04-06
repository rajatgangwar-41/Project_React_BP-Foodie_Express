import {
  FaCheckCircle,
  FaHamburger,
  FaShoppingBag,
  FaUtensils,
} from "react-icons/fa"
import { review, restaurant, foodItem } from "../assets/stats"

export const platformStats = [
  {
    icon: FaShoppingBag,
    value: "10,000+",
    label: "Registered Orders",
    color: "teal",
  },
  {
    icon: FaCheckCircle,
    value: "8,500+",
    label: "Orders Delivered",
    color: "blue",
  },
  {
    icon: FaUtensils,
    value: "100+",
    label: "Restaurant Partners",
    color: "amber",
  },
  {
    icon: FaHamburger,
    value: "5,000+",
    label: "Food Items",
    color: "purple",
  },
]

export const stats = [
  {
    icon: review,
    value: "4.9",
    label: "8.4k Reviews",
  },
  {
    icon: restaurant,
    value: "100+",
    label: "Restaurants",
  },
  {
    icon: foodItem,
    value: "5000+",
    label: "Food Items",
  },
]
