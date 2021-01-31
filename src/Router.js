import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Login from './screens/auth/login';
import Home from './screens/home';


const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Splash' 
                    component={Splash}
                    options={{
                    headerShown: false,
                }}/>
                <Stack.Screen 
                    name='Login' 
                    component={Login}
                    options={{
                    headerShown: false,
                }}/>
                <Stack.Screen 
                    name='Home' 
                    component={Home}
                    options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router