import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Category } from "../types/category";

interface CategoryUI {
  category: Category;
  onPress?: () => void;
}

function CategoryIcon({ category, onPress }: CategoryUI) {
  return (
    <Pressable>
      <View style={styles.container}>
        <Image style={styles.icon} source={category.icon} />
        <Text style={styles.label}>{category.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 72,
    gap: 4,
  },
  icon: {
    width: 64,
    height: 52,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CategoryIcon;
