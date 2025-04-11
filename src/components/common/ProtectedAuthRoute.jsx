import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks"

const ProtectedAuthRoute = ({ children }) => {
  const { isLoggedIn } = useAuth()
  const location = useLocation()

  if (isLoggedIn) {
    const from = location.state?.from || "/"
    return <Navigate to={from} replace />
  }

  return children
}

export default ProtectedAuthRoute
