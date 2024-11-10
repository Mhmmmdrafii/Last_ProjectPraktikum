import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// @ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const features = [
  { name: 'Lifestyle', icon: 'heartbeat' },
  { name: 'QRIS Transfer', icon: 'qrcode' },
  { name: 'Debit Virtual', icon: 'credit-card' },
  { name: 'Catatan Keuangan', icon: 'bar-chart' },
  { name: 'Investasi', icon: 'pie-chart' },
  { name: 'Donasi', icon: 'hand-paper-o' },
  { name: 'Konversi Valas', icon: 'exchange' },
  { name: 'Kartu Kredit', icon: 'id-card' },
  { name: 'Asuransi', icon: 'shield' },
];

export default function FeatureGrid() {
  return (
    <View style={styles.grid}>
      {features.map((feature, index) => (
        <TouchableOpacity key={index} style={styles.feature}>
          <View style={styles.iconContainer}>
            <FontAwesome name={feature.icon} size={24} color="#0056A5" />
          </View>
          <Text style={styles.label}>{feature.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20, 
  },
  feature: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconContainer: {
    backgroundColor: '#E0E0E0', // Ganti dengan warna latar belakang yang diinginkan
    padding: 10,
    borderRadius: 50, // Membuat latar belakang bulat
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
  },
});