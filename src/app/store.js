import { configureStore } from "@reduxjs/toolkit"
import {
  themeReducer,
  menuReducer,
  authReducer,
  popupReducer,
  contactReducer,
  foodApi,
  authApi,
  cartApi,
} from "../features"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    auth: authReducer,
    popup: popupReducer,
    contact: contactReducer,
    [foodApi.reducerPath]: foodApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(foodApi.middleware)
      .concat(authApi.middleware)
      .concat(cartApi.middleware),
})

export default store
