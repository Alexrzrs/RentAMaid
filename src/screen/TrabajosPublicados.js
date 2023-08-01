import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function TrabajosPublicados() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <Image
            source={require('../assets/casas.jpg')}
            style={styles.imagen}
          />
          <View style={styles.containerInformacion}>
            <View style={styles.justificacion}>
              <Text style={styles.textInfo}>Habitaciones:</Text>
              <Text style={styles.textInfo}>5</Text>
            </View>
            <View style={styles.justificacion}>
              <Text style={styles.textInfo}>Baños:</Text>
              <Text style={styles.textInfo}>3</Text>
            </View>
            <View style={styles.justificacion}>
              <Text style={styles.textInfo}>Extras:</Text>
              <Text style={styles.textInfo}>Patio, Jardín</Text>
            </View>
          </View>
        </View>
        <Text style={styles.descripcionTitulo}>Descripción</Text>
        <Text style={styles.descripcionTexto}>
          Una casa de dos pisos con diseño contemporáneo, rodeada de un cuidado
          jardín y una fachada de ladrillos rojizos.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  container: {
    backgroundColor: '#9DB9FF',
    width: '90%',
    borderRadius: 20,
    margin: 10,
    padding: 15,
  },
  containerInfo: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  imagen: {
    width: 170,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  containerInformacion: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  justificacion: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  descripcionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descripcionTexto: {
    fontSize: 16,
    marginBottom: 10,
  },
});
