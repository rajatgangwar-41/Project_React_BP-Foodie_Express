import { useMemo } from "react"
import { shallowEqual, useSelector } from "react-redux"

export const useMenuFilters = (foodItems) => {
  const {
    filters,
    currentPage,
    windowWidth,
    isMobileFiltersOpen,
    filtersSection,
  } = useSelector((state) => state.menu, shallowEqual)

  const filteredItems = useMemo(() => {
    if (!foodItems) return []

    let results = [...foodItems]

    // Search filter
    if (filters.searchQuery) {
      results = results.filter(
        (item) =>
          item.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          item.restaurant
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          item.cuisine
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase()) ||
          item.tags?.some((tag) =>
            tag.toLowerCase().includes(filters.searchQuery.toLowerCase())
          )
      )
    }

    // Price filter
    results = results.filter(
      (item) =>
        item.price >= filters.priceRange[0] &&
        item.price <= filters.priceRange[1]
    )

    // Rating filter
    if (filters.rating) {
      results = results.filter((item) => item.rating >= filters.rating)
    }

    // Cuisine filter
    if (filters.cuisine.length > 0) {
      results = results.filter((item) => filters.cuisine.includes(item.cuisine))
    }

    // Dish type filter
    if (filters.dish.length > 0) {
      results = results.filter((item) => filters.dish.includes(item.type))
    }

    // Restaurant filter
    if (filters.restaurant.length > 0) {
      results = results.filter((item) =>
        filters.restaurant.includes(item.restaurant)
      )
    }

    // Tags filter
    if (filters.tag.length > 0) {
      results = results.filter((item) =>
        filters.tag.some((tag) => item.tags?.includes(tag))
      )
    }

    // Dietary filters
    if (filters.dietary.vegetarian) {
      results = results.filter((item) => item.dietaryInfo?.vegetarian)
    }
    if (filters.dietary.glutenFree) {
      results = results.filter((item) => item.dietaryInfo?.glutenFree)
    }
    if (filters.dietary.spicy) {
      results = results.filter((item) => item.dietaryInfo?.spicy)
    }

    // Sorting
    switch (filters.sortOption) {
      case "price-asc":
        results.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        results.sort((a, b) => b.price - a.price)
        break
      case "rating":
        results.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Recommended (default sorting)
        break
    }

    return results
  }, [foodItems, filters])

  return {
    filters,
    filteredItems,
    windowWidth,
    isMobileFiltersOpen,
    currentPage,
    filtersSection,
  }
}
