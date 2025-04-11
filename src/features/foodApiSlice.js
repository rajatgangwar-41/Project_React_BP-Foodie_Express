import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rajatgangwar-foodieexpress.onrender.com",
  }),
  endpoints: (builder) => ({
    // Food Items
    getFoodItems: builder.query({
      query: () => "/foodItems",
    }),
  }),
})

export const { useGetFoodItemsQuery } = foodApi

export default foodApi
