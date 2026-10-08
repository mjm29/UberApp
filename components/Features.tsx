import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import {Feature} from "../types/feature";
import { FEATURES } from "../constants/features";

// Features.tsx

export default function Features() {
  return (


    <View>
      {FEATURES.map((feature) => ( //got this part from ai, because I forgot where the slides for this is
        <View key={feature.text} style={styles.features}>
          <Ionicons name={feature.icon} size={25} />
          <Text>{feature.text}</Text>
        </View>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  features:{
    flexDirection:"row",
    gap:25,
    marginVertical:10,
  }
});
