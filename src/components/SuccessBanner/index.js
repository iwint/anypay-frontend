import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '../../theme';
import SuccessIcon from '../../assets/icons/SuccessIcon';
import TopSection from '../../screens/Startup/TopSection';
import Button from '../Button/Button';

const SuccessBanner = ({ navigation }) => {
  const Content = {
    title: 'Account Verified',
    description:
      'Your account has been verified succesfully, now let’s enjoy Anypay features!',
  };

  const handleNavigate = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <View
      style={[
        Layout().colCenter,
        Layout().rowCenter,
        Layout().fullSize,
        Layout().col,
      ]}
    >
      <SuccessIcon />
      <TopSection
        dark={true}
        Content={Content}
        contentStyle={{ textAlign: 'center' }}
        titleStyle={{ textAlign: 'center' }}
      />
      <Button
        title={'Get Started'}
        onPress={handleNavigate}
        customStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default SuccessBanner;
