import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts"
import { ProtectedRoute } from "./components/common"
import {
  HomePage,
  MenuPage,
  AboutPage,
  ContactPage,
  HelpPage,
  LoginPage,
  SignupPage,
  FoodItemPage,
  UserProfilePage,
  OrderDetailsPage,
  CheckoutPage,
  PaymentStatusPage,
  NotFoundPage,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/menu", element: <MenuPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/help", element: <HelpPage /> },
      { path: "/food-item/:id", element: <FoodItemPage /> },
      { path: "*", element: <NotFoundPage /> },
      {
        path: "/login",
        element: (
          <ProtectedRoute page={"LoginPage"}>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute page={"SignupPage"}>
            <SignupPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute page={"UserProfilePage"}>
            <UserProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <ProtectedRoute page={"CheckoutPage"}>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      { path: "/payment-status/:id", element: <PaymentStatusPage /> },
      { path: "/order-details/:id", element: <OrderDetailsPage /> },
    ],
  },
])

export default router

// ₹
