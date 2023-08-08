import { View, Text, SafeAreaView } from 'react-native'
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
     {/* <Button title="Postulante aceptada" onPress={goToPostulanteAceptada} /> */}
  return (
    <SafeAreaView style={{flex: 1}} >
        <DetallePostulante />
        <InputPostulante campo="Nombre" valor="Belen Rivera Montes" editable={editable} /> 
        <InputPostulante campo="Edad" valor="37" editable={editable} /> 
        <InputPostulante campo="Descripción" valor="Soy Belén. Mi objetivo es brindarte una experiencia sin complicaciones. ¡Cuenta conmigo para encontrar el servicio perfecto para ti!" editable={editable} /> 
        <InputPostulante campo="Ubicación" valor="Santiago de Qro., Qro" editable={editable} /> 
    </SafeAreaView>
  )
}