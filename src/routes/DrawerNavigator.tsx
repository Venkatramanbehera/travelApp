import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feed, Task} from '../screens';
import BottomTab from './BottomTab';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'pink',
        drawerActiveTintColor: 'black',
      }}>
      <Drawer.Screen
        name="Home Tab"
        component={BottomTab}
        options={{
          title: 'Home',
          drawerIcon: ({color, size}) => (
            <Icon name="bag-handle" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Task Drawer"
        component={Task}
        options={{
          title: 'Task',
          drawerIcon: ({color, size}) => (
            <Icon name="bandage" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Feed Drawer"
        component={Feed}
        options={{
          title: 'Feed',
          drawerIcon: ({color, size}) => (
            <Icon name="bandage" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
