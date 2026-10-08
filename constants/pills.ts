/**
 * Data for the sorting pills at the delivery page
 */

import { Pill } from "@/types/pill";

export const PILLS: Pill[] = [
  {
    id: "1",
    icon: require("../assets/images/offers.png"),
    label: "Offers",
    showOverlayButton: false,
    type: "pill",
  },
  { id: "2", label: "Delivery fee", showOverlayButton: true, type: "pill" },
  { id: "3", label: "Under 30 min", showOverlayButton: false, type: "pill" },
  {
    id: "4",
    icon: "medal-outline",
    label: "Best overall",
    showOverlayButton: false,
    type: "pill",
  },
  {
    id: "5",
    icon: "star",
    label: "Rating",
    showOverlayButton: true,
    type: "pill",
  },
  { id: "6", label: "Price", showOverlayButton: true, type: "pill" },
  {
    id: "7",
    icon: "cash-outline",
    label: "Cash Accepted",
    showOverlayButton: false,
    type: "pill",
  },
  { id: "8", label: "Sort", showOverlayButton: true, type: "pill" },
];

export const pickupPills: Pill[] = 
[
 {
    id: "1",
    icon: require("../assets/images/offers.png"),
    label: "Offers",
    showOverlayButton: false,
    type: "pill",
  },
  {id: "2",label: "Cuisine", icon: "arrow-down-sharp", showOverlayButton: false, type: "pill",},
  {
    id: "3",
    icon: "medal-outline",
    label: "Best overall",
    showOverlayButton: false,
    type: "pill",
  },
  {
    id: "4",
    icon: "star",
    label: "Rating",
    showOverlayButton: true,
    type: "pill",
  },



]