import React from 'react';
import { AuthScreen, HomeScreen, Onboarding, OtpScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartupNavigator from './StartUp';
import MainNavigator from './Main';

const Stack = createStackNavigator();
// @refresh reset
const Navigations = () => {
  const token = null;
  return (
    <Stack.Navigator
      initialRouteName={token ? 'Main' : 'Startup'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Startup" component={StartupNavigator} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};
export default Navigations;
