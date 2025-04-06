import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000", // Your json-server URL
  }),
  endpoints: (builder) => ({
    // Get all food items
    getFoodItems: builder.query({
      query: () => "/foodItems",
      transformResponse: (response) => {
        // Optional: transform the response data
        // return response.reverse() // Newest items first
        return response // Newest items first
      },
      // Optional: providesTags if you'll add caching later
      providesTags: ["FoodItems"],
    }),

    // Get single food item by ID
    getFoodItemById: builder.query({
      query: (id) => `/foodItems/${id}`,
      // Optional: providesTags if you'll add caching later
      providesTags: (result, error, id) => [{ type: "FoodItems", id }],
    }),
  }),
})

// Export only the query hooks you need
export const { useGetFoodItemsQuery, useGetFoodItemByIdQuery } = foodApi
export default foodApi
