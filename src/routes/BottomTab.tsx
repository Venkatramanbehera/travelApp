import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed, Profile, Article, Task} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeStack} from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home TAB') {
            iconName = focused ? 'airplane' : 'airplane-outline';
          } else if (route.name === 'Article') {
            iconName = focused ? 'attach' : 'attach-outline';
          } else if (route.name === 'Task') {
            iconName = focused ? 'bag-remove' : 'bag-remove-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'scale' : 'scale-outline';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name="Home TAB" component={HomeStack} />
      <Tab.Screen name="Article" component={Article} />
      <Tab.Screen name="Task" component={Task} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

export default BottomTab;
