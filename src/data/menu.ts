export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  spiceLevel?: 1 | 2 | 3;
  popular?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: MenuItem[];
}

// Pexels image helper
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

// Wikimedia Commons image helper (600px thumbnails)
const wiki = (path: string) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;

// Verified Pexels photo IDs for South Indian food
const IMG = {
  idli: px(8312083),            // Overhead Shot of Indian Food (idli, vada, sambar) - same as overhead
  idliOverhead: px(8312083),   // Overhead Shot of Indian Food (idli, vada, sambar, chutney plate)
  // Dosa images from Wikimedia Commons (each variety gets its own image)
  dosaPlain: wiki("b/b1/Dosa-chutney-sambhar.jpg/600px-Dosa-chutney-sambhar.jpg"),
  dosaMasala: wiki("c/c0/Masala_Dosa_in_triangle.jpg/600px-Masala_Dosa_in_triangle.jpg"),
  dosaMysore: wiki("e/e5/Mysore_Masala_Dosa.jpg/600px-Mysore_Masala_Dosa.jpg"),
  dosaCheese: wiki("b/ba/Cheese_mysore_masala_dosa.jpg/600px-Cheese_mysore_masala_dosa.jpg"),
  dosaRava: wiki("6/6c/Rava_dosa.JPG/600px-Rava_dosa.JPG"),
  dosaGhee: wiki("b/b8/Ghee_Roast_Dosa.jpg/600px-Ghee_Roast_Dosa.jpg"),
  dosaPaper: wiki("9/9e/Paper_Dosa_(South_Indian_cuisine).jpg/600px-Paper_Dosa_(South_Indian_cuisine).jpg"),
  dosaSpring: wiki("a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg/600px-Dosai_Chutney_Hotel_Saravana_Bhavan.jpg"),
  bananaLeaf: px(7234281),     // Variety of Cooked Food on Banana Leaf
  indianDishes: px(7129403),   // Various traditional Indian dishes served on table
  samosa: px(14477873),        // Delicious Fried Samosa in a Wicker Tray
  biryani: px(7340956),        // Close-up Photo of a Biryani Dish
  biryaniTop: px(12737817),    // Top View of a Chicken Biryani Dish
  gulabJamun: px(11887844),    // Close-up Photo of Gulab Jamun
  gulabJamunSyrup: px(7406888), // Gulab Jamun in Syrup
  gulabJamunBowl: px(15014919), // Bowl of Gulab Jamun
  mangoLassi: px(14509267),    // Glasses of Delicious Mango Lassi on Wooden Board
  lassi: px(6808666),          // Lassi - Popular Indian Drink
  yogurtDrink: px(4475024),    // White Liquid in Clear Drinking Glasses (Indian lassi)
  naanCurry: px(2474661),      // Bread With Soup (naan with Indian curry)
  pavBhaji: px(5410400),       // Pav Bhaji Dish on a Bowl
  noodles: px(23833914),       // Close-up of Noodles on a Fork
  fritters: px(1059943),       // Close-up Photo of Fritters
  coffee: px(324028),          // Close-up of Coffee Cup
  coffeeCup: px(2128016),      // White Ceramic Coffee Cup
  paneerTikka: px(28674559),    // Classic Indian Curry Dish with Assorted Paneer Tikka
  paniPuri: px(5410400),        // Indian Street Food (reuse Pav Bhaji)
  dalMakhani: px(12737916),    // Dal Makhani on a White Bowl
};

