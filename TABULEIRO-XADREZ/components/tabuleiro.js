import { View, StyleSheet } from "react-native";
import Quadrado from "./quadrado";

export default function Tabuleiro({ estado, aoJogar }) {
  return (
    <View style={estilos.tabuleiro}>
      {estado.map((jogador, index) => (
        <Quadrado key={index} jogador={jogador} onPress={() => aoJogar(index)} />
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  tabuleiro: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%',
    justifyContent: "center"
  }
});
