import { motion, AnimatePresence } from "motion/react"
import { useDispatch } from "react-redux"
import { FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi"
import { setIsCartOpen } from "../../features/popupSlice"
import { useAuth, usePopup } from "../../hooks"

const Cart = () => {
  const dispatch = useDispatch()
  const { cartId } = useAuth()
  const {
    isCartOpen,
    items,
    _isLoading,
    _isError,
    _error,
    cartItemsCount,
    totalAmount,
    deliveryFee,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = usePopup()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setIsCartOpen(false))}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 flex flex-col"
          >
            {/* Cart Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <FiShoppingCart className="h-6 w-6 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  Your Cart ({cartItemsCount})
                </h2>
              </div>
              <button
                onClick={() => dispatch(setIsCartOpen(false))}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FiX className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItemsCount === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                  <FiShoppingCart className="h-16 w-16 mb-4" />
                  <p className="text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-end mb-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => clearCart(cartId)}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                    >
                      <FiTrash2 className="h-4 w-4" />
                      Clear Cart
                    </motion.button>
                  </div>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        layout
                        className="flex gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-800 dark:text-white">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(cartId, item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <FiTrash2 className="h-5 w-5" />
                            </button>
                          </div>
                          <p className="text-orange-500 font-medium mt-1">
                            ₹{item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center mt-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              <FiMinus className="h-4 w-4" />
                            </button>
                            <span className="mx-3 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              <FiPlus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Cart Footer */}
            {cartItemsCount > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 dark:text-gray-300">
                    Subtotal
                  </span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    ₹{totalAmount}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 dark:text-gray-300">
                    Delivery
                  </span>
                  <span className="font-medium text-gray-800 dark:text-white">
                    ₹{deliveryFee}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span className="text-gray-800 dark:text-white">Total</span>
                  <span className="text-orange-500">
                    ₹{(parseFloat(totalAmount) + deliveryFee).toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Cart
