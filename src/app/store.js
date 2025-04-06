import { configureStore } from "@reduxjs/toolkit"
import { themeReducer, menuReducer, contactReducer, foodApi } from "../features"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    contact: contactReducer,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})

export default store
