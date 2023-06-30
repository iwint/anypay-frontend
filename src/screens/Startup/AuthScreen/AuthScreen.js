import { View, Text } from 'react-native';
import React from 'react';

const AuthScreen = ({ navigation }) => {
  const type = navigation
    .getState()
    .routes.find(
      route => route.params !== undefined && route.params.type !== undefined,
    ).params?.type;

  return (
    <View>
      <Text>{type === 'sign_up' ? 'sign_up' : 'Sign in da'}</Text>
    </View>
  );
};

export default AuthScreen;
