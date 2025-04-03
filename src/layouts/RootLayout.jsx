import { Outlet } from "react-router-dom"
import { Header, Footer } from "../components/common"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const RootLayout = () => {
  const theme = useSelector((state) => state.theme.mode)

  useEffect(() => {
    // Ensure the theme is applied on initial render
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
