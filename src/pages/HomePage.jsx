import {
  HeroSection,
  ExclusiveDeals,
  PopularDishes,
  PopularRestaurants,
  AppDownload,
  Testimonials,
  Stats,
  Partners,
} from "../components/home"

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          <HeroSection />
          <ExclusiveDeals />
          <PopularDishes />
          <PopularRestaurants />
          <AppDownload />
          <Partners />
          <Testimonials />
          <Stats />
        </div>
      </main>
    </div>
  )
}

export default HomePage
