import { View, Text } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../../theme/Variables';
import { Fonts } from '../../theme';

const Input = ({
  keyboardType,
  index,
  label,
  icon,
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <View>
      <Text
        key={index}
        style={[{ marginTop: 10, color: Colors.textPrimary }, Fonts().textBold]}
      >
        {label}
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
          alignItems: 'center',
          flexDirection: 'row',
          borderColor: '#9CA3AF',
          borderWidth: 1,
          borderRadius: 8,
          marginTop: 10,
          height: 50,
        }}
      >
        {icon}

        <TextInput
          secureTextEntry={type === 'password'}
          onChange={val => {
            onChange(val.nativeEvent.text);
          }}
          keyboardAppearance="default"
          inputMode={type}
          style={{ marginLeft: 10, width: '90%', height: '100%' }}
          placeholder={placeholder}
          value={value}
        />
      </View>
    </View>
  );
};

export default Input;
