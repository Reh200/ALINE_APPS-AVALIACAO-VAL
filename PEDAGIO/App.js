import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Pedagio from './components/pedagio';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/pedagio.jpg')} style={styles.imagem} />
      <Text style={styles.titulo}>Simulador de Pedágio</Text>
      <Pedagio />
    </View>
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
  },
  titulo: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
