import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Pedagio() {
  const [tipo, setTipo] = useState('');
  const [km, setKm] = useState('');
  const [total, setTotal] = useState('');

  function calcular() {
    let preco = 0;

    if (tipo === 'Carro') preco = 0.10;
    else if (tipo === 'Moto') preco = 0.05;
    else if (tipo === 'Caminhao') preco = 0.15;

    const valor = parseFloat(km) * preco;
    setTotal(`Total: R$ ${valor.toFixed(2)}`);
  }

  return (
    <View style={styles.area}>
      <TextInput
        style={styles.input}
        placeholder="Tipo (Carro, Moto ou Caminhao)"
        value={tipo}
        onChangeText={setTipo}
      />

      <TextInput
        style={styles.input}
        placeholder="Distância em km"
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />

      <Button title="Calcular" onPress={calcular} />

      {total !== '' && <Text style={styles.resultado}>{total}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
