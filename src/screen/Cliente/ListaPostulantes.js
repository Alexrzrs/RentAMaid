import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Postulante from '../../components/Postulante';

export default function ListaPostulantes() {
    const navigation = useNavigation() 

    const goToDetallePostulante = () => {
        navigation.navigate('DetallePostulanteScreen')
      }
    
  return (
    <SafeAreaView>
       <Postulante  onPress={goToDetallePostulante} />
    </SafeAreaView>
  )
}