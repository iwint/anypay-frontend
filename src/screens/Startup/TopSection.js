import { View, Text } from 'react-native';
import React from 'react';
import { Fonts, Layout } from '../../theme';
import Onboard1 from '../../assets/illustrations/Onboard1';
import { Colors } from '../../theme/Variables';

const TopSection = ({ Content, dark, titleStyle, contentStyle }) => {
  return (
    <View
      style={[
        Layout().fullWidth,
        Layout().justifyContentCenter,
        { height: '15%', gap: 5 },
      ]}
    >
      <Text
        style={[
          Fonts().textBold,
          {
            fontSize: Fonts().textLarge.fontSize - 10,
            color: dark ? Colors.white : Colors.black,
            ...titleStyle,
          },
        ]}
      >
        {Content.title}
      </Text>
      <Text
        style={[
          Fonts().textLight,
          {
            fontSize: Fonts().textSmall.fontSize,
            lineHeight: 30,
            ...contentStyle,
          },
        ]}
      >
        {Content.description}
      </Text>
    </View>
  );
};

export default TopSection;
