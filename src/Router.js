import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Login from './screens/auth/login';
import SearchReceiver from "./screens/SearchReceiver";
import TransactionHistory from "./screens/TransactionHistory";


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
                    name='Search' 
                    component={SearchReceiver}
                    options={{
                    title:'Find Receiver',
                }}/>
                <Stack.Screen 
                    name='Transaction History' 
                    component={TransactionHistory}
                    options={{
                    title:'History',
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router