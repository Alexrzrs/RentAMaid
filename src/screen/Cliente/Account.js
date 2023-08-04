import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import ButtonXL from '../../components/ButtonXL'
import ButtonMd from '../../components/ButtonMd'
import { SvgXml } from 'react-native-svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputPerfil from '../../components/InputPerfil'
import { useAuth } from '../../security/AuthContext'
import { apiClient } from '../../api/ApiClient'

export default function Account() {

  const authContext = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  useFocusEffect(
    useCallback(() => {
      fetchUserDetails()
      async function fetchUserDetails() {
        try {
          const response = await apiClient.get(`/api/v1/user/${authContext.username}`, {
            headers: {
              Authorization: authContext.token,
            },
          });
    
          console.log(response.data)
          setUserDetails(response.data); // Aquí asignamos directamente response.data a userDetails
          
        } catch (error) {
          console.error('Error fetching user details', error);
        }
      }
    }, [authContext.token])
  )
  
  console.log(userDetails)

  const [editable, setEditable] = useState(false)

  const navigation = useNavigation()

  const editarPerfil = () => {
    setEditable(true)
  }

  const cancelarEdicion = () => {
    setEditable(false)
  }

  const guardarCambios = () => {
    setEditable(false)
  }

  return (
    <SafeAreaView style={styles.contenedorAccount}>
      <ScrollView>
        <View style={styles.containerSvg}>
          <SvgXml
            xml={fondoSvg2}
          />
          <Text style={styles.svgText}>Mi Perfil</Text>
        </View>
        <Image
          source={require('../../assets/account.jpeg')}
          style={styles.imagen}
        />
        <InputPerfil campo="Nombre" valor={userDetails === null ? "" : userDetails.firstname + " " + userDetails.lastname} editable={editable} />
        <InputPerfil campo="Teléfono" valor={userDetails === null ? "" : userDetails.phone.toString()} editable={editable} />
        <InputPerfil campo="Correo" valor={userDetails === null ? "" : userDetails.email} editable={editable} />
        <InputPerfil campo="Contrasena" valor="*********" editable={editable} />
        <View style={styles.contenedorBotones}>
          {editable ?
            <>
              <ButtonMd action={cancelarEdicion} text="Cancelar" color="#a31d1d" />
              <ButtonMd action={guardarCambios} text="Guardar" />
            </> :
            <ButtonMd action={editarPerfil} text="Editar Perfil" />}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  contenedorAccount: {
    alignContent: 'center',
    flex: 1,
    alignItems: 'center',
    // backgroundColor:'cornflowerblue',
  },
  containerSvg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 50
  },
  svgText: {
    position: 'absolute',
    top: 25,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowRadius: 3
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagen: {
    borderRadius: 15,
    width: 200,
    height: 200,
    marginBottom: 30,
    alignSelf: 'center',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  botonPerfil: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#088BED',
    marginHorizontal: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  textoBotonPerfil: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const fondoSvg = `<svg width="391" height="202" viewBox="0 0 391 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H391V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`
const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`