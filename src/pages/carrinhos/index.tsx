import React from "react";
import { StyleSheet, Image, Dimensions, Text, View} from "react-native";

import topo from "../../../assets/topo.png";

//para saber o tamanho da tela e enquadrar a imagem de maneira correta
const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <Image source={topo} style={Styles.top} />
      <Text style={Styles.title}>Detalhe do Carrinho</Text>
    </>
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
  }
});
