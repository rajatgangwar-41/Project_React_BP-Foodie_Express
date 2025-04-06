import { useEffect } from "react"
import { motion } from "motion/react"
import { useGetFoodItemsQuery } from "../features/foodApiSlice"
import { useMenuFilters } from "../hooks/useMenuFilters"
import { useDispatch } from "react-redux"
import { setWindowWidth, setIsMobileFiltersOpen } from "../features/menuSlice"
import {
  HeroSection,
  MobileFilterToggle,
  FilterSection,
  SearchSortSection,
  ResultCountSection,
  NoItemsFoundSection,
  PaginatedItemsSection,
  PaginatedButtonsSection,
  Shimmer,
  Error,
} from "../components/menu"

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

const MenuPage = () => {
  const dispatch = useDispatch()
  const {
    data: foodItems,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetFoodItemsQuery()

  const {
    filters,
    filteredItems,
    windowWidth,
    isMobileFiltersOpen,
    currentPage,
    openFilterSections,
  } = useMenuFilters(foodItems)

  const itemsPerPage = 8

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth))
      if (window.innerWidth >= 1024) {
        dispatch(setIsMobileFiltersOpen(false))
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [dispatch])

  // Pagination logic
  const totalPages = Math.ceil(filteredItems?.length / itemsPerPage)
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        {/* Mobile filters toggle */}
        <MobileFilterToggle isMobileFiltersOpen={isMobileFiltersOpen} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <FilterSection
            filters={filters}
            isMobileFiltersOpen={isMobileFiltersOpen}
            openFilterSections={openFilterSections}
            windowWidth={windowWidth}
          />

          {/* Main content */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Search and sort bar */}
            <SearchSortSection filters={filters} itemVariants={itemVariants} />

            {/* Results count */}
            <ResultCountSection
              filters={filters}
              filteredItems={filteredItems}
            />

            {/* Menu items grid */}
            {isLoading ? (
              <Shimmer />
            ) : isError ? (
              <Error error={error} onRetry={() => refetch()} />
            ) : paginatedItems.length > 0 ? (
              <PaginatedItemsSection
                containerVariants={containerVariants}
                itemVariants={itemVariants}
                paginatedItems={paginatedItems}
                filteredItems={filteredItems}
              />
            ) : (
              <NoItemsFoundSection itemVariants={itemVariants} />
            )}

            {/* Pagination */}
            {filteredItems.length > 0 && totalPages > 1 && (
              <PaginatedButtonsSection
                itemVariants={itemVariants}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MenuPage
