import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Trabajo from '../../components/Trabajo';
import { useNavigation } from '@react-navigation/native';

export default function TrabajosPublicados() {
  const navigation = useNavigation()

  const goToTrabajo = () => {
    navigation.navigate('Detalle')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Trabajo
        banos={3}
        habitaciones={5}
        extras="Patio, Jardin"
        descripcion="Una casa de dos pisos con diseño contemporáneo, rodeada de un cuidado
                jardín y una fachada de ladrillos rojizos."
        action={goToTrabajo}
      />
      <Trabajo
        banos={2}
        habitaciones={3}
        extras="Patio"
        descripcion="Una casa de un piso."
        action={goToTrabajo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  container: {
    backgroundColor: '#9DB9FF',
    width: '90%',
    borderRadius: 20,
    margin: 10,
    padding: 15,
  },
  containerInfo: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  imagen: {
    width: 170,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  containerInformacion: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  justificacion: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  descripcionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descripcionTexto: {
    fontSize: 16,
    marginBottom: 10,
  },
});
