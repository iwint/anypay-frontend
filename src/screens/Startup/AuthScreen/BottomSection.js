import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, Input } from '../../../components';
import UserIcon from '../../../assets/icons/UserIcon';
import { Colors, FontSize } from '../../../theme/Variables';
import { Pressable } from 'react-native';
import { Fonts, Layout } from '../../../theme';
import Onboard1 from '../../../assets/illustrations/Onboard1';
import Onboard2 from '../../../assets/illustrations/Onboard2';

const BottomSection = ({ formData, type, handleSubmit, handleNavigation }) => {
  return (
    <View style={[Layout().fullWidth, { gap: 5 }]}>
      {type === 'sign_in' ? <Onboard2 /> : null}
      {formData?.map((inputField, index) => {
        return (
          <Input
            key={index}
            index={index}
            icon={inputField?.icon}
            type={inputField?.type}
            label={inputField?.label}
            onChange={val => {
              inputField?.onChange(val);
            }}
            placeholder={inputField?.placeholder}
            value={inputField?.value}
          />
        );
      })}
      <Button
        customStyle={{ marginTop: '8%' }}
        onPress={handleSubmit}
        title={type === 'sign_up' ? 'Register' : 'Sign in'}
      />
      <View
        style={[
          Layout().row,
          Layout().center,
          { gap: 5, width: '100%', marginTop: '2%' },
        ]}
      >
        <Text style={[Fonts().textBold, Fonts().textLight]}>
          Don't have account ?
        </Text>
        <TouchableOpacity
          onPressIn={() => {
            console.log('SIGN IN');
            handleNavigation.navigate('Auth', {
              type: type === 'sign_up' ? 'sign_in' : 'sign_up',
            });
          }}
        >
          <Text
            style={[
              Fonts().textBold,
              Fonts().textPrimary,
              {
                fontSize: FontSize.regular - 3,
              },
            ]}
          >
            {type === 'sign_up' ? 'Sign in' : 'Sign up'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSection;
