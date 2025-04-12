import { createSlice } from "@reduxjs/toolkit"

const loadInitialState = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {}
  const token = localStorage.getItem("token")
  return { user, token, status: token ? "authenticated" : "idle" }
}

const authSlice = createSlice({
  name: "auth",
  initialState: loadInitialState(),
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.status = "authenticated"
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("user", JSON.stringify(action.payload.user))
    },
    updateCredentials: (state, action) => {
      state.user = action.payload.user
      localStorage.setItem("user", JSON.stringify(action.payload.user))
    },
    logout: (state) => {
      state.user = {}
      state.token = ""
      state.status = "idle"
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    },
  },
})

export const { setCredentials, updateCredentials, logout } = authSlice.actions
export default authSlice.reducer
