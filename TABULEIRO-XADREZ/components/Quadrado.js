import React from 'react';
import { View, StyleSheet } from 'react-native';

const Quadrado = ({ cor }) => {
  return (
    <View
      style={[
        styles.quadrado,
        {
          backgroundColor: cor ? '#fff' : '#000',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  quadrado: {
    width: 60,
    height: 60,
  },
});

export default Quadrado;
