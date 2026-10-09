/**
 * Carousel for the dine out page. Displays a section title with an arrow button
 *  and a horizontal scrollview of DineOutRestaurantCards.
 *  rows --> optional, set to 2 to stack the cards into a 2 row grid (like "Most booked")
 */

import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { DineOutCard } from "../types/card";
import DineOutRestaurantCard, { DineOutVariant } from "./DineOutRestaurantCard";

interface DineOutCarouselUI {
  items: DineOutCard[];
  sectionTitle: string;
  variant?: DineOutVariant;
  rows?: number;
}

function DineOutCarousel({
  items,
  sectionTitle,
  variant = "plain",
  rows = 1,
}: DineOutCarouselUI) {
  //split the items into columns, each column holds "rows" cards stacked vertically
  const columns: DineOutCard[][] = [];
  for (let i = 0; i < items.length; i += rows) {
    columns.push(items.slice(i, i + rows));
  }

  return (
    <View style={styles.container}>
      <View style={styles.carouselHeader}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        <Pressable style={styles.arrowButton}>
          <Ionicons name="arrow-forward-sharp" size={20} />
        </Pressable>
      </View>
      <ScrollView
        contentContainerStyle={styles.carousel}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {columns.map((column, index) => (
          <View key={index} style={styles.column}>
            {column.map((restaurant) => (
              <DineOutRestaurantCard
                key={restaurant.id}
                card={restaurant}
                variant={variant}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginBottom: 24,
    gap: 12,
  },
  carouselHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "900",
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  carousel: {
    gap: 8,
  },
  column: {
    gap: 8,
  },
});

export default DineOutCarousel;