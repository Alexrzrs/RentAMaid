import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Postulante from "../../components/Postulante";
import { SvgXml } from "react-native-svg";

export default function ListaPostulantes() {
  const navigation = useNavigation();

  const goToDetallePostulante = () => {
    navigation.navigate("DetallesPostulanteScreen");
  };

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView>
        <View style={styles.containerSvg}>
          <SvgXml xml={fondoSvg2} />
          <Text style={styles.svgText}>Postulantes</Text>
        </View>
        <Postulante
          action={goToDetallePostulante}
          nombre={"Belen Rivera Montes"}
          edad={"37"}
          ubicacion={"Santiago de qro. Qro."}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerSvg: {
    alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: 30,
  },
  svgText: {
      position: "absolute",
      top: 25,
      fontSize: 40,
      color: "white",
      fontWeight: "bold",
      textShadowRadius: 3,
    },
  
});

const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`;
