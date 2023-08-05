import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function DetallePostulante() {

    const navigation = useNavigation() 

    const goToPostulanteAceptada = () => {
        navigation.navigate('PostulanteAceptada')
      }
    

  return (
    <SafeAreaView>
    <Button title="Postulante aceptada" onPress={goToPostulanteAceptada} />
 </SafeAreaView>
  )
}