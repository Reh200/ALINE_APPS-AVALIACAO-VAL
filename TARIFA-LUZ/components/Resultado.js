import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ dados }) => {
  if (!dados) {
    return null; // Retorna null caso os dados não estejam disponíveis
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado da Conta de Luz</Text>
      <Text style={styles.texto}>Consumo: {dados.consumo} kWh</Text>
      <Text style={styles.texto}>Bandeira: {dados.bandeira}</Text>
      <Text style={styles.texto}>Total a Pagar: R$ {dados.total.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default Resultado;
