import { View, Text, StyleSheet, Image } from 'react-native';
import Calculadora from './components/calculadora';

export default function App() {
  return (
    <View style={estilo.tela}>
      <Image
        source={require('./assets/salario.jpg')}
        style={estilo.imagem}
      />
      <Text style={estilo.titulo}>Calculadora de Salário</Text>
      <Calculadora />
    </View>
  );
}

const estilo = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 24,
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
