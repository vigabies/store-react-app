import * as React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Topo from "./components/topo";
import carrinho from "../../mocks/carrinho";
import Detalhe from "./components/detalhe";

export default function Carrinho() {
  return (
    <View>
      <Topo titulo={carrinho.topo.titulo} />
      <View style={Styles.carrinho}>
        <Detalhe 
        nome={carrinho.detalhes.nome}
        nomeFazenda={carrinho.detalhes.nomeFazenda}
        descricao={carrinho.detalhes.descricao}
        preco={carrinho.detalhes.preco}
        // botao={carrinho.detalhes.botao}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  carrinho: {
    paddingVertical: 8,
    padidingHorizontal: 16,
    marginLeft: 16,
    marginRight: 16,
  },
});
