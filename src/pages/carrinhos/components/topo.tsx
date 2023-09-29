import * as React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import topo from "../../../../assets/topo.png";

//para saber o tamanho da tela e enquadrar a imagem de maneira correta
const width = Dimensions.get("screen").width;

type Props ={
  titulo: string;
}  // adicionei

export default function Topo({titulo}: Props) {
  return (
    <View>
      <Image source={topo} style={Styles.top} />
      <Text style={Styles.title}>{titulo}</Text>
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
});
