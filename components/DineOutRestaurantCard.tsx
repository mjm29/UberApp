/**
 * Card used on the dine out page. It has 3 variants:
 *  featured --> big image with a colored info panel under it (accentColor on the card sets the color)
 *  plain    --> big image with the info under it and a favorite button
 *  compact  --> small bordered card, used in the 2 row grid
 */

import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DineOutCard } from "../types/card";
import FavoriteButton from "./FavoriteButton";

export type DineOutVariant = "featured" | "plain" | "compact";

interface DineOutCardUI {
  card: DineOutCard;
  variant?: DineOutVariant;
  onPress?: () => void;
}

function DineOutRestaurantCard({
  card,
  variant = "plain",
  onPress,
}: DineOutCardUI) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const textColor = isFeatured ? "#FFFFFF" : "#000000";
  const subtextColor = isFeatured ? "#FFFFFF" : "#545454";

  // 4.7★ (250+) ・ $$ ・ 4.3 km
  const infoLine = (
    <Text style={[styles.subtext, { color: subtextColor }]} numberOfLines={1}>
      {card.rating}
      <Ionicons name="star" size={13} color={isFeatured ? "#FFFFFF" : "#F5A623"} />
      {` (${card.reviewCount})・${"$".repeat(card.priceLevel)}・${card.distance}`}
    </Text>
  );

  return (
    <Pressable
      style={[
        isCompact ? styles.compactContainer : styles.container,
        isCompact && styles.compactBorder,
      ]}
      onPress={onPress}
    >
      <Image
        source={card.imageURL}
        style={[
          isCompact ? styles.compactImage : styles.cardImage,
          isFeatured && styles.featuredImage,
        ]}
        resizeMode="cover"
      />
      <View
        style={[
          styles.details,
          isCompact && styles.compactDetails,
          isFeatured && [
            styles.featuredDetails,
            { backgroundColor: card.accentColor ?? "#3D6B00" },
          ],
        ]}
      >
        <View style={styles.detailHeader}>
          <Text
            style={[
              isCompact ? styles.compactTitle : styles.title,
              { color: textColor },
              variant === "plain" && { flex: 1 },
            ]}
            numberOfLines={1}
          >
            {card.name}
          </Text>
          {variant === "plain" && <FavoriteButton />}
        </View>
        {infoLine}
        {isFeatured && (
          <Text style={[styles.cuisine, { color: subtextColor }]}>
            {card.cuisine}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 260,
  },
  cardImage: {
    width: "100%",
    height: 170,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
  },
  featuredImage: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  details: {
    marginTop: 8,
  },
  featuredDetails: {
    marginTop: 0,
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    gap: 4,
  },
  detailHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
  },
  subtext: {
    fontSize: 14,
    marginTop: 2,
  },
  cuisine: {
    fontSize: 14,
    marginTop: 4,
  },
  compactContainer: {
    width: 180,
  },
  compactBorder: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  compactImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#F3F4F6",
  },
  compactDetails: {
    marginTop: 0,
    padding: 10,
  },
  compactTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "900",
  },
});

export default DineOutRestaurantCard;