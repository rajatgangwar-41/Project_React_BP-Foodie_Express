import {
  FaCheckCircle,
  FaHamburger,
  FaShoppingBag,
  FaUtensils,
} from "react-icons/fa"
import {
  review,
  restaurant,
  foodItem,
  penneArrabiata,
  chanaMasala,
  forestMushroom,
  fourCheese,
  margherita,
  vegetablePotstickers,
} from "../assets"

export const restaurants = [
  "Mcdonald",
  "Burger King",
  "Pizza Hut",
  "KFC",
  "Subway",
  "Dominoes",
  "Starbucks",
  "Taco Bell",
  "Wendy's",
  "Chik Fil a",
  "Urban Eats",
  "Spice Route",
  "Ocean Delights",
  "Sweet Surrender",
  "Gourmet Bites",
  "Fresh Kitchen",
  "Taco Fiesta",
  "Noodle World",
  "Soup Central",
]

export const dishes = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Salad",
  "Tacos",
  "Bread",
  "Beverage",
  "Dessert",
  "Samosa",
  "Curry",
  "Soup",
  "Noodles",
  "Dumpling",
]

export const cuisines = [
  "Italian",
  "Mexican",
  "Thai",
  "Chinese",
  "American",
  "Greek",
  "French",
  "Indian",
  "Japanese",
]

export const tags = [
  "Wood-fired",
  "Authentic",
  "Fresh",
  "Shareable",
  "Comfort Food",
  "Seafood",
  "Healthy",
  "Best Seller",
  "Vegetarian",
  "Quick Meal",
  "Seasonal",
  "Classic",
  "Breakfast",
  "Sweet",
  "Spicy",
  "Street Food",
  "New",
  "Dairy-Free",
  "Steamed",
  "Hand-folded",
  "Juicy",
]

export const platformStats = [
  {
    icon: FaShoppingBag,
    value: "10,000+",
    label: "Registered Orders",
    color: "teal",
  },
  {
    icon: FaCheckCircle,
    value: "8,500+",
    label: "Orders Delivered",
    color: "blue",
  },
  {
    icon: FaUtensils,
    value: "100+",
    label: "Restaurant Partners",
    color: "amber",
  },
  {
    icon: FaHamburger,
    value: "5,000+",
    label: "Food Items",
    color: "purple",
  },
]

export const stats = [
  {
    icon: review,
    value: "4.9",
    label: "8.4k Reviews",
  },
  {
    icon: restaurant,
    value: "100+",
    label: "Restaurants",
  },
  {
    icon: foodItem,
    value: "5000+",
    label: "Food Items",
  },
]

