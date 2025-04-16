import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Tabuleiro from './components/Tabuleiro';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/pecas-xadrez.jpeg')}
        style={styles.imagem}
        resizeMode="cover"
      />
      <View style={styles.tabuleiroContainer}>
        <Tabuleiro />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 200,
  },
  tabuleiroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
