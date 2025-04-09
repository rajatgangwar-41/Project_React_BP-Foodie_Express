import { createSlice } from "@reduxjs/toolkit"

const loadInitialState = () => {
  const token = localStorage.getItem("token")
  const user = JSON.parse(localStorage.getItem("user"))
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
    logout: (state) => {
      state.user = null
      state.token = null
      state.status = "idle"
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
