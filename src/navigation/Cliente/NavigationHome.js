import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screen/Cliente/Home'
import TrabajosPublicados from '../../screen/Cliente/TrabajosPublicados'
import CrearTrabajo from '../../screen/Cliente/CrearTrabajo'

export default function NavigationHome() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='TrabajosPublicados'
                component={TrabajosPublicados}
                options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
                name='CrearTrabajo'
                component={CrearTrabajo}
                options={{ title: 'Crear trabajo', headerShown: false }}
            />
        </Stack.Navigator>
    )
}