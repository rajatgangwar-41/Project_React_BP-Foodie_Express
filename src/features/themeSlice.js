import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  mode: localStorage.getItem("theme") || "light",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
      localStorage.setItem("theme", state.mode)
      document.documentElement.classList.toggle("dark", state.mode === "dark")
    },
    setTheme: (state, action) => {
      state.mode = action.payload
      localStorage.setItem("theme", state.mode)
      document.documentElement.classList.toggle("dark", state.mode === "dark")
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
