// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   items: [],
//   isOpen: false,
// }

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setIsCartOpen: (state, action) => {
//       state.isOpen = action.payload
//     },

//     addItem: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       )
//       if (existingItem) {
//         existingItem.quantity += 1
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 })
//       }
//     },

//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload)
//     },

//     increaseQuantity: (state, action) => {
//       const item = state.items.find((item) => item.id === action.payload)
//       if (item) item.quantity += 1
//     },

//     decreaseQuantity: (state, action) => {
//       const item = state.items.find((item) => item.id === action.payload)
//       if (item && item.quantity > 1) item.quantity -= 1
//     },

//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload
//       const item = state.items.find((item) => item.id === id)
//       if (item) {
//         if (quantity < 1) {
//           state.items = state.items.filter((i) => i.id !== id)
//         } else {
//           item.quantity = quantity
//         }
//       }
//     },

//     clearCart: (state) => {
//       state.items = []
//     },
//   },
// })

// // Export actions
// export const {
//   setIsCartOpen,
//   addItem,
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity,
//   updateQuantity,
//   clearCart,
// } = cartSlice.actions

// export default cartSlice.reducer

// features/cart/cartSlice.js
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
