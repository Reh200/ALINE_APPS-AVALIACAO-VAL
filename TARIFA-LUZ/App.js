import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Entrada from './components/Entrada';
import Resultado from './components/Resultado';

export default function App() {
  const [dados, setDados] = useState(null); // Para armazenar os dados calculados

  const calcularResultado = (dadosCalculados) => {
    setDados(dadosCalculados); // Atualiza os dados com o resultado da conta
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/relogio-conta-luz.jpg')} style={styles.imagem} />
      <Text style={styles.titulo}>Simulador de Conta de Luz</Text>
      <Entrada onCalcular={calcularResultado} />
      <Resultado dados={dados} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});
