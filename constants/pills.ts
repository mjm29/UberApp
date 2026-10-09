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

/**
 * Data for the filter pills at the dine out page
 */
export const DINEOUT_PILLS: Pill[] = [
  {
    id: "1",
    icon: require("../assets/images/calendar-icon.png"),
    label: "Reservations",
    showOverlayButton: true,
    type: "pill",
  },
  { id: "2", label: "Sort", showOverlayButton: true, type: "pill" },
  { id: "3", label: "Cuisine", showOverlayButton: true, type: "pill" },
  { id: "4", label: "Price", showOverlayButton: true, type: "pill" },
  { id: "5", label: "Rating", showOverlayButton: true, type: "pill" },
];
