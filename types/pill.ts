import { Ionicons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";

export interface Pill {
  id: string;
  label: string;
  icon?: keyof typeof Ionicons.glyphMap | ImageSourcePropType;
  showOverlayButton: boolean;
  type: string;
}
