import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home-outline" size={20} color="#000" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="list-outline" size={20} color="#000" />
        <Text style={styles.navText}>Mutasi</Text>
      </TouchableOpacity>

      {/* Tombol QR di Tengah */}
      <TouchableOpacity style={styles.qrButton}>
        <Ionicons name="person-outline" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="time-outline" size={20} color="#000" />
        <Text style={styles.navText}>Aktivitas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="log-out-outline" size={20} color="#000" />
        <Text style={styles.navText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000',
  },
  qrButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50, // Membuat tombol QR menonjol ke atas navbar
  },
});