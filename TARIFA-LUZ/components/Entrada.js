import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Entrada = ({ onCalcular }) => {
  const [consumo, setConsumo] = useState('');
  const [bandeira, setBandeira] = useState('verde');
  const [erro, setErro] = useState('');

  const calcularTotal = () => {
    if (consumo && !isNaN(consumo) && consumo > 0) {
      const consumoNumerico = parseFloat(consumo);
      let valorPorKwh;

      switch (bandeira) {
        case 'verde':
          valorPorKwh = 0.50;
          break;
        case 'amarela':
          valorPorKwh = 0.55;
          break;
        case 'vermelha1':
          valorPorKwh = 0.60;
          break;
        case 'vermelha2':
          valorPorKwh = 0.70;
          break;
        default:
          valorPorKwh = 0.50;
      }

      const total = consumoNumerico * valorPorKwh;
      onCalcular({ consumo: consumoNumerico, bandeira, total });
      setErro('');
    } else {
      setErro('Por favor, insira um valor válido para o consumo!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Consumo em kWh:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite o consumo em kWh"
        value={consumo}
        onChangeText={setConsumo}
      />

      <Text style={styles.label}>Escolha a Bandeira Tarifária:</Text>
      <View style={styles.bandeirasContainer}>
        {['verde', 'amarela', 'vermelha1', 'vermelha2'].map((option) => (
          <TouchableOpacity 
            key={option} 
            style={[styles.bandeiraButton, bandeira === option && styles.bandeiraButtonSelecionado]}
            onPress={() => setBandeira(option)}>
            <Text style={styles.bandeiraButtonText}>{option.charAt(0).toUpperCase() + option.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <Button title="Calcular" onPress={calcularTotal} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',  
    alignItems: 'center',  
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  bandeirasContainer: {
    flexDirection: 'row',  // Organiza as bandeiras em linha
    flexWrap: 'wrap',  // Permite que as bandeiras quebrem para a linha seguinte se necessário
    justifyContent: 'center',  // Alinha as bandeiras no centro
    marginBottom: 20,
    width: '100%',
  },
  bandeiraButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    width: '45%',  
    margin: 5,  
    alignItems: 'center',
  },
  bandeiraButtonSelecionado: {
    backgroundColor: '#007BFF',
  },
  bandeiraButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  erro: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Entrada;
