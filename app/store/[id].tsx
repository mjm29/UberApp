import DeliveryPickupToggle from "@/components/DeliveryPickupToggle";
import MenuItem from "@/components/MenuItem";
import { SUBWAYITEMS } from "@/constants/menuItems";
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
import { SafeAreaView } from "react-native-safe-area-context";

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const store = STORES.find((s) => s.name === id);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroContainer}>
          <Image
            source={store?.imageURL}
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
            <View>
              <Text style={styles.details}>{store?.name}</Text>
              <Text>
                4.0 <Ionicons name="star" /> (160+)
              </Text>
              <Text>
                <Ionicons name="location" /> 5246 50 Avenue Se
              </Text>
              <Text style={styles.badge}>150+ people reordered</Text>
            </View>
          </View>
          <DeliveryPickupToggle />
          <View style={styles.infoBox}>
            <View style={styles.borderLeft}>
              <Text style={{ fontWeight: "700" }}>$0.99 Delivery Fee+</Text>
              <Text style={{ fontWeight: "700" }}>$2.50-$6.50 Service Fee</Text>
              <Text style={{ color: "#a5a5a5" }}>
                Pricing & fees
                <Ionicons name="information-circle-outline" />
              </Text>
            </View>
            <View style={styles.borderRight}>
              <Text style={{ fontWeight: "700" }}>22 min</Text>
              <Text style={{ color: "#a5a5a5" }}>
                Earliest arrival
                <Ionicons name="information-circle-outline" />
              </Text>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.promoScrollContainer}
          >
            <Image
              style={{ width: 320, height: 108 }}
              source={require("@/assets/images/uber-one-ad.png")}
              resizeMode="contain"
            />
            <Image
              style={{ width: 300, height: 84 }}
              source={require("@/assets/images/pickup-ad.png")}
              resizeMode="contain"
            />
          </ScrollView>
          <View>
            <Text style={{ fontWeight: "900", fontSize: 20 }}>
              Free with $20 purchase
            </Text>
            <Text style={{ color: "#a5a5a5" }}>Max 1 free item per order</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 8,
                paddingHorizontal: 4,
              }}
            >
              {SUBWAYITEMS.map((item) => (
                <MenuItem key={item.id} details={item} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    gap: 16,
  },
  logo: {
    width: 64,
    height: 64,
  },
  details: {
    fontWeight: "900",
    fontSize: 24,
  },
  badge: {
    backgroundColor: "#a4f4cf",
    color: "#007a55",
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  infoBox: {
    flexDirection: "row",
    marginBottom: 12,
  },
  borderLeft: {
    alignItems: "center",
    gap: 2,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderStyle: "solid",
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },
  borderRight: {
    width: "50%",
    alignItems: "center",
    gap: 2,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderStyle: "solid",
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },
  promoScrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
