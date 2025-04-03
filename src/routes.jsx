import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts"
import {
  HomePage,
  AboutPage,
  ContactPage,
  HelpPage,
  NotFoundPage,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/help", element: <HelpPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export default router
