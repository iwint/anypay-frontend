import React from 'react';
import {
  CardsScreen,
  HomeScreen,
  ProfileScreen,
  StatsScreen,
} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/HomeIcon';
import StatsIcon from '../assets/icons/StatsIcon';

const Tab = createBottomTabNavigator();
// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => <HomeIcon />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, focused }) => <StatsIcon />,
        }}
        name="Stats"
        component={StatsScreen}
      />
      <Tab.Screen
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, focused }) => <HomeIcon />,
        // }}
        name="Cards"
        component={CardsScreen}
      />
      <Tab.Screen
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, focused }) => <HomeIcon />,
        // }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default MainNavigator;
