import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DetallePostulante from '../../components/DetallePostulante';

export default function DetallesPostulanteScreen() {
    const navigation = useNavigation() 

    const goToPostulanteAceptada = () => {
        navigation.navigate('PostulanteAceptadaScreen')
      }
    
  return (
    <SafeAreaView>
        <DetallePostulante />
    {/* <Button title="Postulante aceptada" onPress={goToPostulanteAceptada} /> */}
 </SafeAreaView>
  )
}