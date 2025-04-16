import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Image source={require('./assets/relogio-conta-luz.jpg')} style={estilos.imagem} />
        <Text style={estilos.titulo}>Gastos de Energia</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  cabecalho: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

