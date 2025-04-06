import { motion, AnimatePresence } from "framer-motion"
import {
  FiHeart,
  FiShare2,
  FiClock,
  FiShoppingCart,
  FiPlus,
  FiMinus,
  FiX,
} from "react-icons/fi"
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useLocation } from "react-router-dom"

const FoodItemPage = () => {
  const { state: foodItem } = useLocation()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  if (!foodItem) {
    return <div className="text-center py-20">Food item not found</div>
  }

  // Calculate average rating
  const averageRating =
    foodItem.rating ||
    (
      foodItem.reviews.reduce((sum, review) => sum + review.rating, 0) /
      foodItem.reviews.length
    ).toFixed(1)

  // Render star rating
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />)
      }
    }
    return stars
  }

  // Handle add to cart
  const handleAddToCart = () => {
    toast.success(`${quantity} ${foodItem.name} added to cart!`, {
      position: "bottom-center",
      style: {
        background: "#10B981",
        color: "#fff",
      },
    })
    setIsCartOpen(true)
  }

  // Handle favorite toggle
  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast.success(
      isFavorite ? "Removed from favorites" : "Added to favorites!",
      { position: "bottom-center" }
    )
  }

  // Handle share
  const handleShare = () => {
    toast.success("Link copied to clipboard!", {
      position: "bottom-center",
    })
    // In a real app, you would implement actual sharing functionality
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 md:h-80 w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Food Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            whileHover={{ scale: 1.02 }}
          >
            {foodItem.cuisine} Delicacy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-100 max-w-md"
            whileHover={{ scale: 1.01 }}
          >
            Discover the authentic flavors
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Food Image and About Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Food Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-4">
              <img
                src={foodItem.image}
                alt={foodItem.name}
                className="w-full h-80 md:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
              {foodItem.isPopular && (
                <span className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  Popular
                </span>
              )}
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 h-full">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {foodItem.name}
                </h1>
                <span className="text-2xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  ${foodItem.price.toFixed(2)}
                </span>
              </div>

              {/* Rating & Cuisine */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(averageRating)}</div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {averageRating} ({foodItem.reviews.length})
                  </span>
                </div>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full">
                  {foodItem.cuisine}
                </span>
              </div>

              {/* Share & Save Buttons */}
              <div className="flex gap-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  <FiShare2 />
                  <span>Share</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFavorite}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  <FiHeart
                    className={isFavorite ? "text-red-500 fill-red-500" : ""}
                  />
                  <span>{isFavorite ? "Saved" : "Save"}</span>
                </motion.button>
              </div>

              {/* About the Food */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  About This Dish
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {foodItem.about}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Details and Add to Cart Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Details Section */}
          {/* Modern Details Section with Card Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-8 border border-gray-100 dark:border-gray-700">
              {/* Key Features - Minimal Badges */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 rounded-full text-sm">
                  <FiClock className="text-orange-500 text-sm" />
                  <span className="text-orange-700 dark:text-orange-300">
                    {foodItem.prepTime} mins
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm">
                  <svg
                    className="w-3.5 h-3.5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <span className="text-blue-700 dark:text-blue-300">
                    {foodItem.calories} kcal
                  </span>
                </div>
                {foodItem.dietaryInfo.vegetarian && (
                  <div className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full text-sm text-green-700 dark:text-green-300">
                    Vegetarian
                  </div>
                )}
                {foodItem.dietaryInfo.glutenFree && (
                  <div className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 rounded-full text-sm text-purple-700 dark:text-purple-300">
                    Gluten-Free
                  </div>
                )}
                {foodItem.dietaryInfo.spicy && (
                  <div className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 rounded-full text-sm text-red-700 dark:text-red-300">
                    Spicy
                  </div>
                )}
              </div>

              {/* Ingredients - Card Grid */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></span>
                  Ingredients
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {foodItem.ingredients.map((ingredient, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                        {ingredient}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Serving Suggestions - Elegant Cards */}
              {foodItem.servingSuggestions && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></span>
                    Serving Suggestions
                  </h3>
                  <div className="space-y-3">
                    {foodItem.servingSuggestions.map((suggestion, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 2 }}
                        className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {suggestion}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Add to Cart Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Order Now
              </h3>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden w-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiMinus />
                  </button>
                  <span className="flex-1 text-center text-gray-800 dark:text-white font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    Price
                  </span>
                  <span className="text-gray-800 dark:text-white">
                    ${foodItem.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    Quantity
                  </span>
                  <span className="text-gray-800 dark:text-white">
                    {quantity}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800 dark:text-white">
                    Total
                  </span>
                  <span className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    ${(foodItem.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg shadow-md font-medium text-lg"
              >
                <FiShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Restaurant Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 mb-12"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            About the Restaurant
          </h3>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-orange-500">
              <img
                src={`https://source.unsplash.com/random/100x100/?restaurant,${foodItem.cuisine}`}
                alt="Restaurant"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-gray-800 dark:text-white">
                {foodItem.restaurant}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Specializing in {foodItem.cuisine} cuisine
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex">
                  {renderStars(4.5)} {/* Assuming restaurant rating */}
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  4.5 (120 reviews)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-gray-700 mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Customer Reviews
            </h2>
            <button className="text-sm text-orange-500 font-medium hover:underline">
              View all {foodItem.reviews.length} reviews
            </button>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 dark:text-white mb-1">
                {averageRating}
              </div>
              <div className="flex justify-center mb-1">
                {renderStars(averageRating)}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {foodItem.reviews.length} reviews
              </div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = foodItem.reviews.filter(
                  (r) => Math.floor(r.rating) === star
                ).length
                const percentage = (count / foodItem.reviews.length) * 100
                return (
                  <div key={star} className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-4">
                      {star}
                    </span>
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-8 text-right">
                      {count}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Last Ordered */}
          <div className="mb-8 p-4 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 rounded-lg border border-orange-100 dark:border-gray-600">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Last Ordered:</span>{" "}
              {new Date(foodItem.lastOrdered).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              by a customer
            </p>
          </div>

          {/* Featured Reviews */}
          <div className="space-y-6">
            {foodItem.reviews.slice(0, 2).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-orange-500">
                    <img
                      src={
                        review.avatar ||
                        `https://randomuser.me/api/portraits/${
                          Math.random() > 0.5 ? "men" : "women"
                        }/${index + 10}.jpg`
                      }
                      alt={review.user}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">
                      {review.user}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            {i < review.rating ? (
                              <FaStar className="text-yellow-400 text-sm" />
                            ) : (
                              <FaRegStar className="text-yellow-400 text-sm" />
                            )}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-16">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cart Popup */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-xl z-50 p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Added to Cart
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-full"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <img
                  src={foodItem.image}
                  alt={foodItem.name}
                  className="w-20 h-20 rounded-lg object-cover border border-gray-200 dark:border-gray-600"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {foodItem.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {quantity} × ${foodItem.price.toFixed(2)}
                  </p>
                  <p className="text-orange-500 font-bold">
                    ${(foodItem.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsCartOpen(false)}
                  className="py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg font-medium"
                >
                  Continue Shopping
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg font-medium shadow-md"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FoodItemPage
