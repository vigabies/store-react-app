import * as React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Carrinho from './src/pages/carrinhos';

import { useFonts,
         Montserrat_400Regular,
         Montserrat_700Bold,
         Montserrat_400Regular_Italic
} from "@expo-google-fonts/montserrat";
  
  export default function App() {
    const [fontCarregada] = useFonts({
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
      "MontserratItalic": Montserrat_400Regular_Italic
    })
  
    if (!fontCarregada) {
      return null;
    }
  
    return (
      <SafeAreaView>
        <StatusBar/>
        <Carrinho/>
      </SafeAreaView>
    );
  }

