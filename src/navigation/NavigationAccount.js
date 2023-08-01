import Account from "../screen/Account";
import EditarPerfil from "../screen/EditarPerfil";
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrabajosPublicados from "../screen/TrabajosPublicados";

export default function NavigationAccount() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Account'
        component={Account}
        options={{ title: 'Mi cuenta', headerShown: false }}
      />
      <Stack.Screen
        name='EditarPerfil'
        component={EditarPerfil}
        options={{ title: 'Editar Perfil', headerShown: false }}
      />
      <Stack.Screen
        name='TrabajosPublicados'
        component={TrabajosPublicados}
        options={{ title: 'Editar Perfil', headerShown: false }}
      />
    </Stack.Navigator>
  )
}