import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks"

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return { children }
}

export default ProtectedRoute
