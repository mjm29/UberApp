import { Ionicons } from "@expo/vector-icons";

export interface Feature {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  desc?: string;
}
