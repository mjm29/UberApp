/**
 * Mock data for the sections on the dine out page.
 * To add a new restaurant, add an object to one of the arrays below:
 *    id --> for mapping function
 *    name --> restaurant name
 *    imageURL --> the format is require("path to image")
 *    type: "dineout" --> always put dineout as its value
 *    rating
 *    reviewCount --> string so we can show things like "250+"
 *    priceLevel --> 1 to 4 (number of $ signs)
 *    distance
 *    cuisine
 *
 */
import { DineOutCard } from "../types/card";

export const MOST_BOOKED: DineOutCard[] = [
  {
    id: "1",
    name: "MAJOR TOM",
    imageURL: require("../assets/images/major-tom.png"),
    type: "card",
    rating: 4.7,
    reviewCount: "7,000+",
    priceLevel: 4,
    distance: "2.1 km",
    cuisine: "Canadian",
  },
  {
    id: "2",
    name: "Ten Foot Henry",
    imageURL: require("../assets/images/ten-foot-henry.png"),
    type: "card",
    rating: 4.9,
    reviewCount: "7,000+",
    priceLevel: 3,
    distance: "3.2 km",
    cuisine: "Vegetarian",
  },
  {
    id: "3",
    name: "The Keg Steakhouse + Bar",
    imageURL: require("../assets/images/the-keg-steak-house.jpeg"),
    type: "card",
    rating: 4.7,
    reviewCount: "6,000+",
    priceLevel: 3,
    distance: "1.9 km",
    cuisine: "Steakhouse",
  },
  {
    id: "4",
    name: "Native Tongues Taqueria",
    imageURL: require("../assets/images/native-tongues.png"),
    type: "card",
    rating: 4.6,
    reviewCount: "200+",
    priceLevel: 2,
    distance: "4.2 km",
    cuisine: "Mexican",
  },
  {
    id: "5",
    name: "Hankki",
    imageURL: require("../assets/images/hankki1.jpeg"),
    type: "card",
    rating: 4.5,
    reviewCount: "900+",
    priceLevel: 2,
    distance: "2.6 km",
    cuisine: "Korean",
  },
  {
    id: "6",
    name: "Shake Shack",
    imageURL: require("../assets/images/shakeShack.webp"),
    type: "card",
    rating: 4.4,
    reviewCount: "1,200+",
    priceLevel: 2,
    distance: "3.0 km",
    cuisine: "Burgers",
  },
];

export const NEIGHBOURHOOD_GEMS: DineOutCard[] = [
  {
    id: "1",
    name: "UNA pizza + wine Calgary: Beltline",
    imageURL: require("../assets/images/una-pizza.png"),
    type: "card",
    rating: 4.7,
    reviewCount: "250+",
    priceLevel: 2,
    distance: "4.3 km",
    cuisine: "Pizza",
    accentColor: "#3D6B00",
  },
  {
    id: "2",
    name: "Veranda at The Stables",
    imageURL: require("../assets/images/veranda-at-the-stables.png"),
    type: "card",
    rating: 4.5,
    reviewCount: "300+",
    priceLevel: 3,
    distance: "3.8 km",
    cuisine: "Canadian",
    accentColor: "#0B6378",
  },
  {
    id: "3",
    name: "Spices East India Dining",
    imageURL: require("../assets/images/spices.png"),
    type: "card",
    rating: 4.6,
    reviewCount: "400+",
    priceLevel: 2,
    distance: "2.4 km",
    cuisine: "Indian",
    accentColor: "#8A3B12",
  },
];

export const DATE_NIGHT_PICKS: DineOutCard[] = [
  {
    id: "1",
    name: "Satsuki",
    imageURL: require("../assets/images/satsuki.png"),
    type: "card",
    rating: 4.8,
    reviewCount: "330+",
    priceLevel: 3,
    distance: "1.5 km",
    cuisine: "Japanese",
  },
  {
    id: "2",
    name: "Teatro Restaurant",
    imageURL: require("../assets/images/teatro-restaurant.png"),
    type: "card",
    rating: 4.7,
    reviewCount: "3,000+",
    priceLevel: 4,
    distance: "2.2 km",
    cuisine: "Italian",
  },
  {
    id: "3",
    name: "Salt & Brick",
    imageURL: require("../assets/images/salt-and-bricks.png"),
    type: "card",
    rating: 4.5,
    reviewCount: "900+",
    priceLevel: 2,
    distance: "2.6 km",
    cuisine: "Contemporary Canadian",
  },
];

export const GOOD_FOR_GROUPS: DineOutCard[] = [
  {
    id: "1",
    name: "Ten Foot Henry",
    imageURL: require("../assets/images/ten-foot-henry.png"),
    type: "card",
    rating: 4.9,
    reviewCount: "7,000+",
    priceLevel: 3,
    distance: "3.2 km",
    cuisine: "Vegetarian",
  },
  {
    id: "2",
    name: "The Keg Steakhouse + Bar",
    imageURL: require("../assets/images/the-keg-steak-house.jpeg"),
    type: "card",
    rating: 4.7,
    reviewCount: "6,000+",
    priceLevel: 3,
    distance: "1.9 km",
    cuisine: "Steakhouse",
  },
  {
    id: "3",
    name: "Native Tongues Taqueria",
    imageURL: require("../assets/images/native-tongues.png"),
    type: "card",
    rating: 4.6,
    reviewCount: "200+",
    priceLevel: 2,
    distance: "4.2 km",
    cuisine: "Mexican",
  },
];

export const GREAT_VALUE: DineOutCard[] = [
  {
    id: "1",
    name: "Craft Beer Market",
    imageURL: require("../assets/images/craft-beer-market.jpeg"),
    type: "card",
    rating: 4.5,
    reviewCount: "5,000+",
    priceLevel: 2,
    distance: "2.0 km",
    cuisine: "Pub",
  },
  {
    id: "2",
    name: "Sushi Kaede",
    imageURL: require("../assets/images/sushi-kaede.jpg"),
    type: "card",
    rating: 4.6,
    reviewCount: "800+",
    priceLevel: 2,
    distance: "2.9 km",
    cuisine: "Japanese",
  },
  {
    id: "3",
    name: "Cactus Club",
    imageURL: require("../assets/images/cactus-club.jpeg"),
    type: "card",
    rating: 4.5,
    reviewCount: "900+",
    priceLevel: 2,
    distance: "2.6 km",
    cuisine: "Korean",
  },
];
