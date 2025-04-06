import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filters: {
    searchQuery: "",
    priceRange: [0, 1000],
    dietary: {
      vegetarian: false,
      glutenFree: false,
      spicy: false,
    },
    rating: null,
    cuisine: [],
    dish: [],
    restaurant: [],
    tag: [],
    sortOption: "recommended",
  },
  currentPage: 1,
  windowWidth: window.innerWidth,
  isMobileFiltersOpen: false,
  filtersSection: {
    price: true,
    rating: false,
    cuisine: false,
    dish: false,
    restaurant: false,
    tag: false,
    dietary: true,
  },
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload
    },
    setIsMobileFiltersOpen: (state, action) => {
      state.isMobileFiltersOpen = action.payload
    },
    openFilterSection: (state, action) => {
      state.filtersSection[action.payload] = true
    },
    toggleFilterSection: (state, action) => {
      state.filtersSection[action.payload] =
        !state.filtersSection[action.payload]
    },
    setFilters: (state, action) => {
      const { filterType, value } = action.payload
      if (
        filterType === "priceRange" ||
        filterType === "rating" ||
        filterType === "searchQuery" ||
        filterType === "sortOption"
      ) {
        state.filters[filterType] = value
      } else if (filterType === "dietary") {
        state.filters.dietary[value] = !state.filters.dietary[value]
      } else {
        const currentValues = state.filters[filterType]
        state.filters[filterType] = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value]
      }
    },
    clearAllFilters: (state) => {
      state.filters = initialState.filters
      state.currentPage = 1
    },
  },
})

export const {
  setCurrentPage,
  setWindowWidth,
  setIsMobileFiltersOpen,
  setFilters,
  clearAllFilters,
  openFilterSection,
  toggleFilterSection,
} = menuSlice.actions

export default menuSlice.reducer
