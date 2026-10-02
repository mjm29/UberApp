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
