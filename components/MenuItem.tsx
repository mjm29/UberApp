import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

export interface MenuItemProps {
  id: string;
  imageURL: ImageSourcePropType;
  name: string;
  price: number;
  promoText?: string;
  bestSellerText?: string;
  rating: string;
}

interface MenuDetails {
  details: MenuItemProps;
}

function MenuItem({ details }: MenuDetails) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={details.imageURL} style={styles.imageContainer} />
        <Ionicons name="add" style={styles.addBtn} size={20} />
      </View>
      <Text style={styles.itemName}>{details.name}</Text>
      <Text>
        ${details.price} {details.rating}
      </Text>
      {details.promoText ? (
        <Text style={styles.promoBadge}>{details.promoText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 240,
  },
  imageContainer: {
    height: 160,
    width: "auto",
    borderRadius: 16,
  },
  itemName: {
    fontWeight: "700",
  },
  promoBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#EF4444",
    color: "#FFF",
    borderRadius: 4,
    paddingHorizontal: 4,
  },
  addBtn: {
    position: "absolute",
    bottom: 4,
    right: 4,
    borderRadius: 25,
    backgroundColor: "#FFF",
    padding: 8,
    //iOS shadows
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    //for android implementation
    elevation: 2,
  },
});

export default MenuItem;
