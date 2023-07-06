import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '../../../theme';
import { Header } from '../../../components';
import TopSection from '../TopSection';

const OtpScreen = ({ navigation }) => {
  const mobile = navigation.getState().routes[2]?.params?.mobile;
  const Content = {
    title: 'Verify Code',
    description: `Please enter the code we just sent to phone number (+91) ${
      mobile ? mobile : '**********'
    }`,
  };

  return (
    <View
      style={[
        Layout().fullSize,
        {
          gap: 20,
          padding: 20,
        },
      ]}
    >
      <Header navigation={navigation} />
      <TopSection Content={Content} />
      <View style={{ alignItems: 'center' }}></View>
    </View>
  );
};

export default OtpScreen;
