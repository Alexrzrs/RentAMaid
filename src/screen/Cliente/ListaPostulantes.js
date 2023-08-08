import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Postulante from '../../components/Postulante';

export default function ListaPostulantes() {
    const navigation = useNavigation() 

    const goToDetallePostulante = () => {
        navigation.navigate('DetallesPostulanteScreen')
      }
    
  return (
    <SafeAreaView>
       <Postulante  onPress={goToDetallePostulante} />
          <Button title="Detalle postulante " onPress={goToDetallePostulante} />
    </SafeAreaView>
  )
}