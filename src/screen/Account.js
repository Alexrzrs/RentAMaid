import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Account() {
  const navigation = useNavigation()

  const goEditar = ()=>{
    navigation.navigate('EditarPerfil')
}

const goTrabajos = ()=>{
  navigation.navigate('TrabajosPublicados')
}
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerForm}>
        <Text>Account</Text>
        <TouchableOpacity onPress={goEditar}
            style={styles.button1}>
            <Text
              style={styles.buttonText1}
            >Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goTrabajos}
            style={styles.button1}>
            <Text
              style={styles.buttonText1}
            >Trabajos</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  containerForm: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button1: {
    width: 200,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#088BED',
    borderWidth: 2,
    borderColor: '#088BED',
    marginTop: 30
},
  buttonText1: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
},
})

