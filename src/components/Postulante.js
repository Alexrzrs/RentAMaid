import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Postulante() {
    const navigation = useNavigation() 

    const goToDetallePostulante = () => {
        navigation.navigate('DetallePostulante')
      }
    

  return (
    <SafeAreaView>
       <Button title="Detalle postulantes" onPress={goToDetallePostulante} />
    </SafeAreaView>
  )
}