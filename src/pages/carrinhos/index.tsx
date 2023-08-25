import * as React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";

import topo from "../../../assets/topo.png";
import logo from "../../../assets/logo.png";

//para saber o tamanho da tela e enquadrar a imagem de maneira correta
const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <View>
      <View>
        <Image source={topo} style={Styles.top} />
        <Text style={Styles.title}>Detalhe do Carrinho</Text>
      </View>

      <View style={Styles.carrinho}>
        <Text style={Styles.titulocarrinho}>Carrinho de compras</Text>

        <View style={Styles.fazenda}>
          <Image style={Styles.imagemfazenda} source={logo} />
          <Text style={Styles.nomefazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>

        <Text style={Styles.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          da cozinha
        </Text>
        <Text style={Styles.preco}>R$ 40,00</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
    width: "100%",
    textAlign: "center",
    color: "white",
    position: "absolute",
    padding: "4%",
  },

  titulocarrinho: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },

  carrinho: {
    paddingVertical: 8,
    padidingHorizontal: 16,
    marginLeft: 16,
    marginRight: 16,
  },

  nomefazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: "bold",
  },

  imagemfazenda: {
    width: 32,
    height: 32,
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  descricao: {
    color: "#a3a3a3",
    fontStyle: "italic",
  },

  preco: {
    fontSize: 26,
    lineHeight: 42,
    color: "#2a9f85",
    marginTop: 8,
  },
});
