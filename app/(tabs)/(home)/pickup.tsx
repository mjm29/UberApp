import Carousel from "@/components/Carousel";
import MapPreview from "@/components/MapIcon";
import RestaurantCard from "@/components/RestaurantCard";
import { pickupPills } from "@/constants/pills";
import { STORES } from "@/constants/stores";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Pickup() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.main}>
        <Carousel items={pickupPills} />
        <MapPreview />
        <RestaurantCard card={STORES[0]} singleCard={true} />
        <RestaurantCard card={STORES[1]} singleCard={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: 8,
    paddingHorizontal: 8,
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
