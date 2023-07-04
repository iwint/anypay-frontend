import { View, Text } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../../theme/Variables';
import { Fonts } from '../../theme';

const Input = ({ index, label, icon, placeholder, onChange, value, type }) => {
  return (
    <>
      <Text
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
          marginTop: 5,
        }}
      >
        {icon}

        <TextInput
          key={index}
          id={index}
          ref={ref => (this.input = ref)}
          onPressIn={e => {
            if (index === e.currentTarget.currentProps.id) {
              e.target.focus();
            }
          }}
          secureTextEntry={type === 'password'}
          onChange={val => {
            onChange(val.nativeEvent.text);
          }}
          inputMode={type}
          style={{ marginLeft: 10, width: '90%', height: 50, zIndex: 1 }}
          placeholder={placeholder}
          value={value}
        />
      </View>
    </>
  );
};

export default Input;
