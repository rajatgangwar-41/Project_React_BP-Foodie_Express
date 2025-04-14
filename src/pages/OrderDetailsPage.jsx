import { useLocation } from "react-router-dom"
import {
  ActionButtons,
  DeliveryInfo,
  HeroSection,
  OrderSummary,
  OrderTracking,
  PaymentInfo,
  RiderInfo,
} from "../components/order"

const OrderDetailsPage = () => {
  const {
    state: { order },
  } = useLocation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection orderId={order.orderId} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Order Summary Card */}
        <OrderSummary order={order} />

        {/* Delivery, Payment, and Rider Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Delivery Info */}
          <DeliveryInfo order={order} />

          {/* Rider Info */}
          <RiderInfo rider={order.rider} />

          {/* Payment Info */}
          <PaymentInfo order={order} />
        </div>

        {/* Order Tracking */}
        <OrderTracking order={order} />

        {/* Action Buttons */}
        <ActionButtons />
      </div>
    </div>
  )
}

export default OrderDetailsPage
