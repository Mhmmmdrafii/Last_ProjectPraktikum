import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const promoData = [
  { id: '1', image: 'https://via.placeholder.com/300x100?text=Promo+1' },
  { id: '2', image: 'https://via.placeholder.com/300x100?text=Promo+2' },
  { id: '3', image: 'https://via.placeholder.com/300x100?text=Promo+3' },
];

export default function MainScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1 >= promoData.length ? 0 : prevIndex + 1;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000); // Ubah setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  const renderPromoItem = ({ item }: { item: { id: string; image: string } }) => (
    <Image source={{ uri: item.image }} style={styles.promoImage} />
  );

  return (
    <View style={styles.container}>
      {/* BalanceCard */}
      <View style={styles.balanceCard}>
        <Text style={styles.text}>Saldo Utama</Text>
        <Text style={styles.balance}>Rp ∞.,</Text>
      </View>

      {/* FeatureGrid */}
      <View style={styles.featureGrid}>
        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureText}>Tagihan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Text style={styles.featureText}>Transfer</Text>
        </TouchableOpacity>
      </View>

      {/* PromoBanner */}
      <FlatList
        data={promoData}
        renderItem={renderPromoItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width - 40} // Sesuaikan dengan lebar gambar agar berhenti di setiap banner
        snapToAlignment="center"
        decelerationRate="fast"
        ref={flatListRef}
        style={styles.promoBanner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  balanceCard: {
    backgroundColor: '#1E90FF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  balance: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  featureItem: {
    backgroundColor: '#FFF',
    width: '30%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  featureText: {
    color: '#333',
    fontWeight: 'bold',
  },
  promoBanner: {
    marginTop: 20,
  },
  promoImage: {
    width: width - 40, // Sesuaikan lebar dengan layar
    height: 150,
  },
});