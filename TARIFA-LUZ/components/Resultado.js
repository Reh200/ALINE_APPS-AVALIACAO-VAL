import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Resultado({ resultado }) {
  return (
    resultado ? (
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultado}</Text>
      </View>
    ) : null
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
