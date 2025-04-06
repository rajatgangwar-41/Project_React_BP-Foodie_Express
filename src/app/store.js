import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/themeSlice"
import menuReducer from "../features/menuSlice"
import foodApi from "../features/foodApiSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
})

export default store
