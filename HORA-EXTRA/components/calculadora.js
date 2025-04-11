import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function calculadora() {
  const [salarioBase, setSalarioBase] = useState('');
  const [horas, setHoras] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcular() {
    if (!salarioBase || !horas) {
      setResultado('Preencha todos os campos');
      return;
    }

    const salario = +salarioBase;
    const totalHoras = +horas;
    const valorHora = salario / 160;
    let total = salario;

    if (totalHoras > 160) {
      const extra = totalHoras - 160;
      total += extra * (valorHora * 1.5);
    }

    setResultado(`R$ ${total.toFixed(2)}`);
  }

  return (
    <View style={estilo.area}>
      <TextInput
        style={estilo.input}
        placeholder="Salário base"
        keyboardType="numeric"
        value={salarioBase}
        onChangeText={setSalarioBase}
      />

      <TextInput
        style={estilo.input}
        placeholder="Horas trabalhadas"
        keyboardType="numeric"
        value={horas}
        onChangeText={setHoras}
      />

      <Button title="Calcular" onPress={calcular} />

      {resultado && <Text style={estilo.resultado}>Salário final: {resultado}</Text>}
    </View>
  );
}

const estilo = StyleSheet.create({
  area: { marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
