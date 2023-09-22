import * as React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Topo from "./components/topo";
import Detalhe from "./components/detalhe";

export default function Carrinho() {
  return (
    <View>
      <Topo />
      <View style={Styles.carrinho}>
        <Detalhe />
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
