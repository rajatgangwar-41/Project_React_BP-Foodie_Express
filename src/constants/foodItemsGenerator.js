const dishTemplates = [
  // ITALIAN
  {
    type: "Pizza",
    names: [
      "Margherita",
      "Pepperoni",
      "Four Cheese",
      "Spicy Salami",
      "Ham & Mushroom",
    ],
    cuisine: "Italian",
    baseIngredients: ["Pizza dough", "Tomato sauce", "Mozzarella"],
    variableIngredients: {
      Margherita: ["Basil", "Olive oil"],
      Pepperoni: ["Pepperoni", "Oregano"],
      "Four Cheese": ["Gorgonzola", "Parmesan", "Fontina"],
      "Spicy Salami": ["Spicy salami", "Chili flakes"],
      "Ham & Mushroom": ["Ham", "Mushrooms"],
    },
    tags: ["Wood-fired", "Authentic", "Fresh", "Shareable", "Comfort Food"],
    prepTime: [15, 25],
    priceRange: [250, 850],
    restaurants: [
      "Urban Eats",
      "Spice Route",
      "Ocean Delights",
      "Dominoes",
      "Pizza Hut",
    ],
    images: {
      Margherita:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      Pepperoni: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
      "Four Cheese":
        "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
      "Spicy Salami":
        "https://images.unsplash.com/photo-1593504049359-9b8d6d4a38c2",
      "Ham & Mushroom":
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
    calories: {
      Margherita: [800, 850],
      Pepperoni: [950, 1050],
      "Four Cheese": [1100, 1200],
      "Spicy Salami": [900, 1000],
      "Ham & Mushroom": [850, 950],
    },
    about: {
      Margherita:
        "Our signature Margherita follows authentic Neapolitan tradition with San Marzano tomato sauce, fresh mozzarella, and hand-picked basil. Cooked in 900°F wood-fired oven for perfect char.",
      Pepperoni:
        "Features spicy pepperoni cups that crisp perfectly, creating flavorful oil pools. Uses blend of fresh and low-moisture mozzarella.",
      "Four Cheese":
        "Luxurious blend of four Italian cheeses (Gorgonzola, Fontina, Parmesan and Mozzarella) carefully balanced for perfect harmony.",
      "Spicy Salami":
        "For spice lovers - combines spicy salami with chili oil. Heat balanced by sweet tomato sauce and creamy mozzarella.",
      "Ham & Mushroom":
        "Premium Italian ham and wild mushrooms paired with three-cheese blend. Added after baking to preserve delicate textures.",
    },
    description: [
      "Classic tomato, mozzarella and basil. Simple, fresh and utterly satisfying.",
      "Spicy pepperoni on melted cheese and rich tomato sauce. Savory delight.",
      "Four cheese creamy decadence. Rich flavorful indulgence.",
      "Spicy salami with chili flakes. Bold flavors, intense heat.",
      "Delicate ham and earthy mushrooms. Sophisticated balanced tastes.",
    ],
    servingSuggestions: [
      "Drizzle with extra virgin olive oil",
      "Pair with Chianti or other light red wine",
      "Add fresh basil after baking",
      "Serve with chili oil for spice lovers",
    ],
    dietaryInfo: {
      vegetarian: ["Margherita", "Four Cheese"],
      glutenFree: ["Pepperoni", "Spicy Salami", "Ham & Mushroom"],
      spicy: ["Spicy Salami"],
    },
    reviews: [
      "Crust perfection! Toppings were fresh, sauce tangy. Each bite sang with flavor. Will definitely order again.",
      "Spicy, savory, and satisfying. The cheese was melted just right. Delivery was fast, and pizza arrived hot.",
      "Rich, creamy, and indulgent. The blend of cheeses was divine. A gourmet experience delivered to my door.",
      "Fiery kick! Perfect for spice lovers. The crust remained crispy despite delivery. A bold and exciting pizza choice.",
      "Savory and sophisticated. The mushrooms were earthy, and the ham delicate. A classy pizza.",
      "Best pizza ever! The crust was perfect, ingredients were fresh, and the sauce was amazing. Highly recommended for all pizza lovers.",
      "Delicious! The cheese was melted perfectly, and the toppings were generous. A great pizza for a cozy night in.",
      "Great pizza! The crust was crispy, and the toppings were flavorful. The delivery was fast, and the pizza was still hot.",
      "Okay pizza. The crust was a little soggy, and the toppings were average. Not bad, but not the best either.",
      "Amazing pizza! The sauce was delicious, and the cheese was perfectly melted. The toppings were fresh and flavorful. Will order again.",
      "Solid pizza. The crust was good, and the toppings were decent. A reliable choice for a casual meal.",
      "Good pizza, but not great. The crust was slightly undercooked, and the toppings were a bit bland. It was fine, but nothing special.",
      "Fantastic pizza! The ingredients tasted very fresh and high quality. The crust was perfect. Highly recommended.",
      "Perfect pizza night! The taste was so good, the crust was crispy, and the toppings were flavorful. I couldn't have asked for more.",
      "This pizza was a masterpiece! The balance of flavors was incredible, and the crust was flawless. Every slice was a joy.",
    ],
  },

  // JAPANESE
  {
    type: "Sushi",
    names: [
      "Nigiri Platter",
      "Rainbow Roll",
      "Dragon Roll",
      "Spicy Tuna Roll",
      "Vegetable Tempura Roll",
    ],
    cuisine: "Japanese",
    baseIngredients: ["Sushi rice", "Nori seaweed", "Wasabi", "Pickled ginger"],
    variableIngredients: {
      "Nigiri Platter": ["Salmon", "Tuna", "Shrimp", "Eel"],
      "Rainbow Roll": ["Crab", "Avocado", "Assorted fish"],
      "Dragon Roll": ["Eel", "Cucumber", "Avocado"],
      "Spicy Tuna Roll": ["Tuna", "Spicy mayo", "Scallions"],
      "Vegetable Tempura Roll": [
        "Tempura vegetables",
        "Sweet potato",
        "Asparagus",
      ],
    },
    tags: ["Fresh", "Seafood", "Healthy", "Best Seller"],
    prepTime: [15, 25],
    priceRange: [250, 1000],
    restaurants: [
      "Sweet Surrender",
      "Gourmet Bites",
      "Ocean Delights",
      "Urban Eats",
    ],
    images: {
      "Nigiri Platter":
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
      "Rainbow Roll":
        "https://images.unsplash.com/photo-1563612116625-5973dc3c3d7a",
      "Dragon Roll":
        "https://images.unsplash.com/photo-1553621042-f6e147245754",
      "Spicy Tuna Roll":
        "https://images.unsplash.com/photo-1563801892300-cc7a90d006d4",
      "Vegetable Tempura Roll":
        "https://images.unsplash.com/photo-1559715745-e1b33a271c8f",
    },
    calories: {
      "Nigiri Platter": [600, 700],
      "Rainbow Roll": [550, 650],
      "Dragon Roll": [700, 800],
      "Spicy Tuna Roll": [500, 600],
      "Vegetable Tempura Roll": [450, 550],
    },
    about: {
      "Nigiri Platter":
        "Selection of premium nigiri featuring market-fresh fish. Each piece is hand-formed with perfectly seasoned rice and a brush of nikiri sauce.",
      "Rainbow Roll":
        "California roll topped with an array of colorful fish slices. The combination of creamy avocado and fresh fish creates perfect harmony.",
      "Dragon Roll":
        "Eel and cucumber inside, topped with avocado slices arranged like dragon scales. Finished with eel sauce and sesame seeds.",
      "Spicy Tuna Roll":
        "Fresh tuna mixed with our house-made spicy mayo, featuring just the right amount of heat. The scallions add a fresh crunch.",
      "Vegetable Tempura Roll":
        "Crispy tempura-battered vegetables wrapped in nori and rice. The contrast of textures makes this roll satisfying.",
    },
    description: [
      "Assorted fresh fish over pressed rice. Simple perfection highlighting quality ingredients.",
      "Colorful assortment of fish over California roll. A feast for eyes and palate.",
      "Eel and avocado create rich, savory flavors. Beautiful dragon-scale presentation.",
      "Tuna with spicy kick balanced by cool rice. Perfect for those who like heat.",
      "Crispy tempura vegetables in sushi form. Satisfying crunch in every bite.",
    ],
    servingSuggestions: [
      "Serve with premium soy sauce",
      "Add wasabi to taste",
      "Refresh palate with pickled ginger",
      "Pair with green tea or sake",
      "Enjoy immediately for best texture",
    ],
    dietaryInfo: {
      vegetarian: ["Vegetable Tempura Roll"],
      glutenFree: ["Nigiri Platter", "Spicy Tuna Roll"],
      spicy: ["Spicy Tuna Roll"],
    },
    reviews: [
      "Nigiri perfection! Fresh fish, expertly sliced. Each piece melted in my mouth. A sublime taste of the ocean, truly divine.",
      "Rainbow Roll artistry! Vibrant colors, harmonious flavors. The avocado was creamy, the fish pristine. A visual and culinary delight.",
      "Dragon Roll decadence! Eel's sweetness, avocado's richness. A perfect balance of textures, each bite a luxurious treat.",
      "Spicy Tuna's fiery kick! Tuna's freshness, mayo's creaminess. A bold, exciting flavor explosion. Left me craving more.",
      "Vegetable Temaki's freshness! Crisp veggies, delicate nori. A light, refreshing option, perfect for a healthy meal.",
      "Sushi excellence! Fish was incredibly fresh, rice perfectly seasoned. A truly authentic Japanese experience. Highly recommended.",
      "Delicious rolls! The combination of flavors was impeccable. The presentation was beautiful, and the service was top-notch.",
      "Great sushi! The fish was tender, and the rolls were well-made. A satisfying meal that I'd order again.",
      "Okay sushi. The fish was average, and the rolls were a bit bland. Not bad, but not particularly memorable.",
      "Amazing sushi! The quality of the fish was outstanding. The chefs were skilled, and the atmosphere was lovely.",
      "Solid sushi. The rolls were decent, and the ingredients seemed fresh. A reliable choice for a quick lunch.",
      "Good sushi, but not great. The rice was a little mushy, and the rolls were loosely packed. It was fine, but nothing special.",
      "Fantastic sushi! The flavors were vibrant, and the textures were perfect. The presentation was artistic and impressive.",
      "Perfect sushi night! Every piece was a delight, the fish was so fresh, and the rolls were amazing. I'll be back soon.",
      "This sushi was a culinary masterpiece! The balance of flavors and textures was incredible. Every bite was an experience.",
    ],
  },

  // INDIAN
  {
    type: "Salad",
    names: [
      "Kachumber Salad",
      "Sprouted Moong Salad",
      "Beetroot & Peanut Salad",
      "Cucumber Raita Salad",
      "Bombay Street Salad",
    ],
    cuisine: "Indian",
    baseIngredients: ["Lemon juice", "Fresh cilantro", "Chaat masala", "Salt"],
    variableIngredients: {
      Kachumber: ["Cucumber", "Tomato", "Onion", "Green chili"],
      "Sprouted Moong": [
        "Sprouted mung beans",
        "Pomegranate seeds",
        "Grated coconut",
      ],
      "Beetroot & Peanut": [
        "Grated beetroot",
        "Roasted peanuts",
        "Grated ginger",
      ],
      "Cucumber Raita": ["Yogurt", "Cumin powder", "Roasted cumin seeds"],
      "Bombay Street": ["Boiled potatoes", "Sev noodles", "Tamarind chutney"],
    },
    tags: ["Fresh", "Healthy", "Vegetarian", "Quick Meal", "Seasonal"],
    prepTime: [10, 20],
    priceRange: [300, 1000],
    restaurants: [
      "Subway",
      "Urban Eats",
      "Fresh Kitchen",
      "Ocean Delights",
      "Sweet Surrender",
    ],
    images: {
      Kachumber: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "Sprouted Moong":
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "Beetroot & Peanut":
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "Cucumber Raita":
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "Bombay Street":
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    calories: {
      Kachumber: [80, 120],
      "Sprouted Moong": [150, 200],
      "Beetroot & Peanut": [180, 230],
      "Cucumber Raita": [120, 160],
      "Bombay Street": [250, 300],
    },
    about: {
      Kachumber:
        "A refreshing chopped salad with crisp vegetables, tossed with lemon and chaat masala. Perfect accompaniment to rich curries.",
      "Sprouted Moong":
        "Protein-packed sprouted mung beans with sweet pomegranate and coconut. Soaked overnight for maximum nutrition.",
      "Beetroot & Peanut":
        "Vibrant grated beetroot with crunchy peanuts and zesty ginger. Earthy flavors balanced with tangy lemon.",
      "Cucumber Raita":
        "Cooling yogurt-based salad with cumin and cucumber. Helps balance spicy Indian meals.",
      "Bombay Street":
        "Hearty street-style salad with boiled potatoes, crunchy sev, and sweet-tangy chutneys.",
    },
    description: [
      "Crunchy fresh vegetables with zesty lemon dressing - the perfect palate cleanser",
      "Nutritious sprouted beans with pops of juicy pomegranate - a protein powerhouse",
      "Vibrant purple beetroot with nutty crunch - as beautiful as it is delicious",
      "Cool and creamy yogurt salad - the perfect antidote to spicy dishes",
      "Mumbai street food favorite - loaded with textures and flavors in every bite",
    ],
    servingSuggestions: [
      "Serve chilled for maximum refreshment",
      "Garnish with extra cilantro and lemon wedges",
      "Sprinkle additional chaat masala before serving",
      "Pair with hot naan or papadums",
      "Serve in small bowls as an appetizer",
    ],
    dietaryInfo: {
      vegetarian: [
        "Kachumber",
        "Sprouted Moong",
        "Beetroot & Peanut",
        "Cucumber Raita",
        "Bombay Street",
      ],
      glutenFree: [
        "Kachumber",
        "Sprouted Moong",
        "Beetroot & Peanut",
        "Cucumber Raita",
      ],
      spicy: ["Kachumber", "Bombay Street"],
    },
    reviews: [
      "Kachumber Salad's refreshing crunch! Crisp cucumbers, tangy tomatoes. A vibrant, light start to any Indian meal.",
      "Sprouts Salad's wholesome delight! Nutty sprouts, zesty lemon. A healthy, protein-packed side, bursting with flavor.",
      "Corn Chaat's sweet-spicy kick! Roasted corn, tangy tamarind. A flavorful, street-style treat, utterly addictive.",
      "Chickpea Salad's hearty blend! Tender chickpeas, fresh herbs. A satisfying, protein-rich salad with rustic charm.",
      "Fruit Chaat's sweet-tangy medley! Seasonal fruits, chaat masala. A refreshing, vibrant dessert or snack.",
      "Salad perfection! Ingredients were fresh, flavors were vibrant. A true Indian culinary delight. Highly recommended.",
      "Delicious salad! The dressing was flavorful, and the vegetables were perfectly crisp. A great side for any dish.",
      "Great salad! The spices were aromatic, and the textures were delightful. The service was fast, and the salad arrived fresh.",
      "Okay salad. The dressing was average, and the ingredients were a bit bland. Not bad, but not particularly exciting.",
      "Amazing salad! The herbs were delicious, and the fruits were perfectly ripe. The toppings were fresh and plentiful.",
      "Solid salad. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick bite.",
      "Good salad, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic salad! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect salad night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This salad experience was a flavor journey! The combination of ingredients was masterful. Every bite was a delightful discovery.",
    ],
  },

  {
    type: "Beverage",
    names: [
      "Masala Chai",
      "Filter Kaapi",
      "Mango Lassi",
      "Nimbu Pani",
      "Thandai",
      "Indian Cold Coffee",
      "Haldi Doodh",
    ],
    cuisine: "Indian",
    baseIngredients: ["Milk", "Sugar", "Spices", "Water"],
    variableIngredients: {
      "Masala Chai": ["Black tea", "Cardamom", "Ginger", "Cinnamon", "Cloves"],
      "Filter Kaapi": ["Dark roast coffee", "Chicory"],
      "Mango Lassi": ["Yogurt", "Mango pulp", "Cardamom"],
      "Nimbu Pani": ["Lemon", "Black salt", "Roasted cumin", "Mint"],
      Thandai: [
        "Almonds",
        "Pistachios",
        "Poppy seeds",
        "Rose water",
        "Saffron",
      ],
      "Indian Cold Coffee": ["Coffee", "Vanilla ice cream"],
      "Haldi Doodh": ["Turmeric", "Black pepper", "Cinnamon", "Honey"],
    },
    tags: ["Quick Meal", "Classic", "Vegetarian", "Breakfast", "Best Seller"],
    prepTime: [5, 30],
    priceRange: [100, 500],
    restaurants: [
      "StarBucks",
      "Ocean Delights",
      "Fresh Kitchen",
      "Macdonald",
      "Wendy's",
    ],
    images: {
      "Masala Chai":
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
      "Filter Kaapi":
        "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      "Mango Lassi":
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa96bd",
      "Nimbu Pani": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      Thandai: "https://images.unsplash.com/photo-1589302168068-564964a0b9a5",
      "Indian Cold Coffee":
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      "Haldi Doodh":
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
    },
    calories: {
      "Masala Chai": 120,
      "Filter Kaapi": 150,
      "Mango Lassi": 250,
      "Nimbu Pani": 80,
      Thandai: 300,
      "Indian Cold Coffee": 280,
      "Haldi Doodh": 180,
    },
    about: {
      "Masala Chai":
        "India's favorite spiced tea brewed with aromatic spices and milk, served piping hot",
      "Filter Kaapi":
        "Strong South Indian coffee brewed in traditional metal filter, known for its frothy texture",
      "Mango Lassi":
        "Creamy yogurt blended with sweet mango pulp and cardamom - summer favorite",
      "Nimbu Pani":
        "Tangy lemonade with Indian spices like black salt and roasted cumin",
      Thandai:
        "Nutty festival drink loaded with almonds, spices and often served during Holi",
      "Indian Cold Coffee":
        "Iced coffee version with milk and vanilla ice cream - richer than western iced coffee",
      "Haldi Doodh":
        "Golden turmeric milk with healing properties, traditional Ayurvedic remedy",
    },
    description: [
      "Spiced tea that warms the soul - perfect morning starter or evening relaxer",
      "Intensely aromatic coffee with signature South Indian froth",
      "Sweet, creamy mango yogurt drink that cools the palate",
      "Ultra-refreshing spiced lemonade - India's answer to electrolyte drinks",
      "Nut-packed festival drink that's both nourishing and intoxicating",
      "Dessert-like iced coffee that's more milkshake than coffee",
      "Golden healing elixir that's as medicinal as it is delicious",
    ],
    servingSuggestions: [
      "Serve chai in clay kulhads for authentic flavor",
      "Pour filter coffee between tumbler and davarah to create froth",
      "Blend lassi with ice for extra thick consistency",
      "Add mint leaves to nimbu pani for freshness",
      "Garnish thandai with rose petals during festivals",
      "Top cold coffee with whipped cream and chocolate shavings",
      "Serve haldi doodh in copper cups for Ayurvedic benefits",
    ],
    dietaryInfo: {
      vegetarian: [
        "Masala Chai",
        "Filter Kaapi",
        "Mango Lassi",
        "Nimbu Pani",
        "Thandai",
        "Indian Cold Coffee",
        "Haldi Doodh",
      ],
      glutenFree: [],
      spicy: [],
    },
    reviews: [
      "Masala Chai's aromatic warmth! Spiced tea, creamy milk. A comforting classic, perfect for any time of day.",
      "Mango Lassi's sweet, creamy delight! Ripe mangoes, chilled yogurt. A refreshing, tropical indulgence.",
      "Jaljeera's tangy, spicy kick! Mint, cumin, tamarind. An invigorating, digestive-friendly drink.",
      "Rose Sharbat's floral elegance! Rose petals, cooling syrup. A delicate, fragrant beverage, perfect for celebrations.",
      "Buttermilk's refreshing simplicity! Yogurt, spices, fresh herbs. A light, cooling drink, perfect for hot days.",
      "Beverage perfection! Ingredients were fresh, flavors were vibrant. A true Indian culinary delight. Highly recommended.",
      "Delicious drink! The spices were perfectly balanced, and the textures were delightful. A great accompaniment to any meal.",
      "Great beverage! The flavors were aromatic, and the temperature was perfect. The service was fast, and the drink arrived chilled.",
      "Okay beverage. The flavors were average, and the texture was a bit bland. Not bad, but not particularly exciting.",
      "Amazing beverage! The herbs were delicious, and the fruits were perfectly ripe. The ingredients were fresh and plentiful.",
      "Solid beverage. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick refreshment.",
      "Good beverage, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic beverage! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect beverage experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This beverage experience was a flavor journey! The combination of ingredients was masterful. Every sip was a delightful discovery.",
    ],
  },

  {
    type: "Dessert",
    names: ["Gulab Jamun", "Rasgulla", "Gajar ka Halwa", "Jalebi", "Kheer"],
    cuisine: "Indian",
    baseIngredients: ["Sugar", "Cardamom", "Ghee", "Milk", "Saffron"],
    variableIngredients: {
      "Gulab Jamun": ["Khoya", "Flour", "Rose water"],
      Rasgulla: ["Chenna", "Semolina", "Lemon juice"],
      "Gajar ka Halwa": ["Carrots", "Nuts", "Condensed milk"],
      Jalebi: ["Maida", "Yogurt", "Food coloring"],
      Kheer: ["Rice", "Dry fruits", "Pistachios"],
    },
    tags: ["Sweet", "Vegetarian", "Best Seller", "Classic", "Breakfast"],
    prepTime: [30, 120],
    priceRange: [200, 750],
    restaurants: ["Urban Eats", "Fresh Kitchen", "Sweet Surrender"],
    images: {
      "Gulab Jamun":
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
      Rasgulla: "https://images.unsplash.com/photo-1601050690117-94f5f6fa96bd",
      "Gajar ka Halwa":
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
      Jalebi: "https://images.unsplash.com/photo-1589302168068-564964a0b9a5",
      Kheer: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    },
    calories: {
      "Gulab Jamun": [250, 300],
      Rasgulla: [180, 220],
      "Gajar ka Halwa": [350, 400],
      Jalebi: [200, 250],
      Kheer: [280, 330],
    },
    about: {
      "Gulab Jamun":
        "Golden brown milk-solid dumplings soaked in rose-flavored sugar syrup. A festival favorite across India.",
      Rasgulla:
        "Spongy Bengali cottage cheese balls in light sugar syrup. Known for its melt-in-mouth texture.",
      "Gajar ka Halwa":
        "Slow-cooked carrot pudding with milk, ghee and nuts. Winter specialty in North India.",
      Jalebi:
        "Crispy orange swirls soaked in sugar syrup. Best served hot with rabri or milk.",
      Kheer:
        "Creamy rice pudding with cardamom and dry fruits. Served at celebrations and temples.",
    },
    description: [
      "Soft, syrup-soaked balls with rose aroma - the crown jewel of Indian sweets",
      "Cloud-like cheese balls floating in light syrup - Bengal's gift to the world",
      "Carrot strands transformed into rich halwa with slow cooking - winter comfort food",
      "Crispy, syrupy spirals - India's answer to funnel cakes with floral notes",
      "Fragrant rice pudding that turns simple ingredients into celebration food",
    ],
    servingSuggestions: [
      "Serve Gulab Jamun warm with vanilla ice cream",
      "Chill Rasgullas before serving in clay pots",
      "Garnish Gajar Halwa with silver leaf during weddings",
      "Pair hot Jalebis with chilled rabri",
      "Serve Kheer in earthen bowls garnished with pistachios",
    ],
    dietaryInfo: {
      vegetarian: [
        "Gulab Jamun",
        "Rasgulla",
        "Gajar ka Halwa",
        "Jalebi",
        "Kheer",
      ],
      glutenFree: ["Rasgulla", "Gajar ka Halwa"],
      spicy: [],
    },
    reviews: [
      "Gulab Jamun's syrupy sweetness! Soft, fried dough balls. A warm, comforting end to any Indian meal.",
      "Gajar Halwa's rich, carrot delight! Grated carrots, creamy milk. A decadent, flavorful dessert, truly irresistible.",
      "Rasmalai's milky indulgence! Soft cheese patties, fragrant milk. A delicate, creamy treat, melts in your mouth.",
      "Jalebi's crispy, sugary kick! Fried spirals, sweet syrup. A delightful, crunchy dessert, a true Indian classic.",
      "Kulfi's creamy, frozen bliss! Flavored milk, nuts. A rich, dense ice cream, perfect for hot days.",
      "Dessert perfection! Ingredients were fresh, flavors were vibrant. A true Indian culinary delight. Highly recommended.",
      "Delicious dessert! The sweetness was perfectly balanced, and the textures were delightful. A great end to any meal.",
      "Great dessert! The spices were aromatic, and the richness was perfect. The service was fast, and the dessert arrived fresh.",
      "Okay dessert. The sweetness was average, and the texture was a bit bland. Not bad, but not particularly exciting.",
      "Amazing dessert! The nuts were delicious, and the spices were perfectly blended. The ingredients were fresh and plentiful.",
      "Solid dessert. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a sweet treat.",
      "Good dessert, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic dessert! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect dessert experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This dessert experience was a flavor journey! The combination of ingredients was masterful. Every bite was a delightful discovery.",
    ],
  },

  {
    type: "Samosa",
    names: [
      "Classic Potato Samosa",
      "Keema Samosa",
      "Vegetable Samosa",
      "Paneer Samosa",
      "Sweet Samosa",
    ],
    cuisine: "Indian",
    baseIngredients: [
      "Maida",
      "Ghee",
      "Cumin seeds",
      "Coriander powder",
      "Turmeric",
      "Salt",
    ],
    variableIngredients: {
      "Classic Potato": [
        "Potatoes",
        "Peas",
        "Ginger",
        "Green chilies",
        "Garam masala",
      ],
      Keema: ["Minced meat", "Onions", "Garlic", "Red chili powder"],
      Vegetable: ["Carrots", "Beans", "Corn", "Bell peppers"],
      Paneer: ["Paneer cubes", "Kasuri methi", "Red chili flakes"],
      Sweet: ["Khoya", "Nuts", "Cardamom", "Sugar"],
    },
    tags: [
      "Vegetarian",
      "Spicy",
      "Street Food",
      "Best Seller",
      "Fresh",
      "Breakfast",
    ],
    prepTime: [40, 60],
    priceRange: [30, 150],
    restaurants: [
      "Gourmet Bites",
      "Urban Eats",
      "Spice Route",
      "Fresh Kitchen",
      "Sweet Surrender",
      "Ocean Delights",
    ],
    images: {
      "Classic Potato":
        "https://images.unsplash.com/photo-1589302168068-564964a0b9a5",
      Keema: "https://images.unsplash.com/photo-1601050690117-94f5f6fa96bd",
      Vegetable: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      Paneer: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
      Sweet: "https://images.unsplash.com/photo-1561758033-7e924f619b47",
    },
    calories: {
      "Classic Potato": 250,
      Keema: 300,
      Vegetable: 220,
      Paneer: 280,
      Sweet: 320,
    },
    about: {
      "Classic Potato":
        "The quintessential samosa with spiced potato-pea filling, crispy outer shell, and perfect triangular shape",
      Keema:
        "Non-vegetarian delight with spiced minced meat filling, popular in Mughlai cuisine",
      Vegetable:
        "Healthier version packed with colorful vegetables, great for kids",
      Paneer:
        "Rich cottage cheese filling with aromatic dried fenugreek leaves",
      Sweet:
        "Dessert samosa with milk solids and nuts, often served at festivals",
    },
    description: [
      "Crispy pastry pockets with perfectly spiced potato filling - India's favorite tea-time companion",
      "Juicy minced meat filling wrapped in flaky crust - a meat-lover's dream",
      "Colorful vegetable stuffing that makes this guilty pleasure slightly virtuous",
      "Creamy paneer cubes in aromatic masala - vegetarian luxury in every bite",
      "Crispy parcels of sweet khoya and nuts - the perfect ending to a meal",
    ],
    servingSuggestions: [
      "Serve hot with mint chutney and tamarind sauce",
      "Pair with masala chai for perfect tea-time combo",
      "Garnish sweet samosas with powdered sugar and edible silver leaf",
      "Accompany with onion rings and lemon wedges",
      "Serve in newspaper cones for authentic street food experience",
    ],
    dietaryInfo: {
      vegetarian: ["Classic Potato", "Keema", "Vegetable", "Paneer", "Sweet"],
      glutenFree: ["Classic Potato", "Keema", "Vegetable", "Paneer", "Sweet"],
      spicyLevel: ["Classic Potato", "Keema", "Vegetable", "Paneer", "Sweet"],
    },
    reviews: [
      "Samosa perfection! Crispy crust, flavorful filling. A classic Indian snack, utterly addictive.",
      "Potato Samosa's savory delight! Spiced potatoes, flaky pastry. A comforting, hearty treat, perfect for any time.",
      "Keema Samosa's rich, meaty goodness! Ground meat, aromatic spices. A flavorful, satisfying snack.",
      "Vegetable Samosa's vibrant blend! Peas, carrots, spices. A light, yet flavorful vegetarian option.",
      "Paneer Samosa's creamy indulgence! Cottage cheese, delicate spices. A rich, decadent snack.",
      "Samosa perfection! Ingredients were fresh, flavors were vibrant. A true Indian culinary delight. Highly recommended.",
      "Delicious samosa! The filling was perfectly spiced, and the crust was crispy. A great snack for any occasion.",
      "Great samosa! The spices were aromatic, and the texture was delightful. The service was fast, and the samosa arrived hot.",
      "Okay samosa. The filling was average, and the crust was a bit soggy. Not bad, but not particularly exciting.",
      "Amazing samosa! The herbs were delicious, and the spices were perfectly blended. The filling was fresh and plentiful.",
      "Solid samosa. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick bite.",
      "Good samosa, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic samosa! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect samosa experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This samosa experience was a flavor journey! The combination of ingredients was masterful. Every bite was a delightful discovery.",
    ],
  },

  {
    type: "Bread",
    names: [
      "Naan",
      "Roti/Chapati",
      "Paratha",
      "Puri",
      "Bhatura",
      "Kulcha",
      "Appam",
    ],
    cuisine: "Indian",
    baseIngredients: ["Flour", "Water", "Salt", "Oil/Ghee"],
    variableIngredients: {
      Naan: ["Yogurt", "Yeast", "Nigella seeds"],
      "Roti/Chapati": ["Whole wheat flour", "Ghee"],
      Paratha: ["Stuffing options", "Layered dough"],
      Puri: ["Semolina", "Oil for deep frying"],
      Bhatura: ["Yogurt", "Baking soda", "Maida"],
      Kulcha: ["Baking powder", "Milk", "Butter"],
      Appam: ["Rice flour", "Coconut milk", "Yeast"],
    },
    tags: ["Healthy", "Vegetarian", "Comfort Food", "Breakfast", "Classic"],
    prepTime: [10, 15],
    priceRange: [20, 100], // Street food to restaurant prices
    restaurants: [
      "Gourmet Bites",
      "Urban Eats",
      "Spice Route",
      "Fresh Kitchen",
      "Sweet Surrender",
      "Ocean Delights",
    ],
    images: {
      Naan: "https://images.unsplash.com/photo-1601050690117-94f5f6fa96bd",
      "Roti/Chapati":
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
      Paratha: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      Puri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      Bhatura: "https://images.unsplash.com/photo-1561758033-7e924f619b47",
      Kulcha: "https://images.unsplash.com/photo-1589302168068-564964a0b9a5",
      Appam: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    },
    calories: {
      Naan: 320,
      "Roti/Chapati": 120,
      Paratha: 250,
      Puri: 180,
      Bhatura: 350,
      Kulcha: 280,
      Appam: 200,
    },
    about: {
      Naan: "Leavened oven-baked bread with chewy texture, traditionally cooked in tandoor",
      "Roti/Chapati":
        "Daily unleaved flatbread cooked on tawa, staple across Indian homes",
      Paratha: "Layered/flaky bread often stuffed with spiced fillings",
      Puri: "Deep-fried puffy bread served at special occasions",
      Bhatura: "Fermented fluffy bread paired with chole (chickpea curry)",
      Kulcha: "Amritsari specialty - leavened bread with stuffing options",
      Appam: "South Indian fermented rice bowl-shaped bread with crispy edges",
    },
    description: [
      "Soft, chewy tandoor-baked bread perfect for scooping curries",
      "Healthy everyday whole wheat flatbread - India's staple carb",
      "Flaky layered bread that can be plain or stuffed with delicious fillings",
      "Golden puffy fried bread that's festival favorite",
      "Pillowy fermented bread that's the perfect partner for chole",
      "Stuffed Amritsari delight with melt-in-mouth texture",
      "Lacy fermented rice bread with soft center and crispy edges",
    ],
    servingSuggestions: [
      "Serve naan hot with butter chicken or dal makhani",
      "Pair roti with simple dal and sabzi for daily meals",
      "Enjoy paratha with yogurt, pickle or butter",
      "Serve puri with potato curry or halwa",
      "Combine bhatura with spicy chole",
      "Stuff kulcha with paneer or potato",
      "Serve appam with coconut stew or egg curry",
    ],
    dietaryInfo: {
      vegetarian: [
        "Naan",
        "Roti/Chapati",
        "Paratha",
        "Puri",
        "Bhatura",
        "Kulcha",
        "Appam",
      ],
      glutenFree: [
        "Naan",
        "Roti/Chapati",
        "Paratha",
        "Puri",
        "Bhatura",
        "Kulcha",
        "Appam",
      ],
      spicy: [
        "Naan",
        "Roti/Chapati",
        "Paratha",
        "Puri",
        "Bhatura",
        "Kulcha",
        "Appam",
      ],
    },
    reviews: [
      "Naan perfection! Soft, fluffy, slightly charred. A perfect accompaniment to any Indian dish.",
      "Garlic Naan's aromatic delight! Buttery, garlicky goodness. A flavorful, irresistible bread.",
      "Roti's simple charm! Whole wheat, thin, and soft. A comforting, everyday staple.",
      "Paratha's layered delight! Flaky, buttery, and satisfying. A hearty, filling bread.",
      "Kulcha's stuffed treasure! Soft bread, flavorful filling. A delicious, indulgent treat.",
      "Bread perfection! Ingredients were fresh, textures were vibrant. A true Indian culinary delight. Highly recommended.",
      "Delicious bread! The warmth and softness were perfect. A great addition to any Indian meal.",
      "Great bread! The flavors were aromatic, and the texture was delightful. The service was fast, and the bread arrived hot.",
      "Okay bread. The texture was average, and the flavor was a bit bland. Not bad, but not particularly exciting.",
      "Amazing bread! The herbs and spices were perfectly blended. The bread was fresh and plentiful.",
      "Solid bread. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for any course.",
      "Good bread, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic bread! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect bread experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This bread experience was a culinary journey! The combination of textures and flavors was masterful. Every bite was a delightful discovery.",
    ],
  },

  {
    type: "Curry",
    names: [
      "Butter Chicken",
      "Paneer Tikka Masala",
      "Chana Masala",
      "Rogan Josh",
      "Malai Kofta",
      "Dal Tadka",
      "Fish Curry",
    ],
    cuisine: "Indian",
    baseIngredients: [
      "Onions",
      "Tomatoes",
      "Ginger-garlic paste",
      "Turmeric",
      "Coriander powder",
      "Cumin",
      "Garam masala",
    ],
    variableIngredients: {
      "Butter Chicken": ["Chicken", "Butter", "Cream", "Kasuri methi"],
      "Paneer Tikka Masala": ["Paneer", "Capsicum", "Cream", "Smoked paprika"],
      "Chana Masala": ["Chickpeas", "Amchur", "Tea leaves (for color)"],
      "Rogan Josh": ["Lamb", "Kashmiri chilies", "Fennel", "Yogurt"],
      "Malai Kofta": ["Potato-paneer balls", "Cashew paste", "Saffron"],
      "Dal Tadka": ["Yellow lentils", "Tadka (tempering)", "Ghee"],
      "Fish Curry": ["Fish fillets", "Coconut milk", "Kokum", "Curry leaves"],
    },
    tags: ["Sweet", "Spicy", "Classic", "Best Seller", "Comfort Food"],
    prepTime: [30, 45],
    priceRange: [200, 850], // Street food to restaurant prices
    restaurants: [
      "Urban Eats",
      "Spice Route",
      "Ocean Delights",
      "Sweet Surrender",
      "Gourmet Bites",
    ],
    images: {
      "Butter Chicken":
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa96bd",
      "Paneer Tikka Masala":
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
      "Chana Masala":
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "Rogan Josh":
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      "Malai Kofta":
        "https://images.unsplash.com/photo-1561758033-7e924f619b47",
      "Dal Tadka":
        "https://images.unsplash.com/photo-1589302168068-564964a0b9a5",
      "Fish Curry": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    },
    calories: {
      "Butter Chicken": 450,
      "Paneer Tikka Masala": 380,
      "Chana Masala": 320,
      "Rogan Josh": 420,
      "Malai Kofta": 400,
      "Dal Tadka": 280,
      "Fish Curry": 350,
    },
    about: {
      "Butter Chicken":
        "Creamy tomato-based curry with tender chicken pieces, invented in Delhi",
      "Paneer Tikka Masala":
        "Vegetarian counterpart to butter chicken with grilled paneer cubes",
      "Chana Masala":
        "Spicy chickpea curry popular as street food and home meal",
      "Rogan Josh": "Aromatic lamb curry from Kashmir with deep red color",
      "Malai Kofta": "Rich dish with fried veggie balls in creamy cashew sauce",
      "Dal Tadka": "Comforting lentil dish tempered with aromatic spices",
      "Fish Curry":
        "Coastal specialty with coconut-based gravy and tangy kokum",
    },
    description: [
      "Velvety smooth tomato gravy with smoky grilled chicken - India's most famous curry",
      "Creamy orange-hued gravy with charred paneer cubes - vegetarian delight",
      "Hearty chickpeas in robust spicy gravy - protein-packed comfort food",
      "Fall-off-the-bone lamb in fragrant red gravy - Kashmiri royalty",
      "Golden fried veggie dumplings in luxurious cashew sauce - festive favorite",
      "Humble lentils transformed by aromatic tempering - India's soul food",
      "Tender fish in coconut-tamarind gravy - coastal flavors at their best",
    ],
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
      vegetarian: [
        "Paneer Tikka Masala",
        "Chana Masala",
        "Malai Kofta",
        "Dal Tadka",
      ],
      glutenFree: ["All except those served with bread"],
      spicy: [
        "Butter Chicken",
        "Paneer Tikka Masala",
        "Chana Masala",
        "Rogan Josh",
        "Malai Kofta",
        "Dal Tadka",
        "Fish Curry-High",
      ],
    },
    reviews: [
      "Butter Chicken perfection! Creamy, tomato-rich, tender chicken. A truly indulgent and comforting dish.",
      "Paneer Tikka Masala's vegetarian delight! Soft paneer, vibrant spices, rich gravy. A flavorful, satisfying choice.",
      "Lamb Rogan Josh's aromatic richness! Tender lamb, Kashmiri chilies, bold flavors. A deeply satisfying experience.",
      "Chana Masala's hearty, chickpea goodness! Tangy tomatoes, robust spices. A flavorful, protein-packed vegetarian option.",
      "Malai Kofta's creamy, vegetable bliss! Soft kofta balls, rich cashew gravy. A decadent, delightful treat.",
      "Curry perfection! Ingredients were fresh, spices were vibrant. A true Indian culinary delight. Highly recommended.",
      "Delicious curry! The sauce was perfectly balanced, and the protein was tender. A great meal for any occasion.",
      "Great curry! The spices were aromatic, and the texture was delightful. The service was fast, and the curry arrived hot.",
      "Okay curry. The sauce was average, and the protein was a bit tough. Not bad, but not particularly exciting.",
      "Amazing curry! The herbs and spices were perfectly blended. The protein was fresh and plentiful.",
      "Solid curry. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for any meal.",
      "Good curry, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic curry! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect curry experience! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This curry experience was a culinary journey! The combination of textures and flavors was masterful. Every bite was a delightful discovery.",
    ],
  },

  // MEXICAN
  {
    type: "Tacos",
    names: ["Al Pastor", "Carnitas", "Baja Fish", "Vegetarian", "Carne Asada"],
    cuisine: "Mexican",
    baseIngredients: ["Corn tortillas", "Cilantro", "Onions", "Lime"],
    variableIngredients: {
      "Al Pastor": ["Marinated pork", "Pineapple"],
      Carnitas: ["Braised pork", "Orange zest"],
      "Baja Fish": ["Beer-battered fish", "Cabbage slaw"],
      Vegetarian: ["Grilled vegetables", "Black beans"],
      "Carne Asada": ["Grilled steak", "Chimichurri"],
    },
    tags: ["Street Food", "New", "Seasonal", "Best Seller"],
    prepTime: [10, 20],
    priceRange: [500, 1000],
    restaurants: ["Taco Fiesta", "Fresh Kitchen", "Gourmet Bites", "Taco Bell"],
    images: {
      "Al Pastor":
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
      Carnitas: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      "Baja Fish": "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
      Vegetarian: "https://images.unsplash.com/photo-1547592180-85f173990554",
      "Carne Asada":
        "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f",
    },
    calories: {
      "Al Pastor": [350, 450],
      Carnitas: [400, 500],
      "Baja Fish": [300, 400],
      Vegetarian: [250, 350],
      "Carne Asada": [450, 550],
    },
    about: {
      "Al Pastor":
        "Marinated pork cooked on a vertical spit with pineapple for sweetness. Served with chopped onions, cilantro and our house-made salsa verde.",
      Carnitas:
        "Slow-braised pork shoulder cooked with orange and spices until tender. Crisped to perfection before serving for textural contrast.",
      "Baja Fish":
        "Beer-battered white fish with crispy cabbage slaw and chipotle crema. Inspired by the famous fish tacos of Baja California.",
      Vegetarian:
        "Grilled seasonal vegetables with black bean spread and avocado crema. A fresh, satisfying option packed with flavor.",
      "Carne Asada":
        "Premium skirt steak marinated in citrus and spices, grilled to order. Topped with chimichurri made with fresh herbs from our garden.",
    },
    description: [
      "Marinated pork with sweet pineapple. Juicy, flavorful with perfect char.",
      "Slow-braised pork with crispy edges. Rich, tender meat in every bite.",
      "Crispy beer-battered fish with cool slaw. Light yet satisfying texture.",
      "Grilled seasonal vegetables with creamy beans. Fresh and full of flavor.",
      "Grilled steak with herby chimichurri. Meaty with bright, fresh notes.",
    ],
    servingSuggestions: [
      "Serve with lime wedges to squeeze",
      "Add hot sauce or salsa to taste",
      "Pair with Mexican beer or margaritas",
      "Serve with radish slices for crunch",
      "Offer both corn and flour tortillas",
    ],
    dietaryInfo: {
      vegetarian: ["Vegetarian"],
      glutenFree: ["Al Pastor", "Carnitas", "Carne Asada", "Vegetarian"],
      spicy: ["Al Pastor", "Baja Fish"],
    },
    reviews: [
      "Al Pastor's sweet-savory blend! Marinated pork, pineapple's zest. Each bite a fiesta of flavors. Truly a street food gem.",
      "Carnitas' tender, rich delight! Braised pork, citrus notes. The meat melted, the tortillas soft. A comforting, authentic experience.",
      "Baja Fish's crispy, light perfection! Beer-battered fish, slaw's crunch. A refreshing taco, perfect for a sunny day.",
      "Vegetarian's vibrant medley! Grilled veggies, black beans' heartiness. A flavorful, satisfying meat-free option. Loved it.",
      "Carne Asada's smoky, savory charm! Grilled steak, chimichurri's tang. A rich, robust taco, full of bold flavors.",
      "Taco perfection! Ingredients were fresh, flavors were vibrant. A true taste of Mexico. Highly recommended for all taco lovers.",
      "Delicious tacos! The fillings were generous, and the tortillas were warm. A great meal for a casual outing.",
      "Great tacos! The toppings were flavorful, and the meat was tender. The service was fast, and the tacos arrived hot.",
      "Okay tacos. The fillings were average, and the tortillas were a bit dry. Not bad, but not particularly exciting.",
      "Amazing tacos! The salsa was delicious, and the meat was perfectly seasoned. The toppings were fresh and plentiful.",
      "Solid tacos. The fillings were decent, and the flavors were balanced. A reliable choice for a quick meal.",
      "Good tacos, but not great. The tortillas were a bit chewy, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic tacos! The ingredients were fresh and high quality. The flavors were authentic and delicious.",
      "Perfect taco night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This taco experience was a flavor explosion! The combination of ingredients was masterful. Every bite was a delight.",
    ],
  },

  // THAI
  {
    type: "Noodles",
    names: [
      "Pad Thai",
      "Pad See Ew",
      "Drunken Noodles",
      "Glass Noodle Salad",
      "Boat Noodles",
    ],
    cuisine: "Thai",
    baseIngredients: [
      "Rice noodles",
      "Fish sauce",
      "Garlic",
      "Palm sugar",
      "Lime",
      "Thai chili",
    ],
    variableIngredients: {
      "Pad Thai": ["Egg", "Tofu", "Shrimp", "Bean sprouts", "Peanuts"],
      "Pad See Ew": ["Chinese broccoli", "Dark soy sauce", "Chicken/Pork"],
      "Drunken Noodles": [
        "Thai basil",
        "Bell peppers",
        "Holy basil",
        "Meat of choice",
      ],
      "Glass Noodle Salad": ["Glass noodles", "Shrimp", "Minced pork", "Mint"],
      "Boat Noodles": [
        "Beef slices",
        "Pork blood",
        "Bean sprouts",
        "Thai basil",
      ],
    },
    tags: ["Street Food", "Spicy", "Classic", "Quick Meal", "Dairy-Free"],
    prepTime: [15, 30],
    priceRange: [150, 450], // Street food to restaurant prices
    restaurants: [
      "Noodle World",
      "Fresh Kitchen",
      "Spice Route",
      "Gourmet Bites",
    ],
    images: {
      "Pad Thai": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      "Pad See Ew": "https://images.unsplash.com/photo-1553621042-f6e147245754",
      "Drunken Noodles":
        "https://images.unsplash.com/photo-1563245372-f21724e3856d",
      "Glass Noodle Salad":
        "https://images.unsplash.com/photo-1559715745-e1b33a271c8f",
      "Boat Noodles":
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    },
    calories: {
      "Pad Thai": [600, 800],
      "Pad See Ew": [550, 700],
      "Drunken Noodles": [700, 900],
      "Glass Noodle Salad": [400, 550],
      "Boat Noodles": [450, 600],
    },
    about: {
      "Pad Thai":
        "Thailand's most famous export - stir-fried rice noodles with perfect sweet-savory-tangy balance, topped with crushed peanuts",
      "Pad See Ew":
        "Comforting wide noodles caramelized in dark soy sauce with Chinese broccoli and your choice of protein",
      "Drunken Noodles":
        "Spicy wide rice noodles with holy basil and vegetables - allegedly great for hangovers",
      "Glass Noodle Salad":
        "Light and refreshing clear noodle salad with zesty lime dressing and protein toppings",
      "Boat Noodles":
        "Rich, dark broth noodles originally sold from boats in Bangkok's canals, with intense meaty flavor",
    },
    description: [
      "Sweet, tangy and nutty stir-fried noodles - Thailand's signature dish",
      "Caramelized wide noodles with smoky soy flavor - simple perfection",
      "Fiery wide noodles with aromatic basil - not for the faint-hearted",
      "Light translucent noodles in tangy dressing - perfect summer meal",
      "Dark, intense broth noodles with meaty depth - adventurous eating",
    ],
    servingSuggestions: [
      "Serve Pad Thai with lime wedges and extra crushed peanuts",
      "Pair Pad See Ew with chili vinegar on the side",
      "Offer Drunken Noodles with cold beer to combat the heat",
      "Present Glass Noodle Salad in lettuce cups for freshness",
      "Serve Boat Noodles in small portions with blood broth for authenticity",
    ],
    dietaryInfo: {
      vegetarian: ["Pad Thai", "Glass Noodle Salad"],
      glutenFree: ["Pad Thai", "Glass Noodle Salad"],
      spicy: [
        "Pad Thai",
        "Pad See Ew",
        "Drunken Noodles",
        "Glass Noodle Salad",
        "Boat Noodles",
      ],
    },
    reviews: [
      "Pad Thai's perfect balance! Sweet, savory, nutty. Each bite a symphony of flavors. Truly a Thai classic done right.",
      "Drunken Noodles' spicy kick! Basil's aroma, chili's heat. A bold, flavorful dish. Left me wanting more.",
      "Pad See Ew's savory delight! Chinese broccoli, rich soy. The noodles were tender, the flavors deep. A comforting meal.",
      "Glass Noodle Salad's fresh, light taste! Mint, lemongrass, crisp veggies. A refreshing, healthy option. Perfect for summer.",
      "Boat Noodles' rich, complex flavors! Beef's tenderness, spicy broth. A truly authentic Thai noodle experience.",
      "Noodle perfection! Ingredients were fresh, flavors were vibrant. A true taste of Thailand. Highly recommended for all noodle lovers.",
      "Delicious noodles! The sauce was flavorful, and the noodles were perfectly cooked. A great meal for a cozy night in.",
      "Great noodles! The toppings were generous, and the meat was tender. The service was fast, and the noodles arrived hot.",
      "Okay noodles. The sauce was average, and the noodles were a bit mushy. Not bad, but not particularly exciting.",
      "Amazing noodles! The spices were delicious, and the vegetables were perfectly cooked. The toppings were fresh and plentiful.",
      "Solid noodles. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick lunch.",
      "Good noodles, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic noodles! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect noodle night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This noodle experience was a flavor adventure! The combination of ingredients was masterful. Every bite was a delightful journey.",
    ],
  },

  // CHINESE
  {
    type: "Dumpling",
    names: [
      "Pork Soup Dumplings",
      "Shrimp Har Gow",
      "Vegetable Potstickers",
      "Chicken Xiao Long Bao",
      "Beef Siu Mai",
    ],
    cuisine: "Chinese",
    baseIngredients: ["Dough wrapper", "Ginger", "Soy sauce"],
    variableIngredients: {
      "Pork Soup Dumplings": ["Pork", "Gelatin broth", "Crab roe"],
      "Shrimp Har Gow": ["Shrimp", "Bamboo shoots", "Pork fat"],
      "Vegetable Potstickers": ["Cabbage", "Mushrooms", "Carrots"],
      "Chicken Xiao Long Bao": [
        "Chicken",
        "Chicken broth gelatin",
        "Scallions",
      ],
      "Beef Siu Mai": ["Beef", "Shiitake mushrooms", "Water chestnuts"],
    },
    tags: ["Steamed", "Hand-folded", "Juicy", "Authentic"],
    prepTime: [20, 30],
    priceRange: [250, 750],
    restaurants: [
      "Gourmet Bites",
      "Urban Eats",
      "Fresh Kitchen",
      "Sweet Surrender",
    ],
    images: {
      "Pork Soup Dumplings":
        "https://images.unsplash.com/photo-1585032226651-759b368d7246",
      "Shrimp Har Gow":
        "https://images.unsplash.com/photo-1582284540020-8acbe03f4924",
      "Vegetable Potstickers":
        "https://images.unsplash.com/photo-1585032226651-759b368d7246",
      "Chicken Xiao Long Bao":
        "https://images.unsplash.com/photo-1563245372-f21724e3856d",
      "Beef Siu Mai":
        "https://images.unsplash.com/photo-1585032226651-759b368d7246",
    },
    calories: {
      "Pork Soup Dumplings": [250, 300],
      "Shrimp Har Gow": [200, 250],
      "Vegetable Potstickers": [180, 220],
      "Chicken Xiao Long Bao": [220, 270],
      "Beef Siu Mai": [230, 280],
    },
    about: {
      "Pork Soup Dumplings":
        "Xiao long bao with delicate pleated wrappers containing pork filling and rich broth. Our chefs make exactly 18 pleats on each dumpling.",
      "Shrimp Har Gow":
        "Classic dim sum dumplings with translucent wrappers showcasing the pink shrimp filling. The wrapper has just the right chew.",
      "Vegetable Potstickers":
        "Pan-fried then steamed vegetable dumplings with crispy bottoms. The filling stays vibrant and crunchy.",
      "Chicken Xiao Long Bao":
        "Lighter version of soup dumplings with chicken filling and clear broth. Delicate flavors with the same satisfying soup burst.",
      "Beef Siu Mai":
        "Open-topped dumplings with beef and mushroom filling. The water chestnuts add refreshing crunch to each bite.",
    },
    description: [
      "Delicate pouches of pork and hot broth. Bursting with rich flavor.",
      "Translucent shrimp dumplings. Sweet shrimp visible through wrapper.",
      "Crispy-bottomed vegetable dumplings. Fresh, crunchy vegetable filling.",
      "Chicken version of soup dumplings. Lighter but equally satisfying.",
      "Open-topped beef dumplings. Savory with textural contrast.",
    ],
    servingSuggestions: [
      "Serve with black vinegar and ginger",
      "Provide chili oil on side",
      "Offer steamer baskets for presentation",
      "Serve immediately after cooking",
      "Include soup spoons for xiao long bao",
    ],
    dietaryInfo: {
      vegetarian: ["Vegetable Potstickers"],
      glutenFree: [],
      spicy: ["Pork Soup Dumplings", "Beef Siu Mai"],
    },
    reviews: [
      "Xiao Long Bao's soup-filled delight! Delicate wrappers, rich broth. Each bite a burst of flavor. Truly a culinary gem.",
      "Har Gow's shrimp perfection! Translucent wrappers, tender filling. A light, elegant dumpling. A taste of Cantonese artistry.",
      "Siu Mai's savory goodness! Open-topped delights, flavorful filling. A satisfying bite, perfect for sharing.",
      "Char Siu Bao's sweet-savory charm! Fluffy buns, barbecued pork. A comforting, classic Cantonese treat.",
      "Cheung Fun's silky smoothness! Rice noodle rolls, delicate fillings. A unique texture, a delightful experience.",
      "Dumpling perfection! Ingredients were fresh, flavors were vibrant. A true taste of China. Highly recommended for all dumpling lovers.",
      "Delicious dumplings! The fillings were generous, and the wrappers were tender. A great meal for a cozy gathering.",
      "Great dumplings! The sauces were flavorful, and the meat was tender. The service was fast, and the dumplings arrived hot.",
      "Okay dumplings. The fillings were average, and the wrappers were a bit thick. Not bad, but not particularly exciting.",
      "Amazing dumplings! The spices were delicious, and the vegetables were perfectly cooked. The fillings were fresh and plentiful.",
      "Solid dumplings. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick snack.",
      "Good dumplings, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic dumplings! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect dumpling night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This dumpling experience was a flavor journey! The combination of ingredients was masterful. Every bite was a delightful discovery.",
    ],
  },

  // AMERICAN
  {
    type: "Burger",
    names: [
      "Classic Cheeseburger",
      "Bacon Avocado",
      "Mushroom Swiss",
      "BBQ Ranch",
      "Spicy Jalapeño",
    ],
    cuisine: "American",
    baseIngredients: ["Beef patty", "Bun", "Lettuce", "Tomato"],
    variableIngredients: {
      "Classic Cheeseburger": ["American cheese", "Pickles", "Special sauce"],
      "Bacon Avocado": ["Bacon", "Avocado", "Pepper jack"],
      "Mushroom Swiss": ["Sautéed mushrooms", "Swiss cheese", "Aioli"],
      "BBQ Ranch": ["BBQ sauce", "Onion rings", "Cheddar"],
      "Spicy Jalapeño": ["Jalapeños", "Pepper jack", "Chipotle mayo"],
    },
    tags: ["Spicy", "Street Food", "New"],
    prepTime: [15, 25],
    priceRange: [150, 800],
    restaurants: [
      "Burger King",
      "Macdonald",
      "Urban Eats",
      "Spice Route",
      "Wendy's",
    ],
    images: {
      "Classic Cheeseburger":
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      "Bacon Avocado":
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
      "Mushroom Swiss":
        "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99",
      "BBQ Ranch": "https://images.unsplash.com/photo-1561758033-7e924f619b47",
      "Spicy Jalapeño":
        "https://images.unsplash.com/photo-1603064752734-4c48eff53d05",
    },
    calories: {
      "Classic Cheeseburger": [700, 800],
      "Bacon Avocado": [850, 950],
      "Mushroom Swiss": [750, 850],
      "BBQ Ranch": [900, 1000],
      "Spicy Jalapeño": [800, 900],
    },
    about: {
      "Classic Cheeseburger":
        "Our signature burger featuring a half-pound grass-fed beef patty, melted American cheese, and house-made special sauce on a brioche bun.",
      "Bacon Avocado":
        "Premium burger topped with crispy applewood-smoked bacon, fresh avocado slices, and pepper jack cheese. Served with garlic aioli.",
      "Mushroom Swiss":
        "Juicy patty topped with sautéed cremini mushrooms, melted Swiss cheese, and truffle aioli. Earthy flavors in every bite.",
      "BBQ Ranch":
        "Smoky BBQ sauce meets cool ranch dressing in this burger topped with crispy onion rings and sharp cheddar cheese.",
      "Spicy Jalapeño":
        "For heat lovers - fresh jalapeños, pepper jack cheese, and chipotle mayo create a spicy kick balanced by cool lettuce and tomato.",
    },
    description: [
      "Classic done right - juicy patty, melty cheese, perfect sauce. Timeless.",
      "Bacon and creamy avocado upgrade. Rich, satisfying textures.",
      "Earthy mushrooms and nutty Swiss. Umami-packed flavor bomb.",
      "Sweet BBQ meets cool ranch. Crunchy onion rings add texture.",
      "Spicy jalapeños with cooling toppings. Heat balanced by creaminess.",
    ],
    servingSuggestions: [
      "Serve with crispy fries",
      "Offer extra sauces on side",
      "Pair with craft beer or milkshake",
      "Add side of pickles or coleslaw",
      "Serve with optional bacon upgrade",
    ],
    dietaryInfo: {
      vegetarian: [],
      glutenFree: ["Bacon Avocado", "Mushroom Swiss", "Spicy Jalapeño"],
      spicy: ["Spicy Jalapeño"],
    },
    reviews: [
      "Classic Cheeseburger perfection! Juicy patty, melted cheddar. A timeless favorite, simply delicious.",
      "BBQ Bacon Burger's smoky delight! Crispy bacon, tangy BBQ sauce. A flavor-packed, hearty indulgence.",
      "Mushroom Swiss's earthy richness! Sautéed mushrooms, melted Swiss. A sophisticated burger, full of savory notes.",
      "Veggie Burger's vibrant flavors! Hearty vegetable patty, fresh toppings. A satisfying, flavorful meat-free option.",
      "Breakfast Burger's morning kick! Egg, hash browns, beefy goodness. A unique, delicious start to the day.",
      "Burger perfection! Ingredients were fresh, flavors were vibrant. A true taste of American comfort food. Highly recommended.",
      "Delicious burger! The patty was juicy, and the toppings were generous. A great meal for a casual outing.",
      "Great burger! The sauces were flavorful, and the meat was tender. The service was fast, and the burger arrived hot.",
      "Okay burger. The patty was average, and the toppings were a bit bland. Not bad, but not particularly exciting.",
      "Amazing burger! The spices were delicious, and the toppings were perfectly cooked. The fillings were fresh and plentiful.",
      "Solid burger. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick lunch.",
      "Good burger, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic burger! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect burger night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This burger experience was a flavor adventure! The combination of ingredients was masterful. Every bite was a delightful discovery.",
    ],
  },

  // GREEK
  {
    type: "Pasta",
    names: [
      "Spaghetti Carbonara",
      "Penne Arrabiata",
      "Fettuccine Alfredo",
      "Lasagna Bolognese",
      "Cheese Tortellini",
    ],
    cuisine: "Greek",
    baseIngredients: ["Pasta", "Olive oil", "Garlic"],
    variableIngredients: {
      "Spaghetti Carbonara": ["Pancetta", "Egg yolk", "Pecorino cheese"],
      "Penne Arrabiata": ["Tomato sauce", "Red pepper flakes", "Parsley"],
      "Fettuccine Alfredo": ["Heavy cream", "Parmesan", "Butter"],
      "Lasagna Bolognese": ["Ground beef", "White sauce", "Mozzarella"],
      "Cheese Tortellini": ["Stuffed pasta", "Basil", "Cherry tomatoes"],
    },
    tags: ["Street Food", "Comfort Food", "Seasonal", "Spicy"],
    prepTime: [20, 35], // minutes
    priceRange: [100, 650],
    restaurants: [
      "Sweet Surrender",
      "Fresh Kitchen",
      "Gourmet Bites",
      "Ocean Delights",
    ],
    images: {
      "Spaghetti Carbonara":
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
      "Penne Arrabiata":
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
      "Fettuccine Alfredo":
        "https://images.unsplash.com/photo-1503614475090-c103a82d0665",
      "Lasagna Bolognese":
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
      "Cheese Tortellini":
        "https://images.unsplash.com/photo-1608755728473-b501374a27f0",
    },
    calories: {
      "Spaghetti Carbonara": [750, 850],
      "Penne Arrabiata": [650, 750],
      "Fettuccine Alfredo": [900, 1000],
      "Lasagna Bolognese": [950, 1100],
      "Cheese Tortellini": [700, 800],
    },
    about: {
      "Spaghetti Carbonara":
        "Authentic Roman pasta with crispy pancetta in a creamy egg-cheese sauce. We use farm-fresh eggs and aged pecorino for rich flavor.",
      "Penne Arrabiata":
        "Spicy tomato sauce with garlic and chili flakes. Slow-simmered with San Marzano tomatoes for depth of flavor.",
      "Fettuccine Alfredo":
        "Luxurious creamy pasta with Parmesan and butter. Our pasta is made fresh daily for perfect texture.",
      "Lasagna Bolognese":
        "Classic layered pasta with slow-cooked meat sauce, creamy béchamel, and melted cheese topping.",
      "Cheese Tortellini":
        "Delicate stuffed pasta rings in light tomato sauce with fresh basil. Hand-formed using traditional techniques.",
    },
    description: [
      "Creamy pasta with crispy pancetta and sharp cheese - Roman comfort food at its best",
      "Spicy tomato pasta with garlic kick - simple but packed with bold flavors",
      "Ultra-rich creamy fettuccine - the ultimate indulgent pasta dish",
      "Hearty layered pasta with meat sauce - a complete meal in every bite",
      "Light cheese-filled pasta in fresh tomato sauce - delicate and satisfying",
    ],
    servingSuggestions: [
      "Grate fresh Parmesan at the table",
      "Serve with crusty Italian bread",
      "Pair red sauce pastas with Chianti wine",
      "Offer chili oil for those who want extra heat",
      "Garnish with fresh herbs before serving",
    ],
    dietaryInfo: {
      vegetarian: [
        "Penne Arrabiata",
        "Fettuccine Alfredo",
        "Cheese Tortellini",
      ],
      glutenFree: [],
      spicy: ["Penne Arrabiata"],
    },
    reviews: [
      "Classic Spaghetti perfection! Al dente noodles, rich tomato sauce. A timeless Italian favorite, simply delicious.",
      "Creamy Alfredo's rich delight! Silky sauce, tender pasta. A decadent, comforting indulgence.",
      "Pesto Pasta's vibrant flavors! Fresh basil, nutty pine nuts. A light, aromatic dish, bursting with freshness.",
      "Seafood Linguine's oceanic treasure! Succulent seafood, delicate pasta. A sophisticated, flavorful experience.",
      "Vegetable Primavera's garden freshness! Crisp vegetables, light sauce. A healthy, colorful pasta delight.",
      "Pasta perfection! Ingredients were fresh, flavors were vibrant. A true taste of Italy. Highly recommended.",
      "Delicious pasta! The sauce was flavorful, and the noodles were perfectly cooked. A great meal for a cozy night in.",
      "Great pasta! The toppings were generous, and the protein was tender. The service was fast, and the pasta arrived hot.",
      "Okay pasta. The sauce was average, and the noodles were a bit mushy. Not bad, but not particularly exciting.",
      "Amazing pasta! The spices were delicious, and the vegetables were perfectly cooked. The toppings were fresh and plentiful.",
      "Solid pasta. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick lunch.",
      "Good pasta, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic pasta! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect pasta night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This pasta experience was a flavor journey! The combination of ingredients was masterful. Every bite was a delightful discovery.",
    ],
  },

  // FRENCH
  {
    type: "Soup",
    names: [
      "Classic",
      "Gratinée",
      "Three-Cheese",
      "Traditional",
      "Forest Mushroom",
    ],
    cuisine: "French",
    baseIngredients: ["Onions", "Beef broth", "Butter", "Flour"],
    variableIngredients: {
      Classic: ["Toasted bread", "Swiss cheese"],
      Gratinée: ["Baguette slices", "Gruyère", "Parmesan"],
      "Three-Cheese": ["Comté", "Beaufort", "Raclette"],
      Traditional: ["White wine", "Cognac", "Country bread"],
      "Forest Mushroom": ["Wild mushrooms", "Bacon", "Crème fraîche"],
    },
    tags: ["Comfort Food", "Classic", "Spicy", "Fresh"],
    prepTime: [45, 60],
    priceRange: [200, 900],
    restaurants: [
      "Soup Central",
      "Ocean Delights",
      "Fresh Kitchen",
      "Urban Eats",
    ],
    images: {
      Classic: "https://images.unsplash.com/photo-1611576235500-4e378a5d96a3",
      Gratinée: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38",
      "Three-Cheese":
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
      Traditional:
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
      "Forest Mushroom":
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d",
    },
    calories: {
      Classic: [350, 450],
      Gratinée: [400, 500],
      "Three-Cheese": [450, 550],
      Traditional: [380, 480],
      "Forest Mushroom": [420, 520],
    },
    about: {
      Classic:
        "Our traditional version features onions slowly caramelized in butter, homemade broth, and toasted bread with melted Swiss cheese.",
      Gratinée:
        "The iconic Parisian version with a golden crust of gruyère and parmesan cheese.",
      "Three-Cheese":
        "A gourmet blend of three premium French cheeses for an unforgettable experience.",
      Traditional:
        "Prepared with authentic techniques including a splash of cognac and white wine for depth.",
      "Forest Mushroom":
        "A rustic interpretation enriched with wild mushrooms and smoked bacon.",
    },
    description: [
      "The classic version - perfectly balanced caramelized onions and gooey cheese.",
      "Gratinéed to perfection with a crispy cheese crust hiding rich broth underneath.",
      "For cheese lovers - three French varieties that melt in harmony.",
      "Made the traditional way with time-honored techniques for authenticity.",
      "A hearty version with mushrooms and bacon for extra richness.",
    ],
    servingSuggestions: [
      "Serve piping hot in traditional soup crocks",
      "Accompany with crusty baguette",
      "Use oven-safe bowls for gratinéing",
      "Add a pinch of freshly ground pepper",
      "Pair with a light red wine",
    ],
    dietaryInfo: {
      vegetarian: ["Classic"],
      glutenFree: ["Traditional"],
      spicy: ["Forest Mushroom"],
    },
    reviews: [
      "Classic Tomato Soup perfection! Rich, velvety texture. A comforting classic, simply delicious and warming.",
      "Creamy Mushroom Soup's earthy delight! Deep, savory flavors. A decadent, luxurious indulgence.",
      "Chicken Noodle Soup's comforting embrace! Tender chicken, hearty noodles. A soothing, flavorful remedy.",
      "Spicy Thai Tom Yum's vibrant kick! Lemongrass, chilies, fresh herbs. An exotic, invigorating experience.",
      "Hearty Minestrone's vegetable medley! Robust broth, colorful ingredients. A wholesome, satisfying meal.",
      "Soup perfection! Ingredients were fresh, flavors were vibrant. A true culinary delight. Highly recommended.",
      "Delicious soup! The broth was flavorful, and the ingredients were perfectly cooked. A great meal for a cozy night in.",
      "Great soup! The spices were aromatic, and the protein was tender. The service was fast, and the soup arrived hot.",
      "Okay soup. The broth was average, and the ingredients were a bit bland. Not bad, but not particularly exciting.",
      "Amazing soup! The herbs were delicious, and the vegetables were perfectly cooked. The toppings were fresh and plentiful.",
      "Solid soup. The flavors were balanced, and the ingredients seemed fresh. A reliable choice for a quick lunch.",
      "Good soup, but not great. The texture was a bit off, and the flavors were a bit bland. It was fine, but nothing special.",
      "Fantastic soup! The flavors were authentic and delicious. The ingredients tasted very fresh and high quality.",
      "Perfect soup night! The taste was incredible, and the variety was great. I couldn't have asked for more.",
      "This soup experience was a flavor journey! The combination of ingredients was masterful. Every spoonful was a delightful discovery.",
    ],
  },
]

function getRandomDishTemplate() {
  // Select a random dish template from the array
  return dishTemplates[Math.floor(Math.random() * dishTemplates.length)]
}

function getRandomVariation(dishTemplate) {
  // Select a random variation (name) from the dish template
  const randomIndex = Math.floor(Math.random() * dishTemplate.names.length)
  return dishTemplate.names[randomIndex]
}

const generateReviews = (reviewsArray, count) => {
  const reviews = []
  for (let i = 0; i < count; i++) {
    reviews.push({
      id: i + 1,
      user: `User ${Math.floor(Math.random() * 1000)}`,
      avatar: `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "men" : "women"
      }/${Math.floor(Math.random() * 50) + 1}.jpg`,
      rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
      comment: getRandom(reviewsArray),
      date: `${Math.floor(Math.random() * 7) + 1} ${getRandom([
        "day",
        "week",
      ])} ago`,
    })
  }
  return reviews
}

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

function generateId(restaurantName) {
  // Simplify restaurant name for ID (remove spaces/special chars)
  const cleanRestaurantName = restaurantName
    .replace(/'/g, "") // Remove apostrophes
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-zA-Z-]/g, "") // Remove non-alphabet characters
    .toLowerCase() // Convert to lowercase

  // Generate random 4-digit number
  const randomNum = Math.floor(1000 + Math.random() * 9000)

  return `${cleanRestaurantName}-${randomNum}`
}

