import { View, Text } from 'react-native';
import React from 'react';
import BackArrowIcon from '../../assets/icons/BackArrowIcon';
import { Gutters, Layout } from '../../theme';
import { Pressable } from 'react-native';
import Button from '../Button/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({ navigation }) => {
  return (
    <View style={[Layout().rowCenter, Layout().justifyContentBetween]}>
      <TouchableOpacity
        onPress={() => {
          console.log('Hey');
          navigation.goBack();
        }}
      >
        <BackArrowIcon />
      </TouchableOpacity>
      {/* <Text>Header</Text> */}
    </View>
  );
};

export default Header;
