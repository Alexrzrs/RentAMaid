import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function RegistroEmpleado(props) {
    const { navigation } = props;
    const goInicio = ()=>{
        navigation.navigate('Inicio')
    }
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
        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='Nombre completo' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="id-card" size={20} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='RFC' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="mobile-alt" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='Teléfono' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="at" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='Correo' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="eye" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='  Contraseña' style={styles.inputText}  placeholderTextColor="white"/>
        </View>

        <TouchableOpacity
          style={styles.button1}>
          <Text
            style={styles.buttonText1}
          >Registrar</Text>
        </TouchableOpacity>
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
    justifyContent:'center',
    alignItems:'center',
    top:10
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
    color:'white',
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 15,
    zIndex: 1,
    color:'white'
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
    marginBottom:25
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
