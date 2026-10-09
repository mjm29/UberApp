/**
 * Mock data for the categories carousel in the delivery page.
 */
import { Category } from "../types/category";
import type { ConvenienceCardData } from "../types/orders";
import type { Shop } from "../types/stores";

export const shops: Shop[] = [
  {
    id: "1",
    name: "7-Eleven",
    time: "10 min",
    color: "#007953",
    image: require("../assets/images/7eleven.jpeg"),
  },
  {
    id: "2",
    name: "Sobeys",
    time: "35 min",
    color: "#fff",
    image: require("../assets/images/sobeys.jpeg"),
  },
  {
    id: "3",
    name: "Petro",
    time: "13 min",
    color: "#fff",
    image: require("../assets/images/petro.png"),
  },
  {
    id: "4",
    name: "Shell",
    time: "16 min",
    color: "#fff",
    image: require("../assets/images/shell.png"),
  },
  {
    id: "5",
    name: "Shoppers D...",
    time: "13 min",
    color: "#e31837",
    image: require("../assets/images/shoppers.png"),
  },
  {
    id: "6",
    name: "Dollarama",
    time: "13 min",
    color: "#fff",
    badge: "In-store prices",
    image: require("../assets/images/dollar.png"),
  },
  {
    id: "7",
    name: "london drugs",
    time: "13 min",
    color: "#004c97",
    image: require("../assets/images/london.png"),
  },
  {
    id: "8",
    name: "Rexall",
    time: "15 min",
    color: "#fff",
    image: require("../assets/images/rexall.png"),
  },
];

export const CATEGORIES: Category[] = [
  {
    id: "1",
    icon: require("../assets/images/groceries.jpg"),
    title: "Groceries",
    type: "category",
  },
  {
    id: "2",
    icon: require("../assets/images/chinese.png"),
    title: "Chinese",
    type: "category",
  },
  {
    id: "3",
    icon: require("../assets/images/korean.png"),
    title: "Korean",
    type: "category",
  },
  {
    id: "4",
    icon: require("../assets/images/bubble-tea.png"),
    title: "Bubble Tea",
    type: "category",
  },
  {
    id: "5",
    icon: require("../assets/images/healthy.png"),
    title: "Healthy",
    type: "category",
  },
  {
    id: "6",
    icon: require("../assets/images/sandwiches.png"),
    title: "Sandwiches",
    type: "category",
  },
];

export const exploreData: ConvenienceCardData[] = [
  {
    id: "1",
    categoryTitle: "Bestsellers",
    storeName: "Pretzelmaker",
    storeLogo: require("../assets/images/PrezelLogo.webp"),
    products: [
      {
        id: "p1",
        name: "Pretzelmaker Pretzel Bites",
        price: "CA$ 6.99",
        image: require("../assets/images/pretzel.jpeg"),
      },
      {
        id: "p2",
        name: "Large Candy Treats",
        price: "Priced by add...",
        image: require("../assets/images/candies.webp"),
      },


      {
        id: "p3",
        name: "2 Large Candy Treats",
        price: "CA$ 10.99",
        image: require("../assets/images/candies.webp"),
      },

        {
        id: "p4",
        name: "Prezelmaker Pretzel ",
        price: "CA$ 5.99",
        image: require("../assets/images/PretzelmakeP.jpeg"),
      },

      
    ],
  },
  {
    id: "2",
    categoryTitle: "Snacks",
    storeName: "Dollarama",
    storeLogo: require("../assets/images/dollar.png"),
    products: [
      {
        id: "p1",
        name: "Takis Fuego Rolled Tortilla ...",
        price: "CA$ 3.25",
        subtitle: "280 g",
        image: require("../assets/images/takis.jpeg"),
      },
      {
        id: "p2",
        name: "Orville Redenbacher's Original Kernel Popping Corn",
        price: "CA$ 4.50",
        subtitle: "200 g",
        image: require("../assets/images/orville.jpeg"),
      },

      {
        id: "p3",
        name: "Orville Redenbacher's Original Kernel Popping Corn",
        price: "CA$ 4.50",
        subtitle: "200 g",
        image: require("../assets/images/orville.jpeg"),
      },

        {
        id: "p4",
        name: "Ritz Crackers Original",
        price: "CA$ 2.75",
        subtitle: "200 g",
        image: require("../assets/images/crackers.jpeg"),
      },
    ],
  },
];
