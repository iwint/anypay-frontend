import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Brand } from '../../components';
import { setDefaultTheme } from '../../store/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const { Layout, Gutters } = useTheme();
  console.log(navigation);
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigation.reset({
      index: 0,
      routes: [{ name: 'Navigations' }],
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} /> */}
    </View>
  );
};
export default SplashScreen;
