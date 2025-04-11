import { useSelector } from "react-redux"
import {
  useClearCartMutation,
  useGetCartItemsQuery,
  useRemoveItemMutation,
  useIncreaseQuantityMutation,
  useDecreaseQuantityMutation,
} from "../features/cartApiSlice"

const MAX_DELIVERY_FEE = 50
const MIN_DELIVERY_FEE = 10

const usePopup = () => {
  const { isCartOpen, isLoginPopupOpen } = useSelector((state) => state.popup)
  const { data: items, isLoading, isError, error } = useGetCartItemsQuery()
  const [clearCart] = useClearCartMutation()
  const [removeItem] = useRemoveItemMutation()
  const [increaseQuantity] = useIncreaseQuantityMutation()
  const [decreaseQuantity] = useDecreaseQuantityMutation()

  const cartItemsCount = items?.length
  const totalAmount = items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  const deliveryFee = Math.floor(
    Math.random() * (MAX_DELIVERY_FEE - MIN_DELIVERY_FEE) + MIN_DELIVERY_FEE
  )

  return {
    isCartOpen,
    isLoginPopupOpen,
    items,
    isLoading,
    isError,
    error,
    cartItemsCount,
    totalAmount,
    deliveryFee,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  }
}

export default usePopup
