import { FaStar, FaCheck, FaLock } from "react-icons/fa"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const foodItems = [
    {
      id: 1,
      title: "Premium Steak",
      description: "Aged ribeye with roasted vegetables and signature sauce",
      price: 28.99,
      image:
        "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1000",
      bgImage:
        "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1000",
    },
    {
      id: 2,
      title: "Gourmet Burger",
      description: "Wagyu beef patty with truffle aioli and aged cheddar",
      price: 22.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
      bgImage:
        "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=1000",
    },
    {
      id: 3,
      title: "Seafood Pasta",
      description: "Fresh lobster and shrimp in a creamy garlic sauce",
      price: 26.99,
      image:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1000",
      bgImage:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000",
    },
    {
      id: 4,
      title: "Truffle Pizza",
      description: "Wood-fired with wild mushrooms and truffle oil",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",
      bgImage:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",
    },
    {
      id: 5,
      title: "Sushi Platter",
      description: "Chef's selection of 12 premium nigiri and maki",
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
      bgImage:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1000",
    },
    {
      id: 6,
      title: "Chocolate Soufflé",
      description: "Warm chocolate center with vanilla bean ice cream",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000",
      bgImage:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [foodItems.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[900px] pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-0 lg:pb-0  overflow-hidden bg-black">
      {/* Background Images with Improved Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ opacity: 0.8, scale: 1.1 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${foodItems[currentIndex].bgImage}')`,
                backgroundPosition: "center 30%",
                filter: "brightness(0.7)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto relative z-10 h-full w-full max-w-screen-9xl px-4 sm:px-6 pt-6">
        <div className="h-full flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0 pb-8 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="mb-8">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/30"
                >
                  <FaStar className="mr-2 text-amber-200" />
                  PREMIUM DELIVERY
                </motion.span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight text-white">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100"
                >
                  Restaurant quality
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-orange-400 drop-shadow-[0_2px_10px_rgba(251,146,60,0.4)]"
                >
                  meals at home
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative mb-8 pl-6 border-l-4 border-orange-400/50"
              >
                <p className="text-xl text-gray-100 font-medium">
                  Our chefs prepare each dish with care using only the freshest
                  ingredients delivered to your door
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-5 mb-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-xl shadow-orange-500/30"
                >
                  <span className="relative z-10 text-lg sm:text-xl">
                    Order Now
                  </span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  ></span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white/40 hover:border-white text-white font-medium rounded-xl shadow-lg backdrop-blur-sm hover:backdrop-blur transition-all duration-300 text-lg sm:text-xl"
                >
                  View Menu
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap justify-center min-[506px]:justify-start gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-md"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaCheck className="text-green-300" />
                  </motion.div>
                  <span className="text-white font-medium">
                    No shipping charge
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-md"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <FaLock className="text-green-300" />
                  </motion.div>
                  <span className="text-white font-medium">
                    100% secure checkout
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col min-[530px]:flex-row justify-start gap-4"
              >
                {[
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
                    value: "4.9",
                    label: "8.4k Reviews",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/2413/2413394.png",
                    value: "2500+",
                    label: "Restaurants",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/5787/5787100.png",
                    value: "6000+",
                    label: "Food Items",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -3, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    }}
                    className="w-full max-w-3xs mx-auto min-[530px]:w-[calc(33.333%-12px)] sm:max-md:flex-1 min-w-[150px] bg-black/40 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg cursor-pointer"
                  >
                    <div className="flex justify-center mb-2">
                      <motion.img
                        alt=""
                        className="w-10 h-10 object-contain"
                        src={stat.icon}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.3,
                        }}
                      />
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Food Card */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-4 lg:p-8">
            <div className="relative w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      duration: 0.8,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: -50,
                    transition: { duration: 0.5 },
                  }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <motion.img
                      key={`image-${currentIndex}`}
                      initial={{ opacity: 0.8, scale: 1.1 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1.5 },
                      }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full object-cover"
                      src={foodItems[currentIndex].image}
                      alt={foodItems[currentIndex].title}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md flex items-center"
                    >
                      ${foodItems[currentIndex].price.toFixed(2)}
                    </motion.div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <motion.h3
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-gray-900 mb-3"
                    >
                      {foodItems[currentIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 mb-6"
                    >
                      {foodItems[currentIndex].description}
                    </motion.p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 w-full max-w-screen-9xl px-4 justify-center">
        {foodItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-orange-400 to-amber-500 shadow-[0_0_8px_rgba(251,146,60,0.6)]"
                : "w-4 bg-white/60"
            }`}
            aria-label={`Show ${item.title}`}
          ></motion.button>
        ))}
      </div>
    </section>
  )
}

export default HeroSection

// import { useState, useEffect } from "react"
// import {
//   FaCheck,
//   FaHamburger,
//   FaLock,
//   FaStar,
//   FaUtensils,
// } from "react-icons/fa"
// import { motion } from "framer-motion"

// const HeroSection = () => {
//   const [currentImage, setCurrentImage] = useState(0)

//   const dishes = [
//     {
//       name: "Premium Steak",
//       description: "Aged ribeye with roasted vegetables and signature sauce",
//       price: "$28.99",
//       image:
//         "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1000",
//     },
//     {
//       name: "Truffle Pasta",
//       description: "Handmade pasta with black truffle and parmesan cream",
//       price: "$22.50",
//       image:
//         "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000",
//     },
//     {
//       name: "Rainbow Poke Bowl",
//       description: "Fresh seafood with avocado, mango and sesame dressing",
//       price: "$18.75",
//       image:
//         "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000",
//     },
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % dishes.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [dishes.length])

//   return (
//     <section className="relative min-h-screen pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-0 lg:pb-0 lg:h-screen lg:max-h-[900px] overflow-hidden">
//       {/* Enhanced Background with Darker Overlay */}
//       <div className="absolute inset-0 z-0">
//         {dishes.map((dish, index) => (
//           <motion.div
//             key={index}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${dish.image})`,
//               backgroundPosition: "center 30%",
//               opacity: index === currentImage ? 1 : 0,
//               filter: "brightness(0.7)",
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentImage ? 1 : 0 }}
//             transition={{ duration: 1.5, ease: [0.6, 0.01, 0.05, 0.95] }}
//           />
//         ))}
//         {/* Stronger Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
//         {/* Subtle Noise Texture */}
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10" />
//       </div>

//       {/* Content container */}
//       <div className="container mx-auto relative z-10 h-full w-full max-w-screen-9xl px-4 sm:px-6 pt-6">
//         <div className="h-full flex flex-col lg:flex-row items-center">
//           {/* Left Side - Text Content */}
//           <div className="w-full lg:w-1/2 pb-8 lg:pb-0">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="max-w-xl"
//             >
//               {/* Premium Delivery Badge with Animation */}
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="mb-8"
//               >
//                 <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-orange-500/30">
//                   <FaStar className="mr-2 text-amber-200" />
//                   PREMIUM DELIVERY
//                 </span>
//               </motion.div>

//               {/* Headline with Cool Effect */}
//               <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-100">
//                   Restaurant quality
//                 </span>
//                 <br />
//                 <span className="text-orange-400 drop-shadow-[0_2px_10px_rgba(251,146,60,0.4)]">
//                   meals at home
//                 </span>
//               </h1>

//               {/* Description with Animated Border */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8 }}
//                 className="relative mb-10 pl-6 border-l-4 border-orange-400/50"
//               >
//                 <p className="text-xl text-gray-100 font-medium">
//                   Our chefs prepare each dish with care using only the freshest
//                   ingredients delivered to your door
//                 </p>
//               </motion.div>

//               {/* Buttons with Hover Effects */}
//               <div className="flex flex-col sm:flex-row gap-5 mb-10">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-xl shadow-orange-500/30"
//                 >
//                   <span className="relative z-10">Order Now</span>
//                   <motion.span
//                     className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
//                     aria-hidden="true"
//                   />
//                 </motion.button>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-transparent border-2 border-white/40 hover:border-white text-white font-medium rounded-xl shadow-lg backdrop-blur-sm hover:backdrop-blur transition-all duration-300"
//                 >
//                   View Menu
//                 </motion.button>
//               </div>

//               {/* Shipping Info with Glass Cards */}
//               <div className="flex flex-wrap gap-4 mb-12">
//                 {[
//                   {
//                     icon: <FaCheck className="text-emerald-300" />,
//                     text: "No shipping charge",
//                   },
//                   {
//                     icon: <FaLock className="text-emerald-300" />,
//                     text: "100% secure checkout",
//                   },
//                 ].map((item, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -3 }}
//                     className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-sm"
//                   >
//                     <motion.div
//                       animate={{ rotate: [0, 10, -10, 0] }}
//                       transition={{ duration: 0.6 }}
//                     >
//                       {item.icon}
//                     </motion.div>
//                     <span className="text-white font-medium">{item.text}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Stats Section with Fixed Width and Wrapping */}
//               <div className="flex flex-wrap justify-start gap-4">
//                 {[
//                   {
//                     icon: <FaStar className="text-amber-300 text-xl" />,
//                     value: "4.9",
//                     label: "8.4k Reviews",
//                   },
//                   {
//                     icon: <FaUtensils className="text-orange-300 text-xl" />,
//                     value: "2500+",
//                     label: "Restaurants",
//                   },
//                   {
//                     icon: <FaHamburger className="text-amber-300 text-xl" />,
//                     value: "6000+",
//                     label: "Food Items",
//                   },
//                 ].map((stat, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1 + i * 0.1 }}
//                     className="w-[calc(33.333%-12px)] min-w-[150px] bg-black/40 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 shadow-lg"
//                   >
//                     <div className="flex justify-center mb-2">
//                       <motion.div
//                         animate={{ scale: [1, 1.1, 1] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       >
//                         {stat.icon}
//                       </motion.div>
//                     </div>
//                     <p className="text-2xl font-bold text-white">
//                       {stat.value}
//                     </p>
//                     <p className="text-sm text-gray-300">{stat.label}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side - Dish Showcase with 3D Effect */}
//           <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-4 lg:p-8">
//             <motion.div
//               key={currentImage}
//               initial={{ opacity: 0, y: 40, rotate: -2 }}
//               animate={{ opacity: 1, y: 0, rotate: 0 }}
//               transition={{ duration: 0.8, type: "spring" }}
//               className="relative w-full max-w-md"
//             >
//               <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform perspective-1000 hover:rotate-x-5 transition-transform duration-500">
//                 <div className="aspect-square bg-gray-100 relative overflow-hidden">
//                   <motion.img
//                     src={dishes[currentImage].image}
//                     alt={dishes[currentImage].name}
//                     className="w-full h-full object-cover"
//                     initial={{ scale: 1.1 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 8, ease: "linear" }}
//                   />
//                   <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md flex items-center">
//                     <span className="mr-1">🍔</span>
//                     {dishes[currentImage].price}
//                   </div>
//                 </div>
//                 <div className="p-6 bg-gradient-to-br from-white to-gray-50">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                     {dishes[currentImage].name}
//                   </h3>
//                   <p className="text-gray-600 mb-6">
//                     {dishes[currentImage].description}
//                   </p>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
//                   >
//                     Add to Cart
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Modern Dish Indicators */}
//       <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 w-full max-w-screen-9xl px-4 justify-center">
//         {dishes.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             whileHover={{ scale: 1.2 }}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === currentImage
//                 ? "w-8 bg-gradient-to-r from-orange-400 to-amber-500 shadow-[0_0_8px_rgba(251,146,60,0.6)]"
//                 : "w-4 bg-white/60"
//             }`}
//             aria-label={`Show dish ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default HeroSection
