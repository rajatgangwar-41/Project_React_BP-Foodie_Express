import { useSelector } from "react-redux"

const useAuth = () => {
  const { user, token, cartId, orderId, favoriteId, status } = useSelector(
    (state) => state.auth
  )
  const isLoggedIn = status === "authenticated"

  return { user, token, status, cartId, orderId, favoriteId, isLoggedIn }
}

export default useAuth
