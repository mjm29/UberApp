import { Image, StyleSheet, View } from "react-native";
export default function MapPreview() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/mapIcon.png")} // replace with your image path
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 350,
    height: 120,
  },
});
