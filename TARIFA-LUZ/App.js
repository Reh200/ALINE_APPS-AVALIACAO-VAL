import React from 'react';
import { View } from 'react-native';
import Calculadora from './components/Calculadora';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Calculadora />
    </View>
  );
}
