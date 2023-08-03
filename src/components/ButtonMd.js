import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonMd({ action, text, color }) {
    return (
        <TouchableOpacity onPress={action}
            style={[styles.button1,
            {
                backgroundColor: color ? color : '#088BED',
                borderColor: color ? color : '#088BED'
            }]}>
            <Text
                style={styles.buttonText1}
            >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button1: {
        width: 150,
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
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