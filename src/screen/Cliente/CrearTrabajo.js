import { View, Text, StyleSheet, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'
import InputTrabajo from '../../components/InputTrabajo'
import ButtonMd from '../../components/ButtonMd'
import Extras from '../../components/Extras'
import { useNavigation } from '@react-navigation/native'

export default function CrearTrabajo() {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)

    const publicar = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
        navigation.navigate('TrabajosPublicados')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerSvg}>
                    <SvgXml
                        xml={fondoSvg2}
                    />
                    <Text style={styles.svgText}>Nuevo trabajo</Text>
                </View>
                <InputTrabajo
                    campo="Descripción"
                    placeholder="Brinda a los trabajadores una descripción general del trabajo..."
                />
                <InputTrabajo
                    campo="Número de habitaciones"
                    placeholder=""
                    numero={true}
                />
                <InputTrabajo
                    campo="Número de baños"
                    placeholder=""
                    numero={true}
                />
                <Extras />
                <ButtonMd text="Subir foto" icon="camera" />
                <ButtonMd text="Publicar" icon="paper-plane" action={publicar} />
                <Modal
                    transparent
                    visible={modalVisible}
                >
                    <View style={styles.modal} >
                        <View style={styles.modalView} >
                            <Text style={styles.modalTitle} >Publicación exitosa</Text>
                            <Text style={styles.modalText} >Tu publicación ahora es visible para los trabajadores, revisa los detalles de la publicación para ver las postulaciones.</Text>
                            <ButtonMd text="Cerrar" action={closeModal} />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSvg: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30
    },
    svgText: {
        position: 'absolute',
        top: 25,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textShadowRadius: 3
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#d9d9d9',
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#0d3b8d'
    },
    modalText: {
        fontSize: 15
    }
})

const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`