export const popularFoodItems = [
  {
    id: "fresh-kitchen-8462",
    type: "Pasta",
    name: "Penne Arrabiata",
    cuisine: "Greek",
    ingredients: [
      "Pasta",
      "Olive oil",
      "Garlic",
      "Tomato sauce",
      "Red pepper flakes",
      "Parsley",
    ],
    tags: ["Comfort Food", "Spicy"],
    prepTime: "20-35",
    price: 620,
    restaurant: "Fresh Kitchen",
    image: penneArrabiata,
    calories: 686,
    about:
      "Spicy tomato sauce with garlic and chili flakes. Slow-simmered with San Marzano tomatoes for depth of flavor.",
    description:
      "Spicy tomato pasta with garlic kick - simple but packed with bold flavors",
    servingSuggestions: [
      "Grate fresh Parmesan at the table",
      "Serve with crusty Italian bread",
      "Pair red sauce pastas with Chianti wine",
      "Offer chili oil for those who want extra heat",
      "Garnish with fresh herbs before serving",
    ],
    dietaryInfo: {
      vegetarian: true,
      glutenFree: false,
      spicy: true,
    },
    reviews: [
      {
        id: 1,
        user: "User 34",
        avatar: "https://randomuser.me/api/portraits/women/20.jpg",
        rating: 5,
        comment:
          "Pasta perfection! Ingredients were fresh, flavors were vibrant. A true taste of Italy. Highly recommended.",
        date: "6 week ago",
      },
      {
        id: 2,
        user: "User 955",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 5,
        comment:
          "Vegetable Primavera's garden freshness! Crisp vegetables, light sauce. A healthy, colorful pasta delight.",
        date: "7 day ago",
      },
      {
        id: 3,
        user: "User 475",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
        comment:
          "Perfect pasta night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
        date: "1 day ago",
      },
      {
        id: 4,
        user: "User 152",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
        rating: 4,
        comment:
          "Delicious pasta! The sauce was flavorful, and the noodles were perfectly cooked. A great meal for a cozy night in.",
        date: "6 day ago",
      },
      {
        id: 5,
        user: "User 382",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 4,
        comment:
          "Okay pasta. The sauce was average, and the noodles were a bit mushy. Not bad, but not particularly exciting.",
        date: "5 week ago",
      },
    ],
    rating: "4.0",
    ratingCount: 157,
    deliveryTime: "39-53",
    isPopular: true,
    lastOrdered: "2025-04-06T05:27:34.500Z",
  },
  {
    id: "sweet-surrender-9889",
    type: "Curry",
    name: "Chana Masala",
    cuisine: "Indian",
    ingredients: [
      "Onions",
      "Tomatoes",
      "Ginger-garlic paste",
      "Turmeric",
      "Coriander powder",
      "Cumin",
      "Garam masala",
      "Chickpeas",
      "Amchur",
      "Tea leaves (for color)",
    ],
    tags: ["Sweet", "Classic"],
    prepTime: "30-45",
    price: 810,
    restaurant: "Sweet Surrender",
    image: chanaMasala,
    calories: null,
    about: "Spicy chickpea curry popular as street food and home meal",
    description:
      "Hearty chickpeas in robust spicy gravy - protein-packed comfort food",
    servingSuggestions: [
      "Serve butter chicken with naan or jeera rice",
      "Pair paneer tikka masala with garlic kulcha",
      "Enjoy chana masala with bhatura or steamed rice",
      "Serve rogan josh with saffron pulao",
      "Present malai kofta in copper bowls garnished with cream",
      "Accompany dal tadka with plain roti or rice",
      "Serve fish curry with appam or steamed rice",
    ],
    dietaryInfo: {
      vegetarian: true,
      glutenFree: false,
      spicy: true,
    },
    reviews: [
      {
        id: 1,
        user: "User 776",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
        comment:
          "Good curry, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
        date: "5 week ago",
      },
      {
        id: 2,
        user: "User 278",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 4,
        comment:
          "Great curry! The spices were aromatic, and the texture was delightful. The service was fast, and the curry arrived hot.",
        date: "3 day ago",
      },
      {
        id: 3,
        user: "User 548",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
        rating: 4,
        comment:
          "Paneer Tikka Masala's vegetarian delight! Soft paneer, vibrant spices, rich gravy. A flavorful, satisfying choice.",
        date: "2 week ago",
      },
      {
        id: 4,
        user: "User 816",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 4,
        comment:
          "Perfect curry experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
        date: "4 week ago",
      },
      {
        id: 5,
        user: "User 758",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        rating: 4,
        comment:
          "Solid curry. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for any meal.",
        date: "1 day ago",
      },
      {
        id: 6,
        user: "User 403",
        avatar: "https://randomuser.me/api/portraits/men/49.jpg",
        rating: 5,
        comment:
          "Amazing curry! The herbs and spices were perfectly blended. The protein was fresh and plentiful.",
        date: "6 week ago",
      },
      {
        id: 7,
        user: "User 694",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        rating: 4,
        comment:
          "Perfect curry experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
        date: "1 day ago",
      },
      {
        id: 8,
        user: "User 62",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        rating: 4,
        comment:
          "Okay curry. The sauce was average, and the protein was a bit tough. Not bad, but not particularly exciting.",
        date: "6 week ago",
      },
      {
        id: 9,
        user: "User 510",
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        rating: 4,
        comment:
          "Curry perfection! Ingredients were fresh, spices were vibrant. A true Indian culinary delight. Highly recommended.",
        date: "6 day ago",
      },
    ],
    rating: "3.6",
    ratingCount: 128,
    deliveryTime: "47-66",
    isPopular: false,
    lastOrdered: "2025-04-04T05:27:34.500Z",
  },
  {
    id: "pizza-hut-8561",
    type: "Pizza",
    name: "Margherita",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil",
      "Olive oil",
    ],
    tags: ["Comfort Food", "Shareable"],
    prepTime: "15-25",
    price: 689,
    restaurant: "Pizza Hut",
    image: margherita,
    calories: 830,
    about:
      "Our signature Margherita follows authentic Neapolitan tradition with San Marzano tomato sauce, fresh mozzarella, and hand-picked basil. Cooked in 900°F wood-fired oven for perfect char.",
    description:
      "Classic tomato, mozzarella and basil. Simple, fresh and utterly satisfying.",
    servingSuggestions: [
      "Drizzle with extra virgin olive oil",
      "Pair with Chianti or other light red wine",
      "Add fresh basil after baking",
      "Serve with chili oil for spice lovers",
    ],
    dietaryInfo: {
      vegetarian: true,
      glutenFree: false,
      spicy: false,
    },
    reviews: [
      {
        id: 1,
        user: "User 544",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        comment:
          "This pizza was a masterpiece! The balance of flavors was incredible, and the crust was flawless. Every slice was a joy.",
        date: "7 week ago",
      },
      {
        id: 2,
        user: "User 553",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        rating: 5,
        comment:
          "Spicy, savory, and satisfying. The cheese was melted just right. Delivery was fast, and pizza arrived hot.",
        date: "5 week ago",
      },
      {
        id: 3,
        user: "User 437",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 4,
        comment:
          "Delicious! The cheese was melted perfectly, and the toppings were generous. A great pizza for a cozy night in.",
        date: "5 day ago",
      },
      {
        id: 4,
        user: "User 791",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
        rating: 4,
        comment:
          "Okay pizza. The crust was a little soggy, and the toppings were average. Not bad, but not the best either.",
        date: "4 week ago",
      },
      {
        id: 5,
        user: "User 357",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        comment:
          "Amazing pizza! The sauce was delicious, and the cheese was perfectly melted. The toppings were fresh and flavorful. Will order again.",
        date: "2 week ago",
      },
      {
        id: 6,
        user: "User 257",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        rating: 4,
        comment:
          "Delicious! The cheese was melted perfectly, and the toppings were generous. A great pizza for a cozy night in.",
        date: "2 day ago",
      },
      {
        id: 7,
        user: "User 151",
        avatar: "https://randomuser.me/api/portraits/men/26.jpg",
        rating: 4,
        comment:
          "Great pizza! The crust was crispy, and the toppings were flavorful. The delivery was fast, and the pizza was still hot.",
        date: "2 week ago",
      },
      {
        id: 8,
        user: "User 481",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        rating: 4,
        comment:
          "Good pizza, but not great. The crust was slightly undercooked, and the toppings were a bit bland. It was fine, but nothing special.",
        date: "1 day ago",
      },
      {
        id: 9,
        user: "User 251",
        avatar: "https://randomuser.me/api/portraits/women/46.jpg",
        rating: 5,
        comment:
          "Perfect pizza night! The taste was so good, the crust was crispy, and the toppings were flavorful. I couldn't have asked for more.",
        date: "7 week ago",
      },
      {
        id: 10,
        user: "User 20",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
        rating: 5,
        comment:
          "This pizza was a masterpiece! The balance of flavors was incredible, and the crust was flawless. Every slice was a joy.",
        date: "7 week ago",
      },
      {
        id: 11,
        user: "User 93",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg",
        rating: 5,
        comment:
          "Good pizza, but not great. The crust was slightly undercooked, and the toppings were a bit bland. It was fine, but nothing special.",
        date: "1 day ago",
      },
      {
        id: 12,
        user: "User 940",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        comment:
          "Solid pizza. The crust was good, and the toppings were decent. A reliable choice for a casual meal.",
        date: "4 day ago",
      },
      {
        id: 13,
        user: "User 107",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        rating: 5,
        comment:
          "Rich, creamy, and indulgent. The blend of cheeses was divine. A gourmet experience delivered to my door.",
        date: "6 week ago",
      },
      {
        id: 14,
        user: "User 367",
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        rating: 4,
        comment:
          "Delicious! The cheese was melted perfectly, and the toppings were generous. A great pizza for a cozy night in.",
        date: "3 week ago",
      },
      {
        id: 15,
        user: "User 359",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 4,
        comment:
          "This pizza was a masterpiece! The balance of flavors was incredible, and the crust was flawless. Every slice was a joy.",
        date: "1 week ago",
      },
    ],
    rating: "5.0",
    ratingCount: 157,
    deliveryTime: "32-52",
    isPopular: true,
    lastOrdered: "2025-03-31T05:27:34.501Z",
  },
  {
    id: "pizza-hut-1351",
    type: "Pizza",
    name: "Four Cheese",
    cuisine: "Italian",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Gorgonzola",
      "Parmesan",
      "Fontina",
    ],
    tags: ["Shareable", "Wood-fired"],
    prepTime: "15-25",
    price: 621,
    restaurant: "Pizza Hut",
    image: fourCheese,
    calories: 1180,
    about:
      "Luxurious blend of four Italian cheeses (Gorgonzola, Fontina, Parmesan and Mozzarella) carefully balanced for perfect harmony.",
    description: "Four cheese creamy decadence. Rich flavorful indulgence.",
    servingSuggestions: [
      "Drizzle with extra virgin olive oil",
      "Pair with Chianti or other light red wine",
      "Add fresh basil after baking",
      "Serve with chili oil for spice lovers",
    ],
    dietaryInfo: {
      vegetarian: true,
      glutenFree: false,
      spicy: false,
    },
    reviews: [
      {
        id: 1,
        user: "User 323",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        rating: 4,
        comment:
          "Fantastic pizza! The ingredients tasted very fresh and high quality. The crust was perfect. Highly recommended.",
        date: "1 day ago",
      },
      {
        id: 2,
        user: "User 819",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 5,
        comment:
          "Spicy, savory, and satisfying. The cheese was melted just right. Delivery was fast, and pizza arrived hot.",
        date: "1 week ago",
      },
      {
        id: 3,
        user: "User 420",
        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
        rating: 5,
        comment:
          "Perfect pizza night! The taste was so good, the crust was crispy, and the toppings were flavorful. I couldn't have asked for more.",
        date: "2 day ago",
      },
      {
        id: 4,
        user: "User 750",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        comment:
          "This pizza was a masterpiece! The balance of flavors was incredible, and the crust was flawless. Every slice was a joy.",
        date: "2 week ago",
      },
    ],
    rating: "4.8",
    ratingCount: 218,
    deliveryTime: "39-45",
    isPopular: true,
    lastOrdered: "2025-04-01T05:27:34.500Z",
  },
  {
    id: "soup-central-7094",
    type: "Soup",
    name: "Forest Mushroom",
    cuisine: "French",
    ingredients: [
      "Onions",
      "Beef broth",
      "Butter",
      "Flour",
      "Wild mushrooms",
      "Bacon",
      "Crème fraîche",
    ],
    tags: ["Comfort Food", "Classic"],
    prepTime: "45-60",
    price: 668,
    restaurant: "Soup Central",
    image: forestMushroom,
    calories: 479,
    about:
      "A rustic interpretation enriched with wild mushrooms and smoked bacon.",
    description:
      "A hearty version with mushrooms and bacon for extra richness.",
    servingSuggestions: [
      "Serve piping hot in traditional soup crocks",
      "Accompany with crusty baguette",
      "Use oven-safe bowls for gratinéing",
      "Add a pinch of freshly ground pepper",
      "Pair with a light red wine",
    ],
    dietaryInfo: {
      vegetarian: false,
      glutenFree: false,
      spicy: true,
    },
    reviews: [
      {
        id: 1,
        user: "User 231",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
        comment:
          "Good soup, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
        date: "5 week ago",
      },
      {
        id: 2,
        user: "User 393",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        rating: 4,
        comment:
          "Perfect soup night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
        date: "5 day ago",
      },
      {
        id: 3,
        user: "User 773",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
        rating: 4,
        comment:
          "Amazing soup! The herbs were delicious, and the vegetables were perfectly cooked. The toppings were fresh and plentiful.",
        date: "4 day ago",
      },
      {
        id: 4,
        user: "User 717",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 5,
        comment:
          "This soup experience was a flavor journey! The combination of ingredients was masterful. Every spoonful was a delightful discovery.",
        date: "5 week ago",
      },
      {
        id: 5,
        user: "User 83",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 5,
        comment:
          "Good soup, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
        date: "6 day ago",
      },
      {
        id: 6,
        user: "User 272",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        rating: 4,
        comment:
          "Solid soup. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick lunch.",
        date: "7 week ago",
      },
      {
        id: 7,
        user: "User 678",
        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 4,
        comment:
          "Chicken Noodle Soup's comforting embrace! Tender chicken, hearty noodles. A soothing, flavorful remedy.",
        date: "5 week ago",
      },
      {
        id: 8,
        user: "User 21",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5,
        comment:
          "Good soup, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
        date: "5 day ago",
      },
      {
        id: 9,
        user: "User 227",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        comment:
          "Spicy Thai Tom Yum's vibrant kick! Lemongrass, chilies, fresh herbs. An exotic, invigorating experience.",
        date: "6 day ago",
      },
      {
        id: 10,
        user: "User 678",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        comment:
          "Perfect soup night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
        date: "1 day ago",
      },
      {
        id: 11,
        user: "User 633",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        comment:
          "Soup perfection! Ingredients were fresh, flavors were vibrant. A true culinary delight. Highly recommended.",
        date: "1 week ago",
      },
      {
        id: 12,
        user: "User 324",
        avatar: "https://randomuser.me/api/portraits/women/46.jpg",
        rating: 4,
        comment:
          "Creamy Mushroom Soup's earthy delight! Deep, savory flavors. A decadent, luxurious indulgence.",
        date: "2 week ago",
      },
    ],
    rating: "3.6",
    ratingCount: 146,
    deliveryTime: "67-79",
    isPopular: false,
    lastOrdered: "2025-04-02T05:27:34.500Z",
  },
  {
    id: "gourmet-bites-9844",
    type: "Dumpling",
    name: "Vegetable Potstickers",
    cuisine: "Chinese",
    ingredients: [
      "Dough wrapper",
      "Ginger",
      "Soy sauce",
      "Cabbage",
      "Mushrooms",
      "Carrots",
    ],
    tags: ["Hand-folded", "Juicy"],
    prepTime: "20-30",
    price: 406,
    restaurant: "Gourmet Bites",
    image: vegetablePotstickers,
    calories: 193,
    about:
      "Pan-fried then steamed vegetable dumplings with crispy bottoms. The filling stays vibrant and crunchy.",
    description:
      "Crispy-bottomed vegetable dumplings. Fresh, crunchy vegetable filling.",
    servingSuggestions: [
      "Serve with black vinegar and ginger",
      "Provide chili oil on side",
      "Offer steamer baskets for presentation",
      "Serve immediately after cooking",
      "Include soup spoons for xiao long bao",
    ],
    dietaryInfo: {
      vegetarian: true,
      glutenFree: false,
      spicy: false,
    },
    reviews: [
      {
        id: 1,
        user: "User 640",
        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        rating: 5,
        comment:
          "Great dumplings! The sauces were flavorful, and the meat was tender. The service was fast, and the dumplings arrived hot.",
        date: "2 week ago",
      },
      {
        id: 2,
        user: "User 563",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        rating: 4,
        comment:
          "Char Siu Bao's sweet-savory charm! Fluffy buns, barbecued pork. A comforting, classic Cantonese treat.",
        date: "7 day ago",
      },
      {
        id: 3,
        user: "User 351",
        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        rating: 5,
        comment:
          "This dumpling experience was a flavor journey! The combination of ingredients was masterful. Every bite was a delightful discovery.",
        date: "5 week ago",
      },
      {
        id: 4,
        user: "User 383",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 4,
        comment:
          "Siu Mai's savory goodness! Open-topped delights, flavorful filling. A satisfying bite, perfect for sharing.",
        date: "1 week ago",
      },
    ],
    rating: "4.2",
    ratingCount: 211,
    deliveryTime: "50-49",
    isPopular: true,
    lastOrdered: "2025-04-03T05:27:34.501Z",
  },
]

