import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  activeTab: "account",
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
  },
})

export const { setActiveTab } = profileSlice.actions
export default profileSlice.reducer
