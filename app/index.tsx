import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BalanceCard from '../components/KartuSaldo';
import FeatureGrid from '../components/Fitur';
import Navbar from '../components/Navbar';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <BalanceCard />
        <FeatureGrid />
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
});