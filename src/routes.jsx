import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts"
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
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/food-item/:id", element: <FoodItemPage /> },
      { path: "/user/:id", element: <UserProfilePage /> },
      { path: "/order-details/:id", element: <OrderDetailsPage /> },
      { path: "/checkout/:id", element: <CheckoutPage /> },
      { path: "/payment-status/:id", element: <PaymentStatusPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export default router
