/**
 * Dine out page
 */
import Carousel from "@/components/Carousel";
import DineOutCarousel from "@/components/DineOutCarousel";
import {
  DATE_NIGHT_PICKS,
  GOOD_FOR_GROUPS,
  GREAT_VALUE,
  MOST_BOOKED,
  NEIGHBOURHOOD_GEMS,
} from "@/constants/dineout";
import { DINEOUT_PILLS } from "@/constants/pills";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function DineOut() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Main vertically scrollable content */}
        <ScrollView contentContainerStyle={styles.main}>
          <Carousel items={DINEOUT_PILLS} />
          <DineOutCarousel
            items={MOST_BOOKED}
            sectionTitle="Most booked"
            variant="compact"
            rows={2}
          />
          <DineOutCarousel
            items={GREAT_VALUE}
            sectionTitle="Great food, great value"
          />
          <DineOutCarousel
            items={NEIGHBOURHOOD_GEMS}
            sectionTitle="Neighbourhood gems"
            variant="featured"
          />
          <DineOutCarousel
            items={DATE_NIGHT_PICKS}
            sectionTitle="Date night picks"
          />
          <DineOutCarousel
            items={GOOD_FOR_GROUPS}
            sectionTitle="Good for groups"
          />
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
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 24,
  },
});