import Carousel from "@/components/Carousel";
import { pickupPills, PILLS } from "@/constants/pills";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Pickup() {
  return (
    <SafeAreaView>
      <View>
          <Carousel items={pickupPills}/>
      </View>
    </SafeAreaView>
  );
}
