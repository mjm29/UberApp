import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { exploreData } from '../constants/categories';

export default function ConvenienceCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Explore Convenience</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {exploreData.map((card) => (
          <View key={card.id} style={styles.card}>
            {/* Header section */}
            <View style={styles.cardHeader}>
              <Image source={card.storeLogo} style={styles.storeLogo} resizeMode="contain" />
              <View style={styles.headerText}>
                <TouchableOpacity style={styles.titleRow} activeOpacity={0.7}>
                  <Text style={styles.categoryTitle}>{card.categoryTitle}</Text>
                  <Text style={styles.arrow}> →</Text>
                </TouchableOpacity>
                <Text style={styles.storeName}>{card.storeName}</Text>
              </View>
            </View>

            {/* Product Grid */}
            <View style={styles.productsRow}>
              {card.products.map((product) => (
                <View key={product.id} style={styles.productCard}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={product.image}
                      style={styles.productImage}
                      resizeMode="contain"
                    />
                    
                    <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
                      <Text style={styles.plusIcon}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.price}>{product.price}</Text>
                  <Text style={styles.productName} numberOfLines={2}>
                    {product.name}
                  </Text>
                  {product.subtitle ? (
                    <Text style={styles.subtitle}>{product.subtitle}</Text>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 290,
 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  storeLogo: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eee',
    marginRight: 10,
  },
  headerText: {
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  arrow: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  storeName: {
    fontSize: 12,
    color: '#666',
    marginTop: 1,
  },
  productsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  productCard: {
    width: '47%',
  },
  imageContainer: {
    width: '90%',
    height: 110,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  plusIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -2,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#000',
  },
  productName: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
    lineHeight: 16,
  },
  subtitle: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
  },
});