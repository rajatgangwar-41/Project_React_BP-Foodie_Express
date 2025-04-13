import { createSlice } from "@reduxjs/toolkit"

const MAX_DELIVERY_FEE = 50
const MIN_DELIVERY_FEE = 10
const MAX_TAX_FEE = 20
const MIN_TAX_FEE = 10

const getInitialState = () => {
  const deliveryFee = Math.floor(
    Math.random() * (MAX_DELIVERY_FEE - MIN_DELIVERY_FEE) + MIN_DELIVERY_FEE
  )
  const tax = parseFloat(
    (Math.random() * (MAX_TAX_FEE - MIN_TAX_FEE) + MIN_TAX_FEE).toFixed(2)
  )

  return {
    items: [],
    subTotal: 0,
    deliveryFee,
    originalDeliveryFee: deliveryFee,
    discount: 0,
    couponCode: "",
    tax,
    total: 0,
  }
}

const orderSlice = createSlice({
  name: "order",
  initialState: getInitialState(),
  reducers: {
    setDiscount: (state, action) => {
      state.couponCode = action.payload.code
      state.discount = action.payload.discount

      if (action.payload.freeDelivery) {
        state.deliveryFee = 0
      } else if (action.payload.code === "") {
        state.deliveryFee = state.originalDeliveryFee
      }

      state.total =
        state.subTotal + state.deliveryFee + state.tax - state.discount
    },
    updateOrder: (state, action) => {
      const subTotal = action.payload?.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      state.items = action.payload
      state.subTotal = subTotal
      state.total = subTotal + state.deliveryFee + state.tax - state.discount
    },
    resetOrder: () => getInitialState(),
  },
})

export const { setDiscount, updateOrder, resetOrder } = orderSlice.actions

export default orderSlice.reducer