export const exclusiveDeals = [
  {
    id: 1,
    name: "Urban Eats",
    originalPrice: 1200,
    discountPercentage: 40,
    discountedPrice: 720,
    rating: 4.7,
    cuisine: "Indian",
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    id: 2,
    name: "Ocean Delights",
    originalPrice: 900,
    discountPercentage: 35,
    discountedPrice: 585,
    rating: 4.5,
    cuisine: "Italian",
    deliveryTime: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Sweet Surrender",
    originalPrice: 1500,
    discountPercentage: 25,
    discountedPrice: 1125,
    rating: 4.9,
    cuisine: "Japanese",
    deliveryTime: "30-40 min",
    image:
      "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Soup Central",
    originalPrice: 1100,
    discountPercentage: 30,
    discountedPrice: 770,
    rating: 4.3,
    cuisine: "French",
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Spice Route",
    originalPrice: 800,
    discountPercentage: 20,
    discountedPrice: 640,
    rating: 4.2,
    cuisine: "American",
    deliveryTime: "15-25 min",
    image:
      "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Gourmet Bites",
    originalPrice: 950,
    discountPercentage: 15,
    discountedPrice: 807.5,
    rating: 4.6,
    cuisine: "Indian",
    deliveryTime: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  },
]

export const popularDishes = [
  {
    name: "Soup",
    path: "/category/soup",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Bread",
    path: "/category/bread",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Steak",
    path: "/category/steak",
    image:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Pasta",
    path: "/category/pasta",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Dessert",
    path: "/category/dessert",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Drinks",
    path: "/category/drinks",
    image:
      "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Burgers",
    path: "/category/burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Pizza",
    path: "/category/pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Sushi",
    path: "/category/sushi",
    image:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Salads",
    path: "/category/salads",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
  },
]

