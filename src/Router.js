import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/splash';
import SearchReceiver from './screens/SearchReceiver';
import Home from './screens/home';
import Profile from './screens/profile';
import ChangePass from './screens/changePass';
import ChangePin from './screens/ChangePin';
import TransactionHistory from './screens/TransactionHistory';
import Transfer from './screens/transfer';
import TopUp from './screens/topup';
import Success from './screens/success';
import Confirmation from './screens/confirmation';
import PersonalInformation from "./screens/personalInformation";
import AddPhoneNumber from "./screens/addPhoneNumber";
import ManagePhoneNumber from "./screens/managePhoneNumber";

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Pin from './screens/auth/Pin';
import PinSuccess from './screens/auth/PinSuccess';
import ForgotPass from './screens/auth/ForgotPass';
import ResetPass from './screens/auth/ResetPass';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchReceiver}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Transaction History"
          component={TransactionHistory}
          options={{
            title: 'History',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pin"
          component={Pin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PinSuccess"
          component={PinSuccess}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePin"
          component={ChangePin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{
            title: 'Confirmation',
          }}
        />
        <Stack.Screen
          name="Personal Information"
          component={PersonalInformation}
          options={{
            title: 'Personal Information',
          }}
        />
        <Stack.Screen
          name="Add Phone Number"
          component={AddPhoneNumber}
          options={{
            title: 'Add Phone Number',
          }}
        />
        <Stack.Screen
          name="Manage Phone Number"
          component={ManagePhoneNumber}
          options={{
            title: 'Manage Phone Number',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
