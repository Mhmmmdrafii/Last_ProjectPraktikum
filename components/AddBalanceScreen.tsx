import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddBalanceScreen({ navigation }) {
  const [amount, setAmount] = useState('');

  const handleAddBalance = () => {
    // Logika menambah saldo
    console.log('Saldo yang ditambahkan:', amount);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tambah Saldo</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan jumlah saldo"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <Button title="Tambah" onPress={handleAddBalance} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});