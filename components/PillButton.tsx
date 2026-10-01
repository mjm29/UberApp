import { useColorScheme } from "@/components/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Pill } from "../types/pill";

interface PillUI {
  pill: Pill;
  onPress?: () => void;
}

function PillButton({ pill, onPress }: PillUI) {
  const colorScheme = useColorScheme();
  if (pill.showOverlayButton) {
    return (
      <Pressable style={styles.pill}>
        <Text style={{ fontWeight: "700" }}>
          {pill.icon &&
            (typeof pill.icon === "string" ? (
              <Ionicons name={pill.icon as keyof typeof Ionicons.glyphMap} />
            ) : (
              <Image source={pill.icon} style={{ width: 16, height: 16 }} />
            ))}
          {pill.label}
          <Ionicons name="chevron-down-sharp" />
        </Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable style={styles.pill}>
        <Text style={{ fontWeight: "700" }}>
          {pill.icon &&
            (typeof pill.icon === "string" ? (
              <Ionicons name={pill.icon as keyof typeof Ionicons.glyphMap} />
            ) : (
              <Image source={pill.icon} style={{ width: 16, height: 16 }} />
            ))}
          {pill.label}
        </Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 20,
    backgroundColor: "#ececec",
    fontSize: 12,
    justifyContent: "center",
    padding: 8,
    gap: 4,
  },
});

export default PillButton;
