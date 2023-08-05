import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg';
import InputOne from '../components/InputOne';
import ButtonXL from '../components/ButtonXL';
import { apiClient } from '../api/ApiClient';

export default function RegistroEmpleado(props) {
  const { navigation } = props;
  const goInicio = () => {
    navigation.navigate('Inicio')
  }

    // Estados para guardar los valores ingresados en los campos de texto
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [lastName, setLastName] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

   // Función para crear el usuario y enviar los datos ingresados en los campos
   const createUser = (userData) => {
    apiClient
      .post('/api/v1/auth/registerClearer', userData)
      .then((response) => {
        console.log("Usuario creado exitosamente:", response.data);
      })
      .catch((error) => {
        console.error("Error al crear el usuario:", error);
      });
  }; 
  
    // Función para enviar los datos ingresados como un JSON al servidor
    const createUserWithFields = () => {
      const userData = {
        // Construir el objeto JSON con los datos ingresados
        firstName: nombreCompleto,
        lastName: lastName, 
        phone: telefono,
        email: correo,
        password: contrasena,
  
      };
  
      createUser(userData);
      goInicio();
    };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSvg}>
        <SvgXml
          xml={fondoSvg}
        />
        <Text style={styles.svgText}>Registro empleado</Text>
      </View>
      <View style={styles.containerForm}>
        <Image source={require('../assets/logo3.png')} style={styles.imagen} />
       <InputOne
        icon="user"
        placeholder="Nombre completo"
        marginBottom={19}
        value={nombreCompleto}
        onChangeText={(text) => setNombreCompleto(text)}
      />
         <InputOne icon="id-card" placeholder="Lastname" marginBottom={19}    value={lastName}  onChangeText={(text) => setLastName(text)}/>
      <InputOne
        icon="mobile-alt"
        placeholder="Teléfono"
        marginBottom={19}
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
      />
      <InputOne
        icon="at"
        placeholder="Correo"
        marginBottom={19}
        value={correo}
        onChangeText={(text) => setCorreo(text)}
      />
      <InputOne
        icon="eye"
        placeholder="Contraseña"
        marginBottom={19}
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
        secure={true} 
      />
   
        <ButtonXL action={createUserWithFields} text="Registrar" />
        <View style={styles.userActions}>
          <Text style={styles.noAccountText}>Ya tienes una cuenta?</Text>
          <TouchableOpacity onPress={goInicio} style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    top: 10
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 19,
    width: '90%',
  },
  containerSvg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  svgText: {
    position: 'absolute',
    top: 90,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowRadius: 3
  },
  inputText: {
    height: 47,
    backgroundColor: '#9EAEC9',
    borderRadius: 20,
    paddingLeft: 45,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 15,
    zIndex: 1,
    color: 'white'
  },
  button1: {
    width: 200,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#088BED',
    borderWidth: 2,
    borderColor: '#088BED',
    marginTop: 10
  },
  buttonText1: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imagen: {
    width: '50%',
    height: 110,
    marginBottom: 25
  },
  userActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 16,
    color: '#555',
    marginRight: -15,
  },
  createAccountButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  createAccountButtonText: {
    color: '#797979',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const fondoSvg = `<svg width="391" height="202" viewBox="0 0 391 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H391V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`
