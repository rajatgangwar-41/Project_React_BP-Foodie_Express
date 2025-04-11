import { Outlet } from "react-router-dom"
import { Header, Footer, Cart, LoginPopup } from "../components/common"
import { useEffect } from "react"
import { useTheme } from "../hooks"

const RootLayout = () => {
  const { theme } = useTheme()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-800">
        <Cart />
        <LoginPopup />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
