import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks"

const ProtectedRoute = ({ page, children }) => {
  const location = useLocation()
  const { user, isLoggedIn } = useAuth()

  switch (page) {
    case "LoginPage":
      if (isLoggedIn) {
        const from = location.state?.from || "/"
        return <Navigate to={from} replace />
      }

      return children

    case "SignupPage":
      if (isLoggedIn) {
        const from = location.state?.from || "/"
        return <Navigate to={from} replace />
      }

      return children

    case "UserProfilePage":
      if (!isLoggedIn) {
        return (
          <Navigate to="/login" replace state={{ from: location.pathname }} />
        )
      }

      if (user.userId !== location.pathname.split("/")[2]) {
        return <Navigate to="/" replace />
      }

      return children

    case "CheckoutPage":
      if (!isLoggedIn) {
        return (
          <Navigate to="/login" replace state={{ from: location.pathname }} />
        )
      }

      if (
        user.userId !== location.pathname.split("/")[2] ||
        !user.cart.length
      ) {
        return <Navigate to="/menu" replace />
      }

      return children

    case "PaymentStatusPage": {
      if (!isLoggedIn) {
        return (
          <Navigate to="/login" replace state={{ from: location.pathname }} />
        )
      }

      const orderId = location.pathname.split("/")[2]
      const matchedOrder = user.orders.find(
        (order) => order.orderId === orderId
      )

      if (!matchedOrder) {
        return <Navigate to="/menu" replace />
      }

      if (!location.state?.order) {
        return (
          <Navigate
            to={location.pathname}
            replace
            state={{ order: matchedOrder }}
          />
        )
      }

      return children
    }
    case "OrderDetailsPage": {
      if (!isLoggedIn) {
        return (
          <Navigate to="/login" replace state={{ from: location.pathname }} />
        )
      }

      const orderId = location.pathname.split("/")[2]
      const matchedOrder = user.orders.find(
        (order) => order.orderId === orderId && order.orderStatus !== "Declined"
      )

      if (!matchedOrder) {
        return <Navigate to="/menu" replace />
      }

      if (!location.state?.order) {
        return (
          <Navigate
            to={location.pathname}
            replace
            state={{ order: matchedOrder }}
          />
        )
      }

      return children
    }

    default:
      return children
  }
}

export default ProtectedRoute
