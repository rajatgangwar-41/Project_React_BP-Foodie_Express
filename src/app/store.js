import { configureStore } from "@reduxjs/toolkit"
import {
  themeReducer,
  menuReducer,
  authReducer,
  popupReducer,
  contactReducer,
  profileReducer,
  orderReducer,
  foodApi,
  authApi,
  cartApi,
  orderApi,
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
    order: orderReducer,
    [foodApi.reducerPath]: foodApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(foodApi.middleware)
      .concat(authApi.middleware)
      .concat(cartApi.middleware)
      .concat(orderApi.middleware)
      .concat(favoritesApi.middleware),
})

export default store