export const menuCategories: MenuCategory[] = [
  {
    id: "idli-vada",
    name: "Idli & Vada",
    description: "Our signature soft idlis and crispy vadas, made fresh every hour",
    icon: "🫓",
    items: [
      {
        name: "Classic Idli (3 pcs)",
        description: "Pillowy soft steamed rice & lentil cakes served with sambar and coconut chutney",
        price: "$8.99",
        image: IMG.idli,
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Mini Sambar Idli (10 pcs)",
        description: "Bite-sized idlis dunked in aromatic sambar with curry leaves and mustard",
        price: "$10.99",
        image: IMG.idliOverhead,
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Ghee Podi Idli",
        description: "Idlis tossed in fragrant ghee and spicy gun powder – a flavor explosion",
        price: "$9.99",
        image: IMG.idli,
        spiceLevel: 2,
        glutenFree: true,
      },
      {
        name: "Medu Vada (2 pcs)",
        description: "Crispy golden urad dal fritters with a fluffy interior, served with chutneys",
        price: "$8.99",
        image: IMG.idliOverhead,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Sambar Vada",
        description: "Crispy vadas soaked in hot, tangy sambar – the ultimate comfort food",
        price: "$9.49",
        image: IMG.idliOverhead,
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Curd Vada",
        description: "Soft vadas soaked in creamy yogurt, tempered with mustard and curry leaves",
        price: "$9.49",
        image: IMG.yogurtDrink,
        glutenFree: true,
      },
    ],
  },
  {
    id: "dosa",
    name: "Dosa",
    description: "Crispy, golden crepes made from fermented rice and lentil batter",
    icon: "🥞",
    items: [
      {
        name: "Plain Dosa",
        description: "Perfectly thin and crispy crepe served with sambar and trio of chutneys",
        price: "$9.99",
        image: IMG.dosaPlain,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Masala Dosa",
        description: "Iconic crispy crepe filled with spiced potato masala – our bestseller",
        price: "$11.99",
        image: IMG.dosaMasala,
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Mysore Masala Dosa",
        description: "Fiery red chutney spread inside, stuffed with spiced potatoes – bold & beautiful",
        price: "$12.99",
        image: IMG.dosaMysore,
        popular: true,
        spiceLevel: 2,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Cheese Masala Dosa",
        description: "Crispy dosa oozing with melted cheese and masala potato filling",
        price: "$13.99",
        image: IMG.dosaCheese,
        popular: true,
        glutenFree: true,
      },
      {
        name: "Rava Onion Chili Dosa",
        description: "Semolina crepe studded with onions and green chilies – crispy perfection",
        price: "$12.99",
        image: IMG.dosaRava,
        spiceLevel: 2,
        vegan: true,
      },
      {
        name: "Ghee Roast Dosa",
        description: "Extra crispy dosa roasted in pure ghee until golden and aromatic",
        price: "$12.99",
        image: IMG.dosaGhee,
        glutenFree: true,
      },
      {
        name: "Paper Dosa",
        description: "Ultra-thin, extra large and impossibly crispy – a work of art",
        price: "$11.99",
        image: IMG.dosaPaper,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Spring Dosa",
        description: "Dosa folded like a spring roll, stuffed with veggies and paneer",
        price: "$13.99",
        image: IMG.dosaSpring,
      },
    ],
  },
  {
    id: "uthappam",
    name: "Uthappam",
    description: "Thick, savory South Indian pancakes topped with fresh vegetables",
    icon: "🫓",
    items: [
      {
        name: "Onion Uthappam",
        description: "Thick savory pancake generously topped with caramelized onions",
        price: "$10.99",
        image: IMG.bananaLeaf,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Mixed Vegetable Uthappam",
        description: "Loaded with onions, tomatoes, capsicum, and green chilies",
        price: "$11.99",
        image: IMG.bananaLeaf,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Tomato Uthappam",
        description: "Topped with juicy diced tomatoes and tempered with mustard seeds",
        price: "$10.99",
        image: IMG.bananaLeaf,
        vegan: true,
        glutenFree: true,
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    description: "Traditional Indian breads, puffed and layered to perfection",
    icon: "🍞",
    items: [
      {
        name: "Poori with Side",
        description: "Puffy deep-fried wheat bread served with potato masala or chole",
        price: "$14.19",
        image: IMG.naanCurry,
        vegan: true,
      },
      {
        name: "Parota with Veg Kurma",
        description: "Flaky, layered Malabar parotta served with rich vegetable kurma",
        price: "$14.73",
        image: IMG.naanCurry,
        popular: true,
      },
      {
        name: "Parota with Salna",
        description: "Crispy layered parotta paired with spicy, tangy salna gravy",
        price: "$14.19",
        image: IMG.dalMakhani,
        spiceLevel: 2,
      },
      {
        name: "Ilai Parota (Weekend Special)",
        description: "Leaf-thin layered parotta – a weekend-only delicacy you cannot miss",
        price: "$15.99",
        image: IMG.naanCurry,
        popular: true,
      },
    ],
  },
  {
    id: "rice",
    name: "Rice Dishes",
    description: "Fragrant rice preparations infused with traditional South Indian flavors",
    icon: "🍚",
    items: [
      {
        name: "Lemon Rice",
        description: "Tangy turmeric rice tempered with peanuts, mustard seeds, and curry leaves",
        price: "$11.99",
        image: IMG.biryaniTop,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Tamarind Rice",
        description: "Sweet and tangy rice with tamarind paste, peanuts, and aromatic spices",
        price: "$11.99",
        image: IMG.biryaniTop,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Coconut Rice",
        description: "Fragrant rice tossed with fresh grated coconut and cashews",
        price: "$11.99",
        image: IMG.biryaniTop,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Curd Rice",
        description: "Cool, creamy yogurt rice tempered with mustard and pomegranate seeds",
        price: "$10.99",
        image: IMG.yogurtDrink,
        glutenFree: true,
      },
      {
        name: "Veg Biryani",
        description: "Aromatic basmati rice layered with vegetables and fragrant spices",
        price: "$14.99",
        image: IMG.biryani,
        popular: true,
        vegan: true,
        glutenFree: true,
      },
    ],
  },
  {
    id: "combos",
    name: "Thali & Combos",
    description: "Complete meals with the full South Indian dining experience",
    icon: "🍽️",
    items: [
      {
        name: "Weekday Thali",
        description: "Rice, sambar, rasam, poriyal, kootu, papad, pickle, chutney, and dessert",
        price: "$17.99",
        image: IMG.indianDishes,
        popular: true,
      },
      {
        name: "Weekend Thali",
        description: "Enhanced thali with special weekend items, rice, sambar, and more",
        price: "$18.99",
        image: IMG.bananaLeaf,
        popular: true,
      },
      {
        name: "Weekend Breakfast Combo",
        description: "Choose any 4 breakfast items – idli, dosa, vada, uthappam, and more",
        price: "$16.99",
        image: IMG.idliOverhead,
        popular: true,
      },
      {
        name: "Curry Combo (Serves 2-3)",
        description: "Sambar (16oz), Rasam (16oz), Poriyal (12oz), and Kootu (12oz)",
        price: "$24.99",
        image: IMG.dalMakhani,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Chaat",
    description: "Crispy, tangy, and irresistible street food favorites",
    icon: "🥟",
    items: [
      {
        name: "Samosa (2 pcs)",
        description: "Golden crispy pastries filled with spiced potatoes and peas",
        price: "$5.99",
        image: IMG.samosa,
        vegan: true,
      },
      {
        name: "Mirchi Bhaji (2 pcs)",
        description: "Whole green chilies dipped in gram flour batter and deep-fried",
        price: "$5.99",
        image: IMG.fritters,
        spiceLevel: 3,
        vegan: true,
      },
      {
        name: "Papad Chaat",
        description: "Crispy papads topped with onions, tomatoes, and tangy chutneys",
        price: "$6.99",
        image: IMG.paniPuri,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Paneer 65",
        description: "Crispy paneer cubes tossed in a spicy, tangy masala with curry leaves",
        price: "$12.99",
        image: IMG.paneerTikka,
        spiceLevel: 2,
        popular: true,
      },
    ],
  },
  {
    id: "indo-chinese",
    name: "Indo-Chinese",
    description: "The beloved fusion of Indian spices with Chinese cooking techniques",
    icon: "🥡",
    items: [
      {
        name: "Gobi Manchurian",
        description: "Crispy cauliflower florets tossed in a sweet, spicy, and tangy sauce",
        price: "$12.99",
        image: IMG.fritters,
        popular: true,
        spiceLevel: 2,
        vegan: true,
      },
      {
        name: "Veg Fried Rice",
        description: "Wok-tossed rice with vegetables, soy sauce, and Indian spices",
        price: "$12.99",
        image: IMG.biryaniTop,
        vegan: true,
      },
      {
        name: "Veg Noodles",
        description: "Stir-fried noodles with colorful vegetables and Indo-Chinese seasonings",
        price: "$12.99",
        image: IMG.noodles,
        vegan: true,
      },
      {
        name: "Paneer Manchurian",
        description: "Crispy paneer cubes in a bold manchurian sauce with peppers",
        price: "$13.99",
        image: IMG.paneerTikka,
        spiceLevel: 2,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings with traditional South Indian and Indian sweets",
    icon: "🍮",
    items: [
      {
        name: "Gulab Jamun (2 pcs)",
        description: "Melt-in-your-mouth milk dumplings soaked in rose-cardamom syrup",
        price: "$5.99",
        image: IMG.gulabJamun,
        popular: true,
      },
      {
        name: "Rava Kesari",
        description: "Warm semolina pudding with ghee, saffron, cashews, and raisins",
        price: "$5.99",
        image: IMG.gulabJamunBowl,
        popular: true,
      },
      {
        name: "Rasmalai (2 pcs)",
        description: "Soft cottage cheese patties in chilled, cardamom-infused cream",
        price: "$6.99",
        image: IMG.gulabJamunSyrup,
      },
      {
        name: "Jalebi",
        description: "Crispy, syrup-soaked spirals of fermented batter – sweet and tangy",
        price: "$5.99",
        image: IMG.gulabJamunSyrup,
        vegan: true,
      },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Traditional South Indian drinks to complete your meal",
    icon: "☕",
    items: [
      {
        name: "Filter Coffee",
        description: "Authentic South Indian filter coffee – strong, aromatic, and frothy",
        price: "$3.99",
        image: IMG.coffee,
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Masala Chai",
        description: "Spiced tea brewed with ginger, cardamom, cloves, and cinnamon",
        price: "$3.99",
        image: IMG.coffeeCup,
        glutenFree: true,
      },
      {
        name: "Mango Lassi",
        description: "Creamy, chilled yogurt smoothie blended with sweet Alphonso mangoes",
        price: "$5.99",
        image: IMG.mangoLassi,
        glutenFree: true,
      },
      {
        name: "Buttermilk (Neer Mor)",
        description: "Cool, refreshing spiced buttermilk with ginger and curry leaves",
        price: "$3.99",
        image: IMG.lassi,
        glutenFree: true,
      },
      {
        name: "Fresh Juice",
        description: "Seasonal fresh-pressed juice – ask about today's selection",
        price: "$5.99",
        image: IMG.yogurtDrink,
        vegan: true,
        glutenFree: true,
      },
    ],
  },
];

export const popularItems = menuCategories
  .flatMap((cat) => cat.items.filter((item) => item.popular))
  .slice(0, 8);
