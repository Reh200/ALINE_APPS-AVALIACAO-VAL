import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

const Tabuleiro = () => {
  const renderTabuleiro = () => {
    let quadrados = [];
    let corAlternada = true;

    for (let i = 0; i < 4; i++) {
      let linha = [];
      for (let j = 0; j < 4; j++) {
        linha.push(
          <Quadrado key={`${i}-${j}`} cor={corAlternada} />
        );
        corAlternada = !corAlternada;
      }
      quadrados.push(
        <View key={i} style={styles.linha}>
          {linha}
        </View>
      );
      corAlternada = !corAlternada;
    }
    return quadrados;
  };

  return <View style={styles.container}>{renderTabuleiro()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linha: {
    flexDirection: 'row',
  },
});

export default Tabuleiro;
