import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa"
import {
  HeroSection,
  AboutSection,
  DetailsSection,
  AddToCartSection,
  RestaurantSection,
  ReviewsSection,
  NoFoodItemFound,
} from "../components/foodItem"

const FoodItemPage = () => {
  const { state: foodItem, pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [pathname])

  if (!foodItem) {
    return <NoFoodItemFound />
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection cuisine={foodItem.cuisine} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Food Image and About Section */}
        <AboutSection
          foodItem={foodItem}
          renderStars={renderStars}
          averageRating={averageRating}
        />
        {/* Details and Add to Cart Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Details Section */}
          {/* Modern Details Section with Card Layout */}
          <DetailsSection foodItem={foodItem} />

          {/* Add to Cart Card */}
          <AddToCartSection foodItem={foodItem} />
        </div>

        {/* Restaurant Info */}
        <RestaurantSection foodItem={foodItem} renderStars={renderStars} />

        {/* Reviews Section */}
        <ReviewsSection
          foodItem={foodItem}
          renderStars={renderStars}
          averageRating={averageRating}
        />
      </div>
    </div>
  )
}

export default FoodItemPage
