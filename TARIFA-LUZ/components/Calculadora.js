import React, { useState } from 'react';
import { View, Image } from 'react-native';
import EntradaDados from './EntradaDados';
import Resultado from './Resultado';

export default function Calculadora() {
  const [consumo, setConsumo] = useState('');
  const [bandeira, setBandeira] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const kwh = parseFloat(consumo);
    let preco = 0;

    if (bandeira === 'verde') preco = 0.5;
    else if (bandeira === 'amarela') preco = 0.55;
    else if (bandeira === 'vermelha1') preco = 0.6;
    else if (bandeira === 'vermelha2') preco = 0.7;

    const total = kwh * preco;
    setResultado('Total a pagar: R$ ' + total.toFixed(2));
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require('../assets/bandeira.png')}
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 20 }}
      />
      <EntradaDados
        consumo={consumo}
        setConsumo={setConsumo}
        bandeira={bandeira}
        setBandeira={setBandeira}
        calcular={calcular}
      />
      <Resultado resultado={resultado} />
    </View>
  );
}
