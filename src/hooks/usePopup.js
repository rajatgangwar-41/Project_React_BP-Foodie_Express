import { useSelector } from "react-redux"
import {
  useClearCartMutation,
  useDecreaseQuantityMutation,
  useGetCartItemsQuery,
  useIncreaseQuantityMutation,
  useRemoveItemMutation,
} from "../features/cartApiSlice"
import { useAuth } from "../hooks"

const usePopup = () => {
  const { isCartOpen, isLoginPopupOpen } = useSelector((state) => state.popup)
  const { user } = useAuth()
  const { data, isLoading, isError, error, refetch } = useGetCartItemsQuery(
    user?.id,
    {
      skip: !user?.id,
    }
  )

  const items = data?.cart
  const [clearCart] = useClearCartMutation()
  const [removeItem] = useRemoveItemMutation()
  const [increaseQuantity] = useIncreaseQuantityMutation()
  const [decreaseQuantity] = useDecreaseQuantityMutation()

  const cartItemsCount = items?.length || 0
  const totalAmount =
    items?.reduce((total, item) => total + item.price * item.quantity, 0) || 0

  return {
    items,
    isLoading,
    isError,
    error,
    refetch,
    isCartOpen,
    isLoginPopupOpen,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    cartItemsCount,
    totalAmount,
  }
}

export default usePopup
