import { HeaderTabItem } from "@/components/Header";
import { Href } from "expo-router";

export const APPSECTIONS: HeaderTabItem[] = [
  {
    id: "1",
    label: "Delivery",
    icon: require("../assets/images/delivery.png"),
    link: "/(tabs)/(home)/" as Href,
  },
  {
    id: "2",
    label: "Rides",
    icon: require("../assets/images/rides2.png"),
    link: "(tabs)/(home)/rides" as Href,
  },
  {
    id: "3",
    label: "Pickup",
    icon: require("../assets/images/pickup2.png"),
    link: "(tabs)/(home)/pickup" as Href,
  },
  {
    id: "4",
    label: "Dine Out",
    icon: require("../assets/images/DineOut.png"),
    link: "(tabs)/(home)/dineout" as Href,
  },
  {
    id: "5",
    label: "Convenience",
    icon: require("../assets/images/convenience.png"),
    link: "(tabs)/(home)/rides" as Href,
  },
];
