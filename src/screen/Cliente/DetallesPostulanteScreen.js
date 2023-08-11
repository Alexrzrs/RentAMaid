import { View, Text, SafeAreaView, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import DetallePostulante from '../../components/DetallePostulante';
import InputPostulante from '../../components/InputPostulante';

export default function DetallesPostulanteScreen() {
    const navigation = useNavigation() 
    const [editable, setEditable] = useState(false)
    const editarPerfil = () => {
    setEditable(true)
  }

  const cancelarEdicion = () => {
    setEditable(false)
  }

  const guardarCambios = () => {
    setEditable(false)
  }

  const goToPostulanteAceptada = () => {
      navigation.navigate('PostulanteAceptadaScreen')
    }

  const createTwoButtonAlert = () =>
  Alert.alert('Aceptar postulante', 'Presiona OK si estás seguro de aceptar', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => goToPostulanteAceptada()},
  ]);

  return (
    <SafeAreaView style={{flex: 1}} >
        <DetallePostulante />
        <InputPostulante campo="Nombre" valor="Belen Rivera Montes" editable={editable} /> 
        <InputPostulante campo="Edad" valor="37" editable={editable} /> 
        <InputPostulante campo="Descripción" valor="Soy Belén. Mi objetivo es brindarte una experiencia sin complicaciones. ¡Cuenta conmigo para encontrar el servicio perfecto para ti!" editable={editable} /> 
        <InputPostulante campo="Ubicación" valor="Santiago de Qro., Qro" editable={editable} /> 
        <TouchableOpacity style={styles.botonAceptar} title={'Aceptar'} onPress={createTwoButtonAlert} >
          <Text style={styles.textoBotonAceptar}>Aceptar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  botonAceptar:{
    width:250,
    height:50,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor:'#088BED',
    maxWidth: '90%',
    alignSelf: 'center',
  },
  textoBotonAceptar: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
