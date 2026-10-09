import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function DeliveryPickupToggle() {
  const [selectedMode, setSelectedMode] = useState<"delivery" | "pickup">(
    "delivery",
  );
  return (
    <View style={styles.container}>
      <View style={styles.segmentedToggle}>
        <Pressable
          style={[
            styles.segmentBtn,
            selectedMode === "delivery" && styles.activeCard,
          ]}
          onPress={() => setSelectedMode("delivery")}
        >
          <Ionicons
            name="bag-handle-outline"
            size={18}
            color={selectedMode === "delivery" ? "#000" : "#6B7280"}
          />
          <Text
            style={[
              styles.segmentText,
              selectedMode === "delivery" && styles.activeText,
            ]}
          >
            Delivery
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.segmentBtn,
            selectedMode === "pickup" && styles.activeCard,
          ]}
          onPress={() => setSelectedMode("pickup")}
        >
          <Ionicons
            name="walk"
            size={18}
            color={selectedMode === "delivery" ? "#000" : "#6B7280"}
          />
          <Text
            style={[
              styles.segmentText,
              selectedMode === "pickup" && styles.activeText,
            ]}
          >
            Pickup
          </Text>
        </Pressable>
      </View>
      <View style={styles.standaloneTile}>
        <Ionicons name="car-outline" size={20} color="#000" />
        <Text style={styles.tileText}>Ride</Text>
      </View>
      <View style={styles.standaloneTile}>
        <Ionicons name="person-add-outline" size={20} color="#000" />
        <Text style={styles.tileText}>Group</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 12,
  },

  segmentedToggle: {
    width: "50%",
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    padding: 4,
    height: 56,
    marginRight: 12,
  },
  segmentBtn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  activeCard: {
    backgroundColor: "#FFF",
    //iOS shadows
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    //for android implementation
    elevation: 2,
  },
  segmentText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
    marginTop: 2,
  },
  activeText: {
    color: "#000000",
    fontWeight: "700",
  },

  standaloneTile: {
    width: 72,
    height: 56,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  tileText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    marginTop: 2,
  },
});

export default DeliveryPickupToggle;
