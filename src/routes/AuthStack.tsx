import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import BottomTab from './BottomTab';

export type AppStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: 'green',
        headerStyle: {
          backgroundColor: 'pink',
        },
      }}
      initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={({route}: any) => ({
          title: route.params.userId,
          headerTitleAlign: 'center',
          headerTintColor: '#000000',
          headerStyle: {
            backgroundColor: 'white',
          },
        })}
      />
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
