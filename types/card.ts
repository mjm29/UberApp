/**
 * interfaces for card like components
 * for other types of cards, use extends
 */

import { ImageSourcePropType } from "react-native";

export interface Card {
  id: string;
  name: string;
  imageURL: ImageSourcePropType;
  promoText?: string;
  type: string;
}

//for restaurant cards
export interface StoreCard extends Card {
  deliveryTime: string;
  deliveryFee: number;
  rating: number;
}

//for dine out cards
export interface DineOutCard extends Card {
  rating: number;
  reviewCount: string;
  priceLevel: 1 | 2 | 3 | 4; // number of $ signs
  distance: string; 
  cuisine: string;
  accentColor?: string; // colored info panel under the image 
}
