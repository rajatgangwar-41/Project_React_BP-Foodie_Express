import { motion } from "framer-motion"
import { FiCreditCard, FiCheck, FiTruck } from "react-icons/fi"

const PaymentMethods = ({
  activePaymentMethod,
  setActivePaymentMethod,
  register,
  errors,
  setValue,
  trigger,
  unregister,
}) => {
  const handlePaymentMethodChange = async (method) => {
    unregister("cardNumber")
    unregister("cardExpiry")
    unregister("cardCvc")
    unregister("upiId")

    // Then set the new payment method
    setActivePaymentMethod(method)
    setValue("paymentMethod", method)

    // Finally re-register only the needed fields
    if (method === "credit-card") {
      register("cardNumber")
      register("cardExpiry")
      register("cardCvc")
    } else if (method === "upi") {
      register("upiId")
    }

    await trigger()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
        <FiCreditCard className="text-orange-500" />
        <span>Payment Method</span>
      </h2>

      <div className="space-y-3">
        {/* Credit Card */}
        <div
          className={`p-4 rounded-lg border cursor-pointer transition-all ${
            activePaymentMethod === "credit-card"
              ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
          onClick={() => handlePaymentMethodChange("credit-card")}
        >
          <div className="flex relative items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                activePaymentMethod === "credit-card"
                  ? "border-orange-500 bg-orange-500"
                  : "border-gray-400 dark:border-gray-500"
              }`}
            >
              {activePaymentMethod === "credit-card" && (
                <FiCheck className="text-white text-xs" />
              )}
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Credit Card
            </span>
            <div className="ml-auto absolute right-0 flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                className="w-12 h-10 object-contain"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="w-12 h-8 object-contain"
                alt="Mastercard"
              />
            </div>
          </div>
        </div>

        {activePaymentMethod === "credit-card" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="pl-4 pr-4 pb-4"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  {...register("cardNumber")}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.cardNumber
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                  placeholder="1234 5678 9012 3456"
                />
                {errors.cardNumber && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.cardNumber.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    {...register("cardExpiry")}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.cardExpiry
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                    placeholder="MM/YY"
                  />
                  {errors.cardExpiry && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.cardExpiry.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    {...register("cardCvc")}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.cardCvc
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                    placeholder="123"
                  />
                  {errors.cardCvc && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.cardCvc.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PayPal */}
        <div
          className={`p-4 rounded-lg border cursor-pointer transition-all ${
            activePaymentMethod === "paypal"
              ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
          onClick={() => handlePaymentMethodChange("paypal")}
        >
          <div className="flex relative items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                activePaymentMethod === "paypal"
                  ? "border-orange-500 bg-orange-500"
                  : "border-gray-400 dark:border-gray-500"
              }`}
            >
              {activePaymentMethod === "paypal" && (
                <FiCheck className="text-white text-xs" />
              )}
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              PayPal
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="w-20 h-16 absolute right-0 object-contain ml-auto"
              alt="PayPal"
            />
          </div>
        </div>

        {/* UPI */}
        <div
          className={`p-4 rounded-lg border cursor-pointer transition-all ${
            activePaymentMethod === "upi"
              ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
          onClick={() => handlePaymentMethodChange("upi")}
        >
          <div className="flex relative items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                activePaymentMethod === "upi"
                  ? "border-orange-500 bg-orange-500"
                  : "border-gray-400 dark:border-gray-500"
              }`}
            >
              {activePaymentMethod === "upi" && (
                <FiCheck className="text-white text-xs" />
              )}
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              UPI Payment
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
              className="w-16 h-10 absolute right-0 object-contain ml-auto"
              alt="UPI"
            />
          </div>
        </div>

        {activePaymentMethod === "upi" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="pl-4 pr-4 pb-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                UPI ID
              </label>
              <input
                type="text"
                {...register("upiId")}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.upiId
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-800 dark:text-white`}
                placeholder="yourname@upi"
              />
              {errors.upiId && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.upiId.message}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Cash on Delivery */}
        <div
          className={`p-4 rounded-lg border cursor-pointer transition-all ${
            activePaymentMethod === "cod"
              ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          }`}
          onClick={() => handlePaymentMethodChange("cod")}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                activePaymentMethod === "cod"
                  ? "border-orange-500 bg-orange-500"
                  : "border-gray-400 dark:border-gray-500"
              }`}
            >
              {activePaymentMethod === "cod" && (
                <FiCheck className="text-white text-xs" />
              )}
            </div>
            <span className="font-medium text-gray-800 dark:text-white">
              Cash on Delivery
            </span>
            <FiTruck className="text-gray-500 text-xl dark:text-gray-400 ml-auto" />
          </div>
        </div>
      </div>

      {/* Hidden select for proper form registration */}
      <select
        {...register("paymentMethod", {
          required: "Please select a payment method",
        })}
        className="hidden"
        value={activePaymentMethod}
      >
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="upi">UPI</option>
        <option value="cod">Cash on Delivery</option>
      </select>
      {errors.paymentMethod && (
        <p className="mt-1 text-sm text-red-500">
          {errors.paymentMethod.message}
        </p>
      )}
    </motion.div>
  )
}

export default PaymentMethods
