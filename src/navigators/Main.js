import React from 'react';
import { AuthScreen, Example, Onboarding } from '../screens';
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
      <Stack.Screen name="Home" component={Example} />
    </Stack.Navigator>
  );
};
export default MainNavigator;
