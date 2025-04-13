import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const generateId = (id, email) => `${id}-${btoa(email)}-${Date.now()}`

const authApi = createApi({
  reducerPath: "authApi",
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
  endpoints: (builder) => ({
    // Auth
    signup: builder.mutation({
      queryFn: async (userData, _api, _extraOptions, baseQuery) => {
        try {
          const usersResponse = await baseQuery({
            url: "/users",
            headers: { "Content-Type": "application/json" },
          })
          const users = usersResponse.data || []

          const usernameExists = users.some(
            (u) => u.username === userData.username
          )
          const emailExists = users.some((u) => u.email === userData.email)

          if (usernameExists || emailExists) {
            return {
              error: {
                status: 400,
                data: {
                  message: "User already exists",
                  conflicts: {
                    username: usernameExists,
                    email: emailExists,
                  },
                },
              },
            }
          }

          const newUser = {
            ...userData,
            userId: generateId("user-id", userData.email),
            token: generateId("token", userData.email),
            cart: [],
            favorites: [],
            orders: [],
          }

          const response = await baseQuery({
            url: "/users",
            method: "POST",
            body: newUser,
            headers: { "Content-Type": "application/json" },
          })

          return { data: response.data }
        } catch (error) {
          return {
            error: {
              status: 500,
              data: {
                message: "Signup failed",
                details: error.message,
              },
            },
          }
        }
      },
    }),
    login: builder.mutation({
      queryFn: async (credentials, _api, _extraOptions, baseQuery) => {
        try {
          const usersResponse = await baseQuery({
            url: "/users",
            headers: { "Content-Type": "application/json" },
          })
          const users = usersResponse.data || []

          const user = users.find(
            (u) =>
              (u.email === credentials.usernameOrEmail ||
                u.username === credentials.usernameOrEmail) &&
              u.password === credentials.password
          )

          if (!user) {
            return {
              error: {
                status: 401,
                data: {
                  message: "Invalid credentials",
                },
              },
            }
          }

          // Generate a new token on login (optional)
          const updatedUser = {
            ...user,
            token: generateId("token", user.email),
          }

          // Update the user with new token (if you want to persist it)
          const response = await baseQuery({
            url: `/users/${user.id}`,
            method: "PUT",
            body: updatedUser,
            headers: { "Content-Type": "application/json" },
          })

          return { data: response.data }
        } catch (error) {
          return {
            error: {
              status: 500,
              data: {
                message: "Login failed",
                details: error.message,
              },
            },
          }
        }
      },
    }),

    updateUser: builder.mutation({
      query: ({ id, userData }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: userData,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useSignupMutation,
  useLoginMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = authApi

export default authApi
