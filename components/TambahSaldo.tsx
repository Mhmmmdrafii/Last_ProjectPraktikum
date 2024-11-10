import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TambahSaldo({ navigation }) {
  const [inputValue, setInputValue] = useState('');

  const handleSave = () => {
    // Tambahkan logika untuk menyimpan saldo, atau navigasi kembali
    console.log('Saldo baru:', inputValue);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Masukkan Saldo Baru</Text>
      <TextInput
        style={styles.input}
        placeholder="Jumlah Saldo"
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Simpan" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});