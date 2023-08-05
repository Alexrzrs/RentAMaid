import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PostulanteAceptada from '../../components/PostulanteAceptada'


export default function NavigationPostulanteAceptada() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='PostulanteAceptada'
                component={PostulanteAceptada}
                options={{ title: 'Postulante aceptada', headerShown: false }}
            />
        </Stack.Navigator>
    )
}