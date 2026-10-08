import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

import { Shop } from '../types/stores';

const shops: Shop[] = [
  {
    id: '1',
    name: '7-Eleven',
    time: '10 min',
    color: '#007953',
    image: require('../assets/images/7eleven.jpeg'),
  },
  {
    id: '2',
    name: 'Sobeys',
    time: '35 min',
    color: '#fff',
    image: require('../assets/images/sobeys.jpeg'),
  },
  {
    id: '3',
    name: 'Petro',
    time: '13 min',
    color: '#fff',
    image: require('../assets/images/petro.png'),
  },
  {
    id: '4',
    name: 'Shell',
    time: '16 min',
    color: '#fff',
    image: require('../assets/images/shell.png'),
  },
  {
    id: '5',
    name: 'Shoppers D...',
    time: '13 min',
    color: '#e31837',
    image: require('../assets/images/shoppers.png'),
  },
  {
    id: '6',
    name: 'Dollarama',
    time: '13 min',
    color: '#fff',
    badge: 'In-store prices',
    image: require('../assets/images/dollar.png'),
  },
  {
    id: '7',
    name: 'london drugs',
    time: '13 min',
    color: '#004c97',
    image: require('../assets/images/london.png'),
  },
  {
    id: '8',
    name: 'Rexall',
    time: '15 min',
    color: '#fff',
    image: require('../assets/images/rexall.png'),
  },
];

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