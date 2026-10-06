import { STORES } from "@/constants/stores";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const course = STORES.find((s) => s.name === id);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image
            source={require("@/assets/images/subway.jpeg")}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.header}>
            <Pressable style={styles.headerBtns} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={20} color="#fff" />
            </Pressable>
            <View style={styles.rightBtns}>
              <Pressable style={styles.headerBtns}>
                <Ionicons name="search" size={20} color="#fff" />
              </Pressable>
              <Pressable style={styles.headerBtns}>
                <Ionicons name="heart-outline" size={20} color="#fff" />
              </Pressable>
              <Pressable style={styles.headerBtns}>
                <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.title}>
            <Image
              source={require("@/assets/images/subway-logo.png")}
              style={styles.logo}
            />
            <View style={styles.details}>
              <Text>Subway</Text>
              <Text>...</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heroContainer: {
    height: 220,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    gap: 180,
  },
  headerBtns: {
    margin: 8,
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  rightBtns: {
    flexDirection: "row",
  },
  main: {
    marginTop: -40,
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16,
  },
  title: {
    flexDirection: "row",
    gap: 4,
  },
  logo: {
    width: 64,
    height: 64,
  },
  details: {
    flexDirection: "column",
  },
});
