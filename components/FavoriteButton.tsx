/**
 * This favorite button component can be interacted with instead of using a static image.
 */

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function FavoriteButton() {
  const [favorited, setFavorited] = useState(false);

  return (
    <Pressable
      style={styles.button}
      onPress={() => setFavorited(!favorited)}
      hitSlop={10}
    >
      {favorited ? (
        <Ionicons name="heart" size={20} color="#E11D48" />
      ) : (
        <Ionicons name="heart-outline" size={20} color="gray" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(246, 246, 246, 0)",
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
