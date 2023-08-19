import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../../screen/Empleado/Account";
import EditarPerfil from "../../screen/Empleado/EditarPerfil";

export default function NavigationAccount() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={Account}
                options={{ title: "Mi cuenta", headerShown: false }}
            />
            <Stack.Screen
                name="EditarPerfil"
                component={EditarPerfil}
                options={{ title: "Editar Perfil", headerShown: false }}
            />
        </Stack.Navigator>
    );
}
