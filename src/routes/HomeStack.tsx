import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Details, Home} from '../screens';

export type AppStackParamList = {
  Home: undefined;
  Details: {
    productId: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTintColor: 'green',
        headerStyle: {
          backgroundColor: 'yellow',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
