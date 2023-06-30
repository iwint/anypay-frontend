import React from 'react';
import { View, Image, Text } from 'react-native';
import { useTheme } from '../../hooks';
import { Fonts, Gutters } from '../../theme';
import { Colors } from '../../theme/Variables';
const Brand = ({ height, width, mode }) => {
  const { Layout, Images } = useTheme();
  return (
    <View
      testID={'brand-img-wrapper'}
      style={[Layout.fullSize, Layout.colCenter]}
    >
      <Image
        testID={'brand-img'}
        style={[
          Layout.fullSize,
          { height, width, borderColor: Colors.primary },
        ]}
        source={Images.logo}
        resizeMode={mode}
      />
    </View>
  );
};
Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};
export default Brand;
