import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const generateMockToken = (email) => `mock-token-${btoa(email)}-${Date.now()}`

const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000",
    baseUrl: "https://rajatgangwar-foodieexpress.onrender.com",
  }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => "/foodItems",
      transformResponse: (response) => {
        return response
      },
      // providesTags: ["FoodItems"],
    }),

    // getFoodItemById: builder.query({
    //   query: (id) => `/foodItems/${id}`,
    //   providesTags: (result, error, id) => [{ type: "FoodItems", id }],
    // }),

    // signup: builder.mutation({
    //   queryFn: async (userData, _api, _extraOptions, baseQuery) => {
    //     const usersResponse = await baseQuery({
    //       url: "/users",
    //       headers: { "Content-Type": "application/json" },
    //     })
    //     const users = usersResponse.data || []

    //     const usernameExists = users.some(
    //       (u) => u.username === userData.username
    //     )
    //     const emailExists = users.some((u) => u.email === userData.email)

    //     if (usernameExists || emailExists) {
    //       return {
    //         error: {
    //           status: 400,
    //           data: {
    //             message: "User already exists",
    //             conflicts: {
    //               username: usernameExists,
    //               email: emailExists,
    //             },
    //           },
    //         },
    //       }
    //     }

    //     const newUser = {
    //       ...userData,
    //       id: Math.random().toString(36).substring(2, 9),
    //       token: generateMockToken(userData.email),
    //     }

    //     await baseQuery({
    //       url: "/users",
    //       method: "POST",
    //       body: newUser,
    //       headers: { "Content-Type": "application/json" },
    //     })

    //     return { data: newUser }
    //   },
    // }),

    signup: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }),
      // async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
      //   try {
      //     const { data: newUser } = await queryFulfilled
      //     // Optimistic update or other side effects upon successful signup
      //     dispatch()
      //     // Assuming you have a way to add the new user to a local cache if needed
      //     // foodApi.endpoints.getUsers.initiate(),
      //     // dispatch(
      //     //   setCredentials({
      //     //     user: newUser,
      //     //     token: newUser.token,
      //     //   })
      //     // )
      //   } catch (error) {
      //     // Handle errors here (though your component's `useSignupMutation` handles the error response)
      //   }
      // },
      transformResponse: (response, meta, arg) => {
        // Mock the token generation on the client-side after successful creation
        return { ...response, token: generateMockToken(arg.email) }
      },
    }),
  }),
})

export const {
  useGetFoodItemsQuery,
  useGetFoodItemByIdQuery,
  useSignupMutation,
} = foodApi
export default foodApi
