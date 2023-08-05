import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screen/Inicio';
import Registro from '../screen/Registro';
import RegistroEmpleado from '../screen/RegistroEmpleado';
import RegistroCliente from '../screen/RegistroCliente';
import LoginEmpleado from '../screen/LoginEmpleado';
import LoginCliente from '../screen/LoginCliente';
import NavigationEmpleado from './Empleado/NavigationEmpleado';
import NavigationCliente from './Cliente/NavigationCliente';
import NavigationPostulante from './Cliente/NavigationPostulante';
import NavigationDetallePostulante from './Cliente/NavigationDetallePostulante';
import NavigationPostulanteAceptada from './Cliente/NavigationPostulanteAceptada';
import ListaPostulantes from '../screen/Cliente/ListaPostulantes';
import PostulanteAceptadaScreen from '../screen/Cliente/PostulanteAceptadaScreen';
import DetallesPostulanteScreen from '../screen/Cliente/DetallesPostulanteScreen';

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Registro'
                component={Registro}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='RegistroEmpleado'
                component={RegistroEmpleado}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='RegistroCliente'
                component={RegistroCliente}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='LoginEmpleado'
                component={LoginEmpleado}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='LoginCliente'
                component={LoginCliente}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='NavigationEmpleado'
                component={NavigationEmpleado}
                options={{ title: 'Empleado', headerShown: false }}
            />
            <Stack.Screen
                name='NavigationCliente'
                component={NavigationCliente}
                options={{ title: 'Cliente', headerShown: false }}
            />
             <Stack.Screen
                name='Postulante'
                component={NavigationPostulante}
                options={{ title: 'Postulantes', headerShown: false }}
            />
             <Stack.Screen
                name='DetallePostulante'
                component={NavigationDetallePostulante}
                options={{ title: 'DetallePostulante', headerShown: false }}
            />

            <Stack.Screen
                name='PostulanteAceptada'
                component={NavigationPostulanteAceptada}
                options={{ title: 'PostulanteAceptada', headerShown: false }}
            />
              <Stack.Screen
                name='ListaPostulantes'
                component={ListaPostulantes}
                options={{ title: 'Lista Postulantes', headerShown: false }}
            />
             <Stack.Screen
                name='PostulanteAceptadaScreen'
                component={PostulanteAceptadaScreen}
                options={{ title: 'Lista Postulantes', headerShown: false }}
            /> 
             <Stack.Screen
                name='DetallesPostulanteScreen'
                component={DetallesPostulanteScreen}
                options={{ title: 'DetallesPostulanteScreen', headerShown: false }}
            />
        </Stack.Navigator>

    )
}