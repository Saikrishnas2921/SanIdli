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
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Mini Sambar Idli (10 pcs)",
        description: "Bite-sized idlis dunked in aromatic sambar with curry leaves and mustard",
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Ghee Podi Idli",
        description: "Idlis tossed in fragrant ghee and spicy gun powder – a flavor explosion",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
        spiceLevel: 2,
        glutenFree: true,
      },
      {
        name: "Medu Vada (2 pcs)",
        description: "Crispy golden urad dal fritters with a fluffy interior, served with chutneys",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Sambar Vada",
        description: "Crispy vadas soaked in hot, tangy sambar – the ultimate comfort food",
        price: "$9.49",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Curd Vada",
        description: "Soft vadas soaked in creamy yogurt, tempered with mustard and curry leaves",
        price: "$9.49",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Masala Dosa",
        description: "Iconic crispy crepe filled with spiced potato masala – our bestseller",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Mysore Masala Dosa",
        description: "Fiery red chutney spread inside, stuffed with spiced potatoes – bold & beautiful",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        popular: true,
        spiceLevel: 2,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Cheese Masala Dosa",
        description: "Crispy dosa oozing with melted cheese and masala potato filling",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        popular: true,
        glutenFree: true,
      },
      {
        name: "Rava Onion Chili Dosa",
        description: "Semolina crepe studded with onions and green chilies – crispy perfection",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        spiceLevel: 2,
        vegan: true,
      },
      {
        name: "Ghee Roast Dosa",
        description: "Extra crispy dosa roasted in pure ghee until golden and aromatic",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        glutenFree: true,
      },
      {
        name: "Paper Dosa",
        description: "Ultra-thin, extra large and impossibly crispy – a work of art",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Spring Dosa",
        description: "Dosa folded like a spring roll, stuffed with veggies and paneer",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1668236543090-82eb5eab3f85?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Mixed Vegetable Uthappam",
        description: "Loaded with onions, tomatoes, capsicum, and green chilies",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Tomato Uthappam",
        description: "Topped with juicy diced tomatoes and tempered with mustard seeds",
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        vegan: true,
      },
      {
        name: "Parota with Veg Kurma",
        description: "Flaky, layered Malabar parotta served with rich vegetable kurma",
        price: "$14.73",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        popular: true,
      },
      {
        name: "Parota with Salna",
        description: "Crispy layered parotta paired with spicy, tangy salna gravy",
        price: "$14.19",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        spiceLevel: 2,
      },
      {
        name: "Ilai Parota (Weekend Special)",
        description: "Leaf-thin layered parotta – a weekend-only delicacy you cannot miss",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1596097635121-14b63a7e0c93?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Tamarind Rice",
        description: "Sweet and tangy rice with tamarind paste, peanuts, and aromatic spices",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1596097635121-14b63a7e0c93?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Coconut Rice",
        description: "Fragrant rice tossed with fresh grated coconut and cashews",
        price: "$11.99",
        image: "https://images.unsplash.com/photo-1596097635121-14b63a7e0c93?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Curd Rice",
        description: "Cool, creamy yogurt rice tempered with mustard and pomegranate seeds",
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1596097635121-14b63a7e0c93?w=600&q=80",
        glutenFree: true,
      },
      {
        name: "Veg Biryani",
        description: "Aromatic basmati rice layered with vegetables and fragrant spices",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        popular: true,
      },
      {
        name: "Weekend Thali",
        description: "Enhanced thali with special weekend items, rice, sambar, and more",
        price: "$18.99",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        popular: true,
      },
      {
        name: "Weekend Breakfast Combo",
        description: "Choose any 4 breakfast items – idli, dosa, vada, uthappam, and more",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
        popular: true,
      },
      {
        name: "Curry Combo (Serves 2-3)",
        description: "Sambar (16oz), Rasam (16oz), Poriyal (12oz), and Kootu (12oz)",
        price: "$24.99",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
        vegan: true,
      },
      {
        name: "Mirchi Bhaji (2 pcs)",
        description: "Whole green chilies dipped in gram flour batter and deep-fried",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
        spiceLevel: 3,
        vegan: true,
      },
      {
        name: "Papad Chaat",
        description: "Crispy papads topped with onions, tomatoes, and tangy chutneys",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Paneer 65",
        description: "Crispy paneer cubes tossed in a spicy, tangy masala with curry leaves",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        popular: true,
        spiceLevel: 2,
        vegan: true,
      },
      {
        name: "Veg Fried Rice",
        description: "Wok-tossed rice with vegetables, soy sauce, and Indian spices",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1596097635121-14b63a7e0c93?w=600&q=80",
        vegan: true,
      },
      {
        name: "Veg Noodles",
        description: "Stir-fried noodles with colorful vegetables and Indo-Chinese seasonings",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
        vegan: true,
      },
      {
        name: "Paneer Manchurian",
        description: "Crispy paneer cubes in a bold manchurian sauce with peppers",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1666190050209-e3a5b0e69908?w=600&q=80",
        popular: true,
      },
      {
        name: "Rava Kesari",
        description: "Warm semolina pudding with ghee, saffron, cashews, and raisins",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1666190050209-e3a5b0e69908?w=600&q=80",
        popular: true,
      },
      {
        name: "Rasmalai (2 pcs)",
        description: "Soft cottage cheese patties in chilled, cardamom-infused cream",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1666190050209-e3a5b0e69908?w=600&q=80",
      },
      {
        name: "Jalebi",
        description: "Crispy, syrup-soaked spirals of fermented batter – sweet and tangy",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1666190050209-e3a5b0e69908?w=600&q=80",
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
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80",
        popular: true,
        vegan: true,
        glutenFree: true,
      },
      {
        name: "Masala Chai",
        description: "Spiced tea brewed with ginger, cardamom, cloves, and cinnamon",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80",
        glutenFree: true,
      },
      {
        name: "Mango Lassi",
        description: "Creamy, chilled yogurt smoothie blended with sweet Alphonso mangoes",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80",
        glutenFree: true,
      },
      {
        name: "Buttermilk (Neer Mor)",
        description: "Cool, refreshing spiced buttermilk with ginger and curry leaves",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80",
        glutenFree: true,
      },
      {
        name: "Fresh Juice",
        description: "Seasonal fresh-pressed juice – ask about today's selection",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&q=80",
        vegan: true,
        glutenFree: true,
      },
    ],
  },
];

export const popularItems = menuCategories
  .flatMap((cat) => cat.items.filter((item) => item.popular))
  .slice(0, 8);
