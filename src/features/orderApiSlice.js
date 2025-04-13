import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rajatgangwar-foodieexpress.onrender.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    // Order Food
    orderFood: builder.mutation({
      query: ({ id, orders }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { orders: [...orders] },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Orders", id }],
    }),
  }),
})

export const { useOrderFoodMutation } = orderApi

export default orderApi
