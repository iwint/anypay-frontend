import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Header } from '../../../components';
import TopSection from '../TopSection';
import BottomSection from './BottomSection';
import { Layout } from '../../../theme';
import PhoneIcon from '../../../assets/icons/PhoneIcon';
import EmailIcon from '../../../assets/icons/EmailIcon';
import UserIcon from '../../../assets/icons/UserIcon';
import { useState } from 'react';
import { ToastAndroid } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const type = navigation
    .getState()
    .routes.find(
      route => route.params !== undefined && route.params.type !== undefined,
    ).params?.type;

  const [authData, setAuthData] = useState({});
  const Content = {
    title: type === 'sign_in' ? 'Welcome Back!' : 'Sign Up',
    description:
      type === 'sign_in'
        ? 'Sign In to your account'
        : 'Create account and enjoy all services',
  };
  const signInData = {
    mobile: '',
  };
  const signUpData = {
    name: '',
    email: '',
    mobile: '',
  };

  useEffect(() => {
    if (type === 'sign_in') {
      setAuthData(signInData);
    } else {
      setAuthData(signUpData);
    }
  }, [type]);

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
    if (
      (type === 'sign_up' &&
        authData?.name != '' &&
        authData?.email != '' &&
        authData?.mobile != '') ||
      (type === 'sign_in' && authData?.mobile != '')
    ) {
      ToastAndroid.show(
        `${
          type === 'sign_in'
            ? 'Sign in sucessfully done'
            : 'Sign up sucessfully done'
        }`,
        ToastAndroid.SHORT,
      );
      navigation.navigate({
        name: 'Otp',
        params: {
          mobile: authData?.mobile,
        },
      });
      console.log(navigation);
    } else {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
    }
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
      <TopSection Content={Content} type={type} />
      <BottomSection
        type={type}
        handleNavigation={navigation}
        handleSubmit={handleSubmit}
        formData={type === 'sign_up' ? signUpForm : signInForm}
      />
    </View>
  );
};

export default AuthScreen;
