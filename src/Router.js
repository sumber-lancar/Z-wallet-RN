import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splash';
import Login from './screens/auth/login';
import SearchReceiver from "./screens/SearchReceiver";
import TransactionHistory from "./screens/TransactionHistory";
import Home from './screens/home';
import Profile from './screens/profile';
import Transfer from './screens/transfer'
import TopUp from './screens/topup';
import Success from './screens/success';

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
                <Stack.Screen
                    name='Home' 
                    component={Home}
                    options={{
                    headerShown: false,
                }}/>
                <Stack.Screen 
                    name='Profile' 
                    component={Profile}
                    options={{
                    headerShown: false,
                }}/>
                 <Stack.Screen 
                    name='Transfer' 
                    component={Transfer}
                    options={{
                    headerShown: false,
                }}/>
                <Stack.Screen 
                    name='TopUp' 
                    component={TopUp}
                    options={{
                    headerShown: false,
                }}/>
                 <Stack.Screen 
                    name='Success' 
                    component={Success}
                    options={{
                    headerShown: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router