import React from 'react';
import { AuthScreen, HomeScreen, Onboarding, OtpScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartupNavigator from './StartUp';
import EmailIcon from '../assets/icons/EmailIcon';

const Tab = createStackNavigator();
// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
    </Tab.Navigator>
  );
};
export default MainNavigator;
