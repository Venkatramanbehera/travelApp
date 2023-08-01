import React from 'react';

// navigation
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
// import Home from './screens/Home';
// import Details from './screens/Details';
import {Router} from './routes/Router';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

// const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return <Router />;
};

export default App;
