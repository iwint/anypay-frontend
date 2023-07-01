import { View, Text } from 'react-native';
import React from 'react';
import { Header } from '../../../components';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import { Layout } from '../../../theme';
import PhoneIcon from '../../../assets/icons/PhoneIcon';
import EmailIcon from '../../../assets/icons/EmailIcon';
import UserIcon from '../../../assets/icons/UserIcon';
import { useState } from 'react';

const AuthScreen = ({ navigation }) => {
  const type = navigation
    .getState()
    .routes.find(
      route => route.params !== undefined && route.params.type !== undefined,
    ).params?.type;

  const [authData, setAuthData] = useState(
    type === 'sign_in'
      ? {
          mobile: '',
        }
      : {
          name: '',
          email: '',
          mobile: '',
        },
  );

  const signInForm = [
    {
      label: 'Mobile',
      placeholder: 'Enter your mobile number',
      icon: <PhoneIcon />,
      type: 'numeric',
      value: authData?.mobile,
      onChange: val => {
        setAuthData({
          ...authData,
          mobile: val,
        });
      },
    },
  ];
  const signUpForm = [
    {
      label: 'Full Name',
      placeholder: 'Enter your name',
      icon: <UserIcon />,
      value: authData?.name,
      type: 'text',
      onChange: val => {
        setAuthData({
          ...authData,
          name: val,
        });
      },
    },
    {
      label: 'Email',
      placeholder: 'Enter your email',
      icon: <EmailIcon />,
      value: authData?.email,
      type: 'email',
      onChange: val => {
        setAuthData({
          ...authData,
          email: val,
        });
      },
    },
    {
      label: 'Mobile',
      placeholder: 'Enter your mobile number',
      icon: <PhoneIcon />,
      type: 'numeric',
      value: authData?.mobile,
      onChange: val => {
        setAuthData({
          ...authData,
          mobile: val,
        });
      },
    },
  ];

  const handleSubmit = async () => {
    console.log('AUTH DETAILS ==>', authData);
  };

  const handleNavigation = () => {
    navigation.replace('Auth', {
      type: type === 'sign_in' ? 'sign_up' : 'sign_in',
    });
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
      <TopSection type={type} />
      <BottomSection
        type={type}
        handleNavigation={() => {
          handleNavigation();
        }}
        handleSubmit={handleSubmit}
        formData={type === 'sign_up' ? signUpForm : signInForm}
      />
    </View>
  );
};

export default AuthScreen;