function constructFoodItem() {
  const template = getRandomDishTemplate()
  const variation = getRandomVariation(template)

  // Select random restaurant
  const restaurant =
    template.restaurants[
      Math.floor(Math.random() * template.restaurants.length)
    ]

  const getTags = () => {
    const indices = []
    while (indices.length < 2) {
      const randomIndex = Math.floor(Math.random() * template.tags.length)
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex)
      }
    }
    return [template.tags[indices[0]], template.tags[indices[1]]]
  }

  // Construct the food item object
  return {
    id: generateId(restaurant),
    type: template.type,
    name: variation,
    cuisine: template.cuisine,
    ingredients: [
      ...template.baseIngredients,
      ...(template.variableIngredients[variation] || []),
    ],
    tags: getTags(),
    prepTime: template.prepTime.join("-"),
    price: Math.floor(
      template.priceRange[0] +
        Math.random() * (template.priceRange[1] - template.priceRange[0])
    ),
    restaurant: restaurant,
    image: template.images[variation] || template.images[template.names[0]],
    calories: template.calories[variation]
      ? Math.floor(
          template.calories[variation][0] +
            Math.random() *
              (template.calories[variation][1] -
                template.calories[variation][0])
        )
      : Math.floor(400 + Math.random() * 200), // Fallback calories
    about:
      template.about[variation] || `Delicious ${variation} ${template.type}`,
    description:
      template.description[template.names.indexOf(variation)] ||
      `A tasty ${variation} ${template.type}`,
    servingSuggestions: template.servingSuggestions,
    dietaryInfo: {
      vegetarian: template.dietaryInfo.vegetarian
        ? template.dietaryInfo.vegetarian.includes(variation)
        : false,
      glutenFree: template.dietaryInfo.glutenFree
        ? template.dietaryInfo.glutenFree.includes(variation)
        : false,
      spicy: template.dietaryInfo.spicy
        ? template.dietaryInfo.spicy.includes(variation)
        : false,
    },
    reviews: generateReviews(
      template.reviews,
      Math.floor(Math.random() * 15) + 1
    ),
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
    ratingCount: Math.floor(Math.random() * 200) + 30,
    deliveryTime: template.prepTime
      .map((val) => val + Math.floor(Math.random() * 16) + 15)
      .join("-"),
    isPopular: Math.random() > 0.5,
    lastOrdered: new Date(
      Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000
    ).toISOString(),
  }
}

// Generate array of 50 food items
export const foodItems = Array.from({ length: 50 }, constructFoodItem)

// console.log(foodItems)
