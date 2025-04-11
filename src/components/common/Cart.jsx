import { motion, AnimatePresence } from "framer-motion"
import { useDispatch } from "react-redux"
import { FiTrash2 } from "react-icons/fi"
import { setIsCartOpen } from "../../features/popupSlice"
import { useAuth, usePopup } from "../../hooks"
import {
  CartHeader,
  CartLoading,
  CartError,
  EmptyCart,
  CartItem,
  CartFooter,
} from "./cart"
import toast from "react-hot-toast"

const Cart = () => {
  const dispatch = useDispatch()
  const { id } = useAuth()
  const {
    items,
    isLoading,
    isError,
    error,
    refetch,
    isCartOpen,
    clearCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    cartItemsCount,
    totalAmount,
  } = usePopup()

  const handleIncreaseQuantity = (item) => {
    const cartItems = items.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
    increaseQuantity({
      id,
      item,
      quantity: 1,
      cartItems: [...cartItems],
    })
    toast.success(`${item.name} quantity increased by 1!`, {
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
      },
    })
  }

  const handleDecreaseQuantity = (item) => {
    if (item.quantity <= 1) return
    const cartItems = items.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    decreaseQuantity({
      id,
      item,
      cartItems: [...cartItems],
    })
    toast.success(`${item.name} quantity decreased by 1!`, {
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
      },
    })
  }

  const handleRemoveItem = (item) => {
    const restCartItems = items.filter((cartItem) => cartItem.id !== item.id)

    removeItem({
      id,
      item,
      cartItems: [...restCartItems],
    })
    toast.success(`${item.name} Removed from the cart!`, {
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
      },
    })
  }

  const handleClearCart = () => {
    clearCart({ id })
    toast.success(`Cart Cleared!`, {
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
      },
    })
  }

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
            <CartHeader
              cartItemsCount={cartItemsCount}
              setIsCartOpen={setIsCartOpen}
            />

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {isLoading ? (
                <CartLoading />
              ) : isError ? (
                <CartError error={error} refetch={refetch} />
              ) : cartItemsCount === 0 ? (
                <EmptyCart setIsCartOpen={setIsCartOpen} />
              ) : (
                <>
                  <div className="flex justify-end mb-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleClearCart()}
                      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                    >
                      <FiTrash2 className="h-4 w-4" />
                      Clear Cart
                    </motion.button>
                  </div>
                  <motion.div layout className="space-y-4">
                    <AnimatePresence>
                      {items?.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          handleRemoveItem={handleRemoveItem}
                          handleIncreaseQuantity={handleIncreaseQuantity}
                          handleDecreaseQuantity={handleDecreaseQuantity}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </div>

            {/* Cart Footer */}
            {!isLoading && !isError && cartItemsCount > 0 && (
              <CartFooter totalAmount={totalAmount} />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Cart
