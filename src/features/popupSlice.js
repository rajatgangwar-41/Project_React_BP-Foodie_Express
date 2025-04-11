import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isCartOpen: false,
  isLoginPopupOpen: false,
}

const popupSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload
    },
    setIsLoginPopupOpen: (state, action) => {
      state.isLoginPopupOpen = action.payload
    },
  },
})

export const { setIsCartOpen, setIsLoginPopupOpen } = popupSlice.actions
export default popupSlice.reducer
