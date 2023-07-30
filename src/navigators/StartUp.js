import React from 'react';
import { AuthScreen, HomeScreen, Onboarding, OtpScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
// @refresh reset
const StartupNavigator = () => {
  const newUser = true;
  return (
    <Stack.Navigator
      initialRouteName={newUser ? 'Onboarding' : 'Auth'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};
export default StartupNavigator;
