import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./layouts"
import { HomePage, ContactPage, NotFoundPage } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export default router
