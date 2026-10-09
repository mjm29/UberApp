/**
 * Carousel component takes a set of objects and displays them in a horizontal scrollview
 *  It also has an optional sectionTitle as a header
 */

import { useColorScheme } from "@/components/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StoreCard } from "../types/card";
import { Category } from "../types/category";
import { Pill } from "../types/pill";
import CategoryIcon from "./CategoryIcon";
import PillButton from "./PillButton";
import RestaurantCard from "./RestaurantCard";
interface CarouselUI {
  items: StoreCard[] | Category[] | Pill[];
  sectionTitle?: string;
  linkOn?: boolean;
}

function Carousel({ items, sectionTitle, linkOn }: CarouselUI) {
  const colorScheme = useColorScheme();
  //allows navigation for all subway restaurant cards to the details page
  if (linkOn) {
    items = items as StoreCard[];
    return (
      <View style={styles.container}>
        <View style={styles.carouselHeader}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          <Pressable style={{ marginRight: 15 }}>
            {({ pressed }) => <Ionicons name="arrow-forward-sharp" size={24} />}
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.carousel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((store) => {
            if (store.name === "Subway") {
              return (
                <Link key={store.id} href="/store/Subway" asChild>
                  <RestaurantCard card={store} />
                </Link>
              );
            } else {
              return <RestaurantCard key={store.id} card={store} />;
            }
          })}
        </ScrollView>
      </View>
    );
  }
  //for Carousel of cards
  if (items[0].type === "card") {
    items = items as StoreCard[];
    return (
      <View style={styles.container}>
        <View style={styles.carouselHeader}>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
          <Pressable style={{ marginRight: 15 }}>
            {({ pressed }) => <Ionicons name="arrow-forward-sharp" size={24} />}
          </Pressable>
        </View>
        <ScrollView
          contentContainerStyle={styles.carousel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((store) => (
            <RestaurantCard key={store.id} card={store} />
          ))}
        </ScrollView>
      </View>
    );
  } else if (items[0].type === "category") {
    //for carousel with categories inside
    items = items as Category[];
    return (
      <View style={categoriesStyles.container}>
        <ScrollView
          contentContainerStyle={categoriesStyles.carousel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((ctgry) => (
            <CategoryIcon key={ctgry.id} category={ctgry} />
          ))}
        </ScrollView>
      </View>
    );
  } else {
    // for carousel with pill components inside
    items = items as Pill[];
    return (
      <View style={styles.pillContainer}>
        <ScrollView
          contentContainerStyle={categoriesStyles.carousel}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((pills) => (
            <PillButton key={pills.id} pill={pills} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 280,
    marginHorizontal: 8,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
  },
  carousel: {
    gap: 8,
  },
  carouselHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pillContainer: {
    height: 40,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    gap: 16,
  },
});

const categoriesStyles = StyleSheet.create({
  container: {
    height: 100,
    padding: 12,
  },
  carousel: {
    gap: 8,
  },
});

export default Carousel;
