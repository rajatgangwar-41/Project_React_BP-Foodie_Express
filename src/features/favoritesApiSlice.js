import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const favoritesApi = createApi({
  reducerPath: "favoritesApi",
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
  tagTypes: ["favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: (id) => `/users/${id}`,
      transformResponse: (response) => response || { favorites: [] },
      providesTags: (result, _error, id) => [{ type: "favorites", id }],
    }),

    updateFavorites: builder.mutation({
      query: ({ id, favorites }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: { favorites },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "favorites", id }],
      async onQueryStarted({ id, item }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          favoritesApi.util.updateQueryData("getFavorites", id, (draft) => {
            if (draft.favorites.some((food) => food.id === item.id)) {
              const itemIndex = draft.favorites.findIndex(
                (ele) => ele.id === item.id
              )
              draft.favorites.splice(itemIndex, 1)
            } else {
              draft.favorites.unshift(item)
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
  }),
})

export const { useGetFavoritesQuery, useUpdateFavoritesMutation } = favoritesApi

export default favoritesApi
