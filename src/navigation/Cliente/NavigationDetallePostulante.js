import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetallePostulante from '../../components/DetallePostulante'


export default function NavigationDetallePostulante() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='DetallePostulante'
                component={DetallePostulante}
                options={{ title: 'Detalle postulante', headerShown: false }}
            />
        </Stack.Navigator>
    )
}