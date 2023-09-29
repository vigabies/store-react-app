import * as React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from "react-native";
import logo from "../../../../assets/logo.png";

type Props = {
  nome: string;
  nomeFazenda: string;
  descricao: string;
  preco: string;
};

export default function Detalhe({
  nome,
  nomeFazenda,
  descricao,
  preco
  
}: Props) {
  return (
    <>
      <Text style={Styles.titulocarrinho}>{nome}</Text>

      <View style={Styles.fazenda}>
        <Image style={Styles.imagemfazenda} source={logo} />
        <Text style={Styles.nomefazenda}>{nomeFazenda}</Text>
      </View>

      <Text style={Styles.descricao}>{descricao}</Text>
      <Text style={Styles.preco}>{preco}</Text>
    </>
  );
}

const Styles = StyleSheet.create({
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
