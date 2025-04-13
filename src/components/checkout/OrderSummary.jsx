import { useCallback, useEffect, useState } from "react"
import { motion } from "motion/react"
import { useDispatch } from "react-redux"
import {
  FiShoppingBag,
  FiGift,
  FiX,
  FiLock,
  FiInfo,
  FiCheck,
} from "react-icons/fi"
import { setDiscount } from "../../features/orderSlice"

const OrderSummary = ({
  order,
  activePaymentMethod,
  isLoading,
  handlePayment,
}) => {
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [isCouponValid, setIsCouponValid] = useState(null)
  const dispatch = useDispatch()

  // Available coupons
  const availableCoupons = [
    { code: "SAVE100", discount: 100, minOrder: 300 },
    { code: "SAVE50", discount: 50, minOrder: 200 },
    { code: "FREE_DEL", discount: 120, minOrder: 500, freeDelivery: true },
  ]

  const applyCoupon = (code) => {
    const coupon = availableCoupons.find((c) => c.code === code)
    if (coupon) {
      if (order.subTotal >= coupon.minOrder) {
        setAppliedCoupon(coupon)
        setIsCouponValid(true)

        // Dispatch a single action with all changes
        dispatch(
          setDiscount({
            code: coupon.code,
            discount: coupon.discount,
            freeDelivery: coupon.freeDelivery || false,
          })
        )
      } else {
        setIsCouponValid(false)
      }
    } else {
      setIsCouponValid(false)
    }
  }

  const removeCoupon = useCallback(() => {
    setAppliedCoupon(null)
    setCouponCode("")
    setIsCouponValid(null)
    // Reset everything with a single action
    dispatch(setDiscount({ discount: 0, code: "", freeDelivery: false }))
  }, [dispatch])

  useEffect(() => {
    if (order.subTotal < appliedCoupon?.minOrder) {
      removeCoupon()
    }
  }, [order.subTotal, appliedCoupon, removeCoupon])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 sticky top-6"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <FiShoppingBag className="text-orange-500" />
        <span>Order Summary</span>
      </h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {order.items?.map((item) => (
          <div key={item.id} className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Food Image */}
              <div className="relative">
                <img
                  src={item.image || "https://via.placeholder.com/500"}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                  loading="lazy"
                />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {item.quantity}
                </span>
              </div>

              {/* Food Name and Price */}
              <div className="min-w-0">
                <h3 className="font-medium text-gray-800 dark:text-white truncate">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>₹{item.price.toFixed(2)}</span>
                  <span>×</span>
                  <span>{item.quantity}</span>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="flex flex-col items-end">
              <span className="font-medium text-gray-800 dark:text-white whitespace-nowrap">
                ₹{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <FiGift className="text-orange-500" />
          <h3 className="font-medium text-gray-800 dark:text-white">
            Promo Code
          </h3>
        </div>

        {appliedCoupon ? (
          <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-2">
            <div className="flex items-center gap-2">
              <FiCheck className="text-green-500" />
              <span className="text-green-700 dark:text-green-400 font-medium">
                {appliedCoupon.code}
              </span>
              <span className="text-green-700 dark:text-green-400 text-sm">
                -₹{appliedCoupon.discount.toFixed(2)}
              </span>
            </div>
            <button
              onClick={removeCoupon}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <FiX />
            </button>
          </div>
        ) : (
          <div className="flex flex-col min-[1150px]:flex-row gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Enter promo code"
            />
            <button
              onClick={() => applyCoupon(couponCode)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors sm:w-auto"
            >
              Apply
            </button>
          </div>
        )}

        {isCouponValid === false && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            <FiInfo className="flex-shrink-0" />
            <span>Invalid or expired promo code</span>
          </p>
        )}

        {/* Available Coupons */}
        <div className="mt-3">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Available coupons:
          </p>
          <div className="flex flex-wrap gap-2">
            {availableCoupons.map((coupon) => (
              <button
                key={coupon.code}
                onClick={() => {
                  setCouponCode(coupon.code)
                  applyCoupon(coupon.code)
                }}
                className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-2 py-1 rounded transition-colors"
              >
                {coupon.code}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Order Totals */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="font-medium">₹{order.subTotal?.toFixed(2)}</span>
        </div>

        {appliedCoupon && (
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Discount</span>
            <span className="font-medium text-green-600 dark:text-green-400">
              -₹{appliedCoupon.discount.toFixed(2)}
            </span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
          <span className="font-medium">₹{order.deliveryFee?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="font-medium">₹{order.tax?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-gray-200 dark:border-gray-700 mt-2">
          <span className="font-bold text-gray-800 dark:text-white">Total</span>
          <span className="font-bold text-orange-500">
            ₹{order.total?.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`w-full mt-6 py-3 px-6 rounded-lg font-medium text-white transition-colors flex items-center justify-center gap-2 ${
          isLoading
            ? "bg-orange-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {activePaymentMethod === "cod"
              ? "Placing Order..."
              : "Processing Payment..."}
          </>
        ) : (
          <>
            {activePaymentMethod === "cod" ? (
              "Place Order"
            ) : (
              <>
                <FiLock className="flex-shrink-0" />
                Pay ₹{order.total.toFixed(2)}
              </>
            )}
          </>
        )}
      </button>

      {/* Security Info */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
        <FiLock className="flex-shrink-0" />
        <span>
          {activePaymentMethod === "cod"
            ? "Your order is secured"
            : "Your payment is secured with 256 bit encryption"}
        </span>
      </div>
    </motion.div>
  )
}

export default OrderSummary
