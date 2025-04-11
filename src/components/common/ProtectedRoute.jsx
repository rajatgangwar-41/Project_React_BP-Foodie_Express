import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks"

const ProtectedRoute = ({ children }) => {
  const location = useLocation()
  const {
    user: { userId },
    isLoggedIn,
  } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  if (userId !== location.pathname.split("/")[2]) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
