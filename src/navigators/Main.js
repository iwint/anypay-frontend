import React from 'react';
import { AuthScreen, HomeScreen, Onboarding } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// @refresh reset
const MainNavigator = () => {
  const token = null;
  return (
    <Stack.Navigator
      initialRouteName={token ? 'Home' : 'Onboarding'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
