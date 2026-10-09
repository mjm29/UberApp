/**
 * Main landing page
 */
import Carousel from "@/components/Carousel";
import RestaurantCard from "@/components/RestaurantCard";
import { CATEGORIES } from "@/constants/categories";
import { PILLS } from "@/constants/pills";
import { STORES } from "@/constants/stores";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Main vertically scrollable content */}
        <ScrollView contentContainerStyle={styles.main}>
          <Carousel items={CATEGORIES} />
          <Carousel items={PILLS} />
          <Text style={styles.subtext}>
            Delivery Fees & Service Fees are charged for delivery orders in
            addition to item prices
          </Text>
          <Text
            style={{
              marginRight: "auto",
              textDecorationLine: "underline",
              padding: 12,
              color: "#545454",
            }}
          >
            Learn More
          </Text>
          <Carousel
            items={STORES}
            sectionTitle="Featured on Uber Eats"
            linkOn={true}
          />
          <Carousel
            items={STORES}
            sectionTitle="Stores Near you"
            linkOn={true}
          />
          <Link href="/store/Subway" asChild>
            <RestaurantCard card={STORES[0]} singleCard={true} />
          </Link>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subtext: {
    paddingHorizontal: 12,
    color: "#545454",
  },
});
