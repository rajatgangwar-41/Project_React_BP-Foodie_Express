import { configureStore } from "@reduxjs/toolkit"
import {
  themeReducer,
  menuReducer,
  authReducer,
  popupReducer,
  contactReducer,
  profileReducer,
  foodApi,
  authApi,
  cartApi,
  favoritesApi,
} from "../features"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    auth: authReducer,
    popup: popupReducer,
    contact: contactReducer,
    profile: profileReducer,
    [foodApi.reducerPath]: foodApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(foodApi.middleware)
      .concat(authApi.middleware)
      .concat(cartApi.middleware)
      .concat(favoritesApi.middleware),
})

export default store
