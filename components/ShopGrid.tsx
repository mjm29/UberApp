import { View, Text, Image, StyleSheet } from 'react-native';

import { shops } from '../constants/categories';

export default function ShopGrid() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shops near you</Text>
      <View style={styles.grid}>
        {shops.map((shop) => (
          <View key={shop.id} style={styles.shopItem}>
            <View style={[styles.circle, { backgroundColor: shop.color }]}>
              <Image 
                source={shop.image} 
                style={styles.logoImage} 
                resizeMode="contain" 
              />
            </View>
            {shop.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{shop.badge}</Text>
              </View>
            )}
            <Text style={styles.shopName} numberOfLines={1}>
              {shop.name}
            </Text>
            <Text style={styles.shopTime}>{shop.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 24,
  },
  shopItem: {
    width: '22%',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '70%',
    height: '70%',
  },
  shopName: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  shopTime: {
    fontSize: 12,
    color: '#666',
  },
  badge: {
    position: 'absolute',
    top: 50,
    backgroundColor: '#d32f2f',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 4,
    zIndex: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
});