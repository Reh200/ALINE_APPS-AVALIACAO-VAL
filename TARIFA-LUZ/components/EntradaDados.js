import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function EntradaDados({ consumo, setConsumo, bandeira, setBandeira, calcular }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>Consumo em kWh:</Text>
      <TextInput
        value={consumo}
        onChangeText={setConsumo}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.text}>Bandeira (verde, amarela, vermelha1, vermelha2):</Text>
      <TextInput
        value={bandeira}
        onChangeText={setBandeira}
        style={styles.input}
      />

      <Button title="Calcular" onPress={calcular} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
