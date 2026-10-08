/**
 * Mock data for the categories carousel in the delivery page.
 */
import { Category } from "../types/category";
import type { ConvenienceCardData } from "../types/orders";

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
    ],
  },
  {
    id: "2",
    categoryTitle: "Snacks",
    storeName: "Dollarama",
    storeLogo: require("../assets/images/dollar.png"),
    products: [
      {
        id: "p3",
        name: "Takis Fuego Rolled Tortilla ...",
        price: "CA$ 3.25",
        subtitle: "280 g",
        image: require("../assets/images/takis.jpeg"),
      },
      {
        id: "p4",
        name: "Orville Redenbacher's Original Kernel Popping Corn",
        price: "CA$ 4.50",
        subtitle: "200 g",
        image: require("../assets/images/orville.jpeg"),
      },
    ],
  },
];