export const popularRestaurants = [
  {
    name: "Mcdonald",
    rating: 4.5,
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2019/02/mcdonalds-logo.jpg?quality=82&strip=all",
  },
  {
    name: "Dominoes",
    rating: 4.3,
    image:
      "https://i.pinimg.com/736x/5c/b3/9b/5cb39bb0b3c34fe6fd5736d8a7d629af.jpg",
  },
  {
    name: "Burger King",
    rating: 4.2,
    image:
      "https://www.allrecipes.com/thmb/swXNezpEjAoCXT0I0Y6cDhVjZxA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-burger-king-logo-4x3-13a40f7f403a4e1cb25d0dba19871284.jpg",
  },
  {
    name: "KFC",
    rating: 4.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZ1VgXgLN1MgY9v525GevpepDSwd_TDQR7Q&s",
  },
  {
    name: "Subway",
    rating: 4.4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUznIOFbi8lFHyUqGpiHO_wzpKN2KRu6IeA&s",
  },
  {
    name: "Pizza Hut",
    rating: 4.1,
    image:
      "https://cdn-payscale.com/content/logos/Pizza-Hut-Inc.SOURCE.crunchbase.png",
  },
  {
    name: "Taco Bell",
    rating: 4.1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2P3q3Sn5OGYW4GCkUiBVJAsbYi10MkoasZQ&s",
  },
  {
    name: "Starbucks",
    rating: 4.6,
    image:
      "https://cdn.logoworks.com/wp-content/uploads/2017/06/Untitled-2-640x360-1.png",
  },
  {
    name: "Wendy's",
    rating: 4.4,
    image:
      "https://logocreator.io/wp-content/uploads/2023/11/Wendys-Emblem.png",
  },
  {
    name: "Chik Fil A",
    rating: 4.6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RT1bzoaHXN2h2wmUlrQgwV1ngq6xyHIAQ&s",
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment:
      "The food was delivered quickly and was still hot! Amazing service!",
    rating: 5,
    location: "New York",
    date: "Oct 15, 2024 at 7:30 PM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    comment: "So many restaurant options to choose from. Never disappointed!",
    rating: 4,
    location: "San Francisco",
    date: "Nov 2, 2024 at 12:45 PM",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    comment:
      "Impressed with the packaging - everything was neatly packed and warm.",
    rating: 5,
    location: "Chicago",
    date: "Sep 28, 2024 at 6:15 PM",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "David Lee",
    comment: "The delivery driver was very friendly and professional.",
    rating: 4,
    location: "Los Angeles",
    date: "Dec 10, 2024 at 8:00 PM",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 5,
    name: "Jessica Patel",
    comment: "Great food, but the delivery was a bit late.",
    rating: 3,
    location: "Houston",
    date: "Jan 5, 2025 at 1:30 PM",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 6,
    name: "Kevin Garcia",
    comment: "The app is easy to use and the tracking is accurate.",
    rating: 5,
    location: "Philadelphia",
    date: "Feb 18, 2025 at 6:45 PM",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 7,
    name: "Amanda Brown",
    comment: "Delicious food and excellent customer service.",
    rating: 5,
    location: "Phoenix",
    date: "Mar 3, 2025 at 9:15 PM",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
  },
  {
    id: 8,
    name: "Christopher Wilson",
    comment: "A little pricey, but the quality is worth it.",
    rating: 4,
    location: "San Antonio",
    date: "Apr 20, 2024 at 11:00 AM",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: 9,
    name: "Ashley Davis",
    comment: "My order was incorrect, but they quickly fixed it.",
    rating: 4,
    location: "San Diego",
    date: "May 12, 2024 at 2:30 PM",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 10,
    name: "Matthew Martinez",
    comment: "Best delivery experience I've had in a long time.",
    rating: 5,
    location: "Dallas",
    date: "Jun 25, 2024 at 7:00 PM",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
  },
  {
    id: 11,
    name: "Lauren Anderson",
    comment: "The food was cold when it arrived.",
    rating: 2,
    location: "San Jose",
    date: "July 8, 2024 at 1:15 PM",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 12,
    name: "Brandon Thomas",
    comment: "Great selection of desserts!",
    rating: 4,
    location: "Austin",
    date: "Aug 22, 2024 at 6:00 PM",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 13,
    name: "Stephanie Jackson",
    comment: "The delivery was super fast, even during rush hour.",
    rating: 5,
    location: "Jacksonville",
    date: "Sep 14, 2024 at 10:45 AM",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 14,
    name: "Ryan White",
    comment: "The portions were smaller than expected.",
    rating: 3,
    location: "Columbus",
    date: "Oct 28, 2024 at 3:30 PM",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 15,
    name: "Nicole Harris",
    comment: "The restaurant followed my special instructions perfectly.",
    rating: 5,
    location: "Charlotte",
    date: "Nov 11, 2024 at 8:30 PM",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
]
