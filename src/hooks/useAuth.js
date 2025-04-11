import { useSelector } from "react-redux"

const useAuth = () => {
  const { user, token, status } = useSelector((state) => state.auth)
  const isLoggedIn = status === "authenticated"
  const id = user?.id

  return {
    user,
    id,
    token,
    isLoggedIn,
  }
}

export default useAuth
