import Carousel from "@/components/Carousel";
import { pickupPills, PILLS } from "@/constants/pills";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MapPreview from "@/components/MapIcon"
import { STORES } from "@/constants/stores";
import RestaurantCard from "@/components/RestaurantCard";
export default function Pickup() {
  return (
    <SafeAreaView style={styles.container}>
         <ScrollView contentContainerStyle={styles.main}>
          <Carousel items={pickupPills}/>
          <MapPreview/>
          <RestaurantCard card={STORES[0]} singleCard={false} />
          <RestaurantCard card={STORES[1]} singleCard={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#fff"
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