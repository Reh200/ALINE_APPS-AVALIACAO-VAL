import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const tamanhoQuadrado = width / 3;

const Quadrado = (props) => {
  const estilosQuadrado = [estilos.quadrado];

  if (props.jogador === 'X') estilosQuadrado.push(estilos.x);
  if (props.jogador === 'O') estilosQuadrado.push(estilos.o);

  return (
    <TouchableHighlight onPress={props.onPress}>
      <Text style={estilosQuadrado}>{props.jogador}</Text>
    </TouchableHighlight>
  );
};

const estilos = StyleSheet.create({
  quadrado: {
    width: tamanhoQuadrado,
    height: tamanhoQuadrado,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 50,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#f0f0f0',
  },
  x: {
    color: '#ff3333',
  },
  o: {
    color: '#3366ff',
  }
});

export default Quadrado;
