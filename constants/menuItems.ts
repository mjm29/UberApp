import { MenuItemProps } from "@/components/MenuItem";

export const SUBWAYITEMS: MenuItemProps[] = [
  {
    id: "1",
    imageURL: require("@/assets/images/menu-item-2.png"),
    name: `Sweet Onion Chicken Teryaki (6")`,
    price: 9.99,
    promoText: "Free on $20+",
    rating: "81% (413)",
  },
  {
    id: "2",
    imageURL: require("@/assets/images/menu-item-1.png"),
    name: "Marinara Sub",
    price: 10.99,
    promoText: "Free on $20+",
    rating: "95% (227)",
  },
  {
    id: "3",
    imageURL: require("@/assets/images/menu-item-3.png"),
    name: `Turkey Breast (6")`,
    price: 8.59,
    promoText: "Free on $20+",
    rating: "100% (57)",
  },
];
