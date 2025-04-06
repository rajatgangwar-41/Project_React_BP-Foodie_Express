import React from "react"
import { motion, AnimatePresence } from "motion/react"
import { useDispatch } from "react-redux"
import {
  clearAllFilters,
  setFilters,
  setIsMobileFiltersOpen,
  toggleFilterSection,
} from "../../features/menuSlice"
import { MdOutlineClear, MdOutlineLocalOffer } from "react-icons/md"
import { FaRupeeSign, FaLeaf, FaPepperHot } from "react-icons/fa"
import {
  FiChevronDown,
  FiChevronUp,
  FiStar,
  FiHeart,
  FiAlertCircle,
} from "react-icons/fi"
import { Range } from "react-range"
import { BiDish } from "react-icons/bi"
import { cuisines, dishes, restaurants, tags } from "../../constants/foodItems"
import { IoFastFoodOutline, IoRestaurantOutline } from "react-icons/io5"

const FilterSection = ({
  filters,
  isMobileFiltersOpen,
  openFilterSections,
  windowWidth,
}) => {
  const dispatch = useDispatch()

  return (
    <AnimatePresence>
      {(isMobileFiltersOpen || windowWidth >= 1024) && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`lg:w-80 flex-shrink-0 ${
            isMobileFiltersOpen
              ? "inset-0 z-50 bg-white dark:bg-gray-800 lg:static lg:bg-transparent overflow-y-auto"
              : ""
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 lg:sticky lg:top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Filters
              </h2>
              <button
                onClick={() => dispatch(clearAllFilters())}
                className="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
              >
                <MdOutlineClear className="h-5 w-5" />
                Clear all
              </button>
            </div>

            {/* Price range filter */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("price"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <FaRupeeSign className="h-5 w-5 text-orange-500" />
                  Price range
                </h3>
                {openFilterSections.price ? <FiChevronUp /> : <FiChevronDown />}
              </div>

              {openFilterSections.price && (
                <div className="pl-7">
                  <Range
                    step={10}
                    min={0}
                    max={1000}
                    values={filters.priceRange}
                    onChange={(values) =>
                      dispatch(
                        setFilters({
                          filterType: "priceRange",
                          value: values,
                        })
                      )
                    }
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="h-1.5 w-full bg-gray-200 dark:bg-gray-600 rounded-full"
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => {
                      const { key, ...restProps } = props
                      return (
                        <div
                          key={key}
                          {...restProps}
                          className="h-5 w-5 bg-orange-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      )
                    }}
                  />
                  <div className="flex justify-between mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>₹{filters.priceRange[0]}</span>
                    <span>₹{filters.priceRange[1]}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Dietary Preferences Filter */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("dietary"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <FiHeart className="h-5 w-5 text-pink-500" />
                  Dietary Preferences
                </h3>
                {openFilterSections.dietary ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </div>

              {openFilterSections.dietary && (
                <div className="pl-7 space-y-3">
                  {/* Vegetarian Filter */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaLeaf className="h-5 w-5 mr-3 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Vegetarian
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          setFilters({
                            filterType: "dietary",
                            value: "vegetarian",
                          })
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        filters.dietary.vegetarian
                          ? "bg-green-500"
                          : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          filters.dietary.vegetarian
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Gluten Free Filter */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FiAlertCircle className="h-5 w-5 mr-3 text-blue-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Gluten Free
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          setFilters({
                            filterType: "dietary",
                            value: "glutenFree",
                          })
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        filters.dietary.glutenFree
                          ? "bg-blue-500"
                          : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          filters.dietary.glutenFree
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Spicy Filter */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaPepperHot className="h-5 w-5 mr-3 text-red-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Spicy
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          setFilters({
                            filterType: "dietary",
                            value: "spicy",
                          })
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        filters.dietary.spicy
                          ? "bg-red-500"
                          : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          filters.dietary.spicy
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Rating filter */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("rating"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <FiStar className="h-5 w-5 text-yellow-500" />
                  Rating
                </h3>
                {openFilterSections.rating ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </div>

              {openFilterSections.rating && (
                <div className="pl-7 space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() =>
                          dispatch(
                            setFilters({
                              filterType: "rating",
                              value: rating,
                            })
                          )
                        }
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="ml-3 text-sm text-gray-700 dark:text-gray-300 flex items-center"
                      >
                        {rating}+ stars
                        <div className="flex ml-1">
                          {[...Array(rating)].map((_, i) => (
                            <FiStar
                              key={i}
                              className="h-4 w-4 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="rating-none"
                      name="rating"
                      checked={filters.rating === null}
                      onChange={() =>
                        dispatch(
                          setFilters({
                            filterType: "rating",
                            value: null,
                          })
                        )
                      }
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600"
                    />
                    <label
                      htmlFor="rating-none"
                      className="ml-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      Any rating
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Cuisine filter */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("cuisine"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <BiDish className="h-5 w-5 text-green-500" />
                  Cuisine
                </h3>
                {openFilterSections.cuisine ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </div>

              {openFilterSections.cuisine && (
                <div className="pl-7 space-y-2">
                  {cuisines.map((cuisine) => (
                    <div key={cuisine} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`cuisine-${cuisine}`}
                        checked={filters.cuisine.includes(cuisine)}
                        onChange={() =>
                          dispatch(
                            setFilters({
                              filterType: "cuisine",
                              value: cuisine,
                            })
                          )
                        }
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label
                        htmlFor={`cuisine-${cuisine}`}
                        className="ml-3 text-sm text-gray-700 dark:text-gray-300 capitalize"
                      >
                        {cuisine.toLowerCase()}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dish type filter */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("dish"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <IoFastFoodOutline className="h-5 w-5 text-green-500" />
                  Dish
                </h3>
                {openFilterSections.dish ? <FiChevronUp /> : <FiChevronDown />}
              </div>

              {openFilterSections.dish && (
                <div className="pl-7 space-y-2">
                  {dishes.map((type) => (
                    <div key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`type-${type}`}
                        checked={filters.dish.includes(type)}
                        onChange={() =>
                          dispatch(
                            setFilters({
                              filterType: "dish",
                              value: type,
                            })
                          )
                        }
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="ml-3 text-sm text-gray-700 dark:text-gray-300 capitalize"
                      >
                        {type?.toLowerCase()}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Restaurant filter */}
            <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("restaurant"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <IoRestaurantOutline className="h-5 w-5 text-blue-500" />
                  Restaurant
                </h3>
                {openFilterSections.restaurant ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </div>

              {openFilterSections.restaurant && (
                <div className="pl-7 space-y-2">
                  {restaurants.map((restaurant) => (
                    <div key={restaurant} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`restaurant-${restaurant}`}
                        checked={filters.restaurant.includes(restaurant)}
                        onChange={() =>
                          dispatch(
                            setFilters({
                              filterType: "restaurant",
                              value: restaurant,
                            })
                          )
                        }
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 dark:border-gray-600 rounded"
                      />
                      <label
                        htmlFor={`restaurant-${restaurant}`}
                        className="ml-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {restaurant}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tags filter */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => dispatch(toggleFilterSection("tag"))}
              >
                <h3 className="text-base font-medium text-gray-800 dark:text-white flex items-center gap-2">
                  <MdOutlineLocalOffer className="h-5 w-5 text-purple-500" />
                  Tags
                </h3>
                {openFilterSections.tag ? <FiChevronUp /> : <FiChevronDown />}
              </div>

              {openFilterSections.tag && (
                <div className="pl-7">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() =>
                          dispatch(
                            setFilters({
                              filterType: "tag",
                              value: tag,
                            })
                          )
                        }
                        className={`px-3 py-1 text-xs rounded-full ${
                          filters.tag.includes(tag)
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Apply button for mobile */}
            {isMobileFiltersOpen && (
              <button
                onClick={() => dispatch(setIsMobileFiltersOpen(false))}
                className="lg:hidden w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
              >
                Apply Filters
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FilterSection
