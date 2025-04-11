import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rajatgangwar-foodieexpress.onrender.com",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    /* ----------------- QUERIES ----------------- */

    // Get cart by ID
    getCartItems: builder.query({
      query: (cartId) => `/carts/${cartId}`,
      providesTags: (result, _error, cartId) =>
        result ? [{ type: "Cart", id: cartId }] : ["Cart"],
      transformResponse: (response) => {
        return response || { id: null, items: [] }
      },
    }),

    /* ----------------- MUTATIONS ----------------- */

    // Create new cart or add item to existing cart
    upsertCartItem: builder.mutation({
      query: ({ cartId, product }) => ({
        url: cartId ? `/carts/${cartId}/items` : "/carts",
        method: "POST",
        body: cartId ? product : { id: `cart-${Date.now()}`, items: [product] },
      }),
      async onQueryStarted({ cartId, product }, { dispatch, queryFulfilled }) {
        const item = {
          ...product,
          id: `temp-${Date.now()}`,
          quantity: product.quantity || 1,
        }

        const patchResult = dispatch(
          cartApi.util.updateQueryData(
            "getCart",
            cartId || "NEW_CART",
            (draft) => {
              if (!draft.id) draft.id = `temp-${Date.now()}`

              const existingItem = draft.items.find(
                (i) => i.productId === product.id
              )
              existingItem
                ? (existingItem.quantity += item.quantity)
                : draft.items.push(item)
            }
          )
        )

        try {
          const { data } = await queryFulfilled
          dispatch(cartApi.util.updateQueryData("getCart", data.id, () => data))
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result) => [{ type: "Cart", id: result?.id }],
    }),

    // Increase item quantity
    increaseQuantity: builder.mutation({
      query: ({ cartId, itemId }) => ({
        url: `/carts/${cartId}/items/${itemId}/increase`,
        method: "PATCH",
      }),
      async onQueryStarted({ cartId, itemId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCart", cartId, (draft) => {
            const item = draft.items.find((i) => i.id === itemId)
            if (item) item.quantity += 1
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { cartId }) => [
        { type: "Cart", id: cartId },
      ],
    }),

    // Decrease item quantity (removes if quantity reaches 0)
    decreaseQuantity: builder.mutation({
      query: ({ cartId, itemId }) => ({
        url: `/carts/${cartId}/items/${itemId}/decrease`,
        method: "PATCH",
      }),
      async onQueryStarted({ cartId, itemId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCart", cartId, (draft) => {
            const index = draft.items.findIndex((i) => i.id === itemId)
            if (index !== -1) {
              draft.items[index].quantity > 1
                ? (draft.items[index].quantity -= 1)
                : draft.items.splice(index, 1)
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { cartId }) => [
        { type: "Cart", id: cartId },
      ],
    }),

    // Remove item completely
    removeItem: builder.mutation({
      query: ({ cartId, itemId }) => ({
        url: `/carts/${cartId}/items/${itemId}`,
        method: "DELETE",
      }),
      async onQueryStarted({ cartId, itemId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCart", cartId, (draft) => {
            draft.items = draft.items.filter((i) => i.id !== itemId)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, { cartId }) => [
        { type: "Cart", id: cartId },
      ],
    }),

    // Clear entire cart
    clearCart: builder.mutation({
      query: (cartId) => ({
        url: `/carts/${cartId}/clear`,
        method: "PATCH",
        body: { items: [] },
      }),
      async onQueryStarted(cartId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          cartApi.util.updateQueryData("getCart", cartId, (draft) => {
            draft.items = []
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (result, error, cartId) => [
        { type: "Cart", id: cartId },
      ],
    }),
  }),
})

// Export hooks for usage in components
export const {
  useGetCartItemsQuery,
  useUpsertCartItemMutation,
  useIncreaseQuantityMutation,
  useDecreaseQuantityMutation,
  useRemoveItemMutation,
  useClearCartMutation,
} = cartApi

export default cartApi
