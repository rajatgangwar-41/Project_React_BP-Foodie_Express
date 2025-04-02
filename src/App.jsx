import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import router from "./routes"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  )
}

export default App
