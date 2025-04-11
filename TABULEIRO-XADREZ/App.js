import { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Alert } from "react-native";
import Tabuleiro from "./components/tabuleiro";

export default function App() {
  const [jogo, setJogo] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState("X");

  const verificarVencedor = (novoJogo) => {
    const linhas = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    for (const [a,b,c] of linhas) {
      if (novoJogo[a] && novoJogo[a] === novoJogo[b] && novoJogo[a] === novoJogo[c]) {
        return novoJogo[a];
      }
    }
    return null;
  }

  const jogar = (index) => {
    if (jogo[index]) return;

    const novoJogo = [...jogo];
    novoJogo[index] = jogadorAtual;
    const vencedor = verificarVencedor(novoJogo);

    if (vencedor) {
      Alert.alert("Fim de Jogo", `Jogador ${vencedor} venceu!`);
      setJogo(Array(9).fill(null));
      return;
    }

    if (!novoJogo.includes(null)) {
      Alert.alert("Empate", "O jogo empatou!");
      setJogo(Array(9).fill(null));
      return;
    }

    setJogo(novoJogo);
    setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Jogo da Velha</Text>
      <Tabuleiro estado={jogo} aoJogar={jogar} />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
