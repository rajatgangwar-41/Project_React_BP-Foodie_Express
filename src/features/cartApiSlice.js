import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cartApi = createApi({
  reducerPath: "cartApi",
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
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCartItems: builder.query({
      query: (id) => `/users/${id}`,
      transformResponse: (response) => response || { cart: [] },
      providesTags: (result, _error, id) => [{ type: "Cart", id }],
    }),

    // Add New item
    addItem: builder.mutation({
      query: ({ id, cartItems }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { cart: [...cartItems] },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Cart", id }],
      async onQueryStarted(
        { id, item, quantity },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", id, (draft) => {
            draft.cart.unshift({ ...item, quantity })
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),

    // Remove item completely
    removeItem: builder.mutation({
      query: ({ id, cartItems }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { cart: [...cartItems] },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Cart", id }],
      async onQueryStarted({ id, item }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", id, (draft) => {
            const itemIndex = draft.cart.findIndex((ele) => ele.id === item.id)
            draft.cart.splice(itemIndex, 1)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),

    // Increase item quantity
    increaseQuantity: builder.mutation({
      query: ({ id, cartItems }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { cart: [...cartItems] },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Cart", id }],
      async onQueryStarted(
        { id, item, quantity },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", id, (draft) => {
            const itemIndex = draft.cart.findIndex((ele) => ele.id === item.id)
            draft.cart[itemIndex] = {
              ...item,
              quantity: item.quantity + quantity,
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),

    // Decrease item quantity
    decreaseQuantity: builder.mutation({
      query: ({ id, cartItems }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { cart: [...cartItems] },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Cart", id }],
      async onQueryStarted({ id, item }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", id, (draft) => {
            const itemIndex = draft.cart.findIndex((ele) => ele.id === item.id)
            draft.cart[itemIndex] = {
              ...draft.cart[itemIndex],
              quantity: item.quantity - 1,
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),

    // Clear entire cart
    clearCart: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { cart: [] },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Cart", id }],
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCartItems", id, (draft) => {
            draft.cart = []
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetCartItemsQuery,
  useAddItemMutation,
  useRemoveItemMutation,
  useIncreaseQuantityMutation,
  useDecreaseQuantityMutation,
  useClearCartMutation,
} = cartApi

export default cartApi
