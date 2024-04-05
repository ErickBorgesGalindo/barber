// React Libraries
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Login from "./src/screens/login/Login";
import Home from "./src/screens/home/Home";


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;