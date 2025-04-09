import { configureStore } from "@reduxjs/toolkit"
import {
  themeReducer,
  menuReducer,
  contactReducer,
  authReducer,
  foodApi,
} from "../features"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    contact: contactReducer,
    auth: authReducer,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})

export default store
