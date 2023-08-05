import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Postulante from '../../components/Postulante'

export default function NavigationPostulante() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Postulante'
                component={Postulante}
                options={{ title: 'Postulantes', headerShown: false }}
            />
        </Stack.Navigator>
    )
}