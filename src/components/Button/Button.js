import { Text, TouchableOpacity } from 'react-native';
import { Common, Fonts, Gutters, Layout } from '../../theme';
import { Colors, FontSize } from '../../theme/Variables';

export default function ({ title, onPress, height, color, bgColor }) {
  return (
    <TouchableOpacity
      style={[
        Common({ Colors, Layout, Gutters }).button.rounded,
        Layout().center,
        Layout().fullWidth,
        {
          height: height ? height : 60,
          backgroundColor: bgColor ? bgColor : Colors.primary,
          zIndex: 1,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          Fonts().textRegular,
          {
            color: color ? color : Colors.white,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
