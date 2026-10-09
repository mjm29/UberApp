/**
 * This file stores all mock store data.
 * To add a new store (either a single store or a set of them):
 *    export const {Variable Name}: StoreCard or StoreCard[] for a set of stores {
 *      id --> for mapping function
 *      name --> store name
 *      imageURL --> the format is require("path to image")
 *      type: "card" --> always put card as its value
 *      promoText --> optional prop: will render a red badge on the top left corner of the card (used for discounts and deals etc.)
 *      deliveryFee
 *      deliveryTime
 *      rating
 *    }
 * Dont forget to import {Variable Name} from "@/constants/stores" on the page you are working on to use it
 */
import { StoreCard } from "../types/card";

export const STORES: StoreCard[] = [
  {
    id: "1",
    name: "Subway",
    imageURL: require("../assets/images/subway.jpeg"),
    type: "card",
    deliveryFee: 4.99,
    deliveryTime: "15 min.",
    rating: 4.1,
  },
  {
    id: "2",
    name: "Hankki",
    imageURL: require("../assets/images/hankki1.jpeg"),
    type: "card",
    promoText: "$7 off $35+",
    deliveryFee: 0.99,
    deliveryTime: "20 min.",
    rating: 4.1,
  },
];

export const REVIEWEDSTORES: StoreCard[] = [
  {
    id: "1",
    name: "Lovely Sweets House & Takeout",
    imageURL: require("../assets/images/lovely-sweets.png"),
    type: "card",
    deliveryFee: 3.99,
    deliveryTime: "28 min.",
    rating: 4.2,
  },
  {
    id: "2",
    name: "The Chai Bar",
    imageURL: require("../assets/images/chai-tea-bar.jpg"),
    type: "card",
    deliveryFee: 0.99,
    deliveryTime: "31 min.",
    rating: 4.4,
  },
];
