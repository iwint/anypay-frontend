import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, Input } from '../../../components';
import UserIcon from '../../../assets/icons/UserIcon';
import { Colors } from '../../../theme/Variables';
import { Pressable } from 'react-native';
import { Fonts, Layout } from '../../../theme';

const BottomSection = ({ formData, type, handleSubmit, handleNavigation }) => {
  return (
    <View style={[Layout().fullWidth, { gap: 15 }]}>
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
        onPress={handleSubmit}
        title={type === 'sign_up' ? 'Register' : 'Sign in'}
      />
      <View style={[Layout().row, Layout().center, { gap: 5, width: '100%' }]}>
        <Text style={[Fonts().textBold, Fonts().textLight]}>
          Don't have account ?
        </Text>
        <Pressable onPress={handleNavigation}>
          <Text style={[Fonts().textBold, Fonts().textPrimary]}>
            {type === 'sign_up' ? 'Sign in' : 'Sign up'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomSection;
