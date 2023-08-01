import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/screen/Inicio';
import NavigationTab from './src/navigation/NavigationTab';
import Registro from './src/screen/Registro';
import RegistroEmpleado from './src/screen/RegistroEmpleado';
import RegistroCliente from './src/screen/RegistroCliente';
import LoginEmpleado from './src/screen/LoginEmpleado';
import LoginCliente from './src/screen/LoginCliente';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen
        name='Inicio'
        component={Inicio}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen
        name='NavigationTab'
        component={NavigationTab}
        />
        <Stack.Screen
        name='Registro'
        component={Registro}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen
        name='RegistroEmpleado'
        component={RegistroEmpleado}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen
        name='RegistroCliente'
        component={RegistroCliente}
        options={{
          headerShown:false,
        }}
        />
         <Stack.Screen
        name='LoginEmpleado'
        component={LoginEmpleado}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen
        name='LoginCliente'
        component={LoginCliente}
        options={{
          headerShown:false,
        }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
