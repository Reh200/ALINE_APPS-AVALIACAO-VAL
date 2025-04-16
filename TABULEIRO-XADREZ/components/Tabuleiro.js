import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Tabuleiro() {
  return (
    <View style={styles.tabuleiro}>
      {/* Linha 1 */}
      <View style={styles.linha}>
        <View style={[styles.quadrado, styles.branco]} />
        <View style={[styles.quadrado, styles.preto]} />
        <View style={[styles.quadrado, styles.branco]} />
        <View style={[styles.quadrado, styles.preto]} />
      </View>

      {/* Linha 2 */}
      <View style={styles.linha}>
        <View style={[styles.quadrado, styles.preto]} />
        <View style={[styles.quadrado, styles.branco]} />
        <View style={[styles.quadrado, styles.preto]} />
        <View style={[styles.quadrado, styles.branco]} />
      </View>

      {/* Linha 3 */}
      <View style={styles.linha}>
        <View style={[styles.quadrado, styles.branco]} />
        <View style={[styles.quadrado, styles.preto]} />
        <View style={[styles.quadrado, styles.branco]} />
        <View style={[styles.quadrado, styles.preto]} />
      </View>

      {/* Linha 4 */}
      <View style={styles.linha}>
        <View style={[styles.quadrado, styles.preto]} />
        <View style={[styles.quadrado, styles.branco]} />
        <View style={[styles.quadrado, styles.preto]} />
        <View style={[styles.quadrado, styles.branco]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabuleiro: {
    marginTop: 10,
  },
  linha: {
    flexDirection: 'row',
  },
  quadrado: {
    width: 60,
    height: 60,
  },
  branco: {
    backgroundColor: '#fff',
  },
  preto: {
    backgroundColor: '#000',
  },
});
