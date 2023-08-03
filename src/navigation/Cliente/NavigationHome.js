import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screen/Cliente/Home'
import TrabajosPublicados from '../../screen/Cliente/TrabajosPublicados'

export default function NavigationHome() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={TrabajosPublicados}
                options={{ title: 'Home', headerShown: false }}
            />
        </Stack.Navigator>
    )
}