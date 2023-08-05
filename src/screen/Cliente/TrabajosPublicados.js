import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonMd from '../../components/ButtonMd';
import { useNavigation } from '@react-navigation/native';
import Trabajo from '../../components/Trabajo';

export default function TrabajosPublicados() {
  const navigation = useNavigation()

  const goToCrear = () => {
    navigation.navigate('CrearTrabajo')
  }
  const goToListaPostulantes = () => {
    navigation.navigate('ListaPostulantes')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Trabajo
        banos={3}
        habitaciones={5}
        extras="Patio, Jardin"
        descripcion="Una casa de dos pisos con diseño contemporáneo, rodeada de un cuidado
                jardín y una fachada de ladrillos rojizos."
        action={goToListaPostulantes}
      />
      <ButtonMd text="Nuevo trabajo" action={goToCrear} icon="plus-circle" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
});
