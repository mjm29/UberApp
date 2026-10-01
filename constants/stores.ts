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
