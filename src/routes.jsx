import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts"
import { ProtectedRoute, ProtectedAuthRoute } from "./components/common"
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
      // Auth routes - only accessible when NOT logged in
      {
        path: "/login",
        element: (
          <ProtectedAuthRoute>
            <LoginPage />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedAuthRoute>
            <SignupPage />
          </ProtectedAuthRoute>
        ),
      },
      // Protected routes - only accessible when logged in
      {
        path: "/user/:id",
        element: (
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        ),
      },
      { path: "/checkout/:id", element: <CheckoutPage /> },
      { path: "/payment-status/:id", element: <PaymentStatusPage /> },
      { path: "/order-details/:id", element: <OrderDetailsPage /> },
    ],
  },
])

export default router
