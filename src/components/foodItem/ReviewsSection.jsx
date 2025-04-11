import { motion } from "motion/react"
import { useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"

const ReviewsSection = ({ foodItem, averageRating, renderStars }) => {
  const [reviewCount, setReviewCount] = useState(2)
  return (
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
        <button
          onClick={() => setReviewCount(foodItem.reviews.length)}
          className="text-sm text-orange-500 font-medium hover:underline"
        >
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
        {foodItem.reviews.slice(0, reviewCount).map((review, index) => (
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
  )
}

export default ReviewsSection
