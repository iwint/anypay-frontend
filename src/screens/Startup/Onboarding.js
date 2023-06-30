import { View, Text } from 'react-native';
import React from 'react';
import Onboard1 from '../../assets/illustrations/Onboard1';
import Onboard2 from '../../assets/illustrations/Onboard2';
import * as Animatable from 'react-native-animatable';
import { Colors, FontSize } from '../../theme/Variables';
import { Common, Fonts, Gutters, Layout } from '../../theme';
import { useTranslation } from 'react-i18next';
import Buttons from '../../theme/components/Buttons';
import { TouchableOpacity } from 'react-native';
import { Button } from '../../components';
import { useLazyFetchOneQuery } from '../../services/modules/users';

const Onboarding = ({ navigation }) => {
  const { t } = useTranslation(['example', 'welcome']);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const Font = Fonts({ FontSize, Colors });
  const Layouts = Layout();
  const vectors = [
    {
      vector: <Onboard1 />,
      title: 'Spend your money smarter',
      description:
        'Never overspend your money again with smart budgeting feature.',
    },
    {
      vector: <Onboard2 />,
      title: 'Manage your money wisely',
      description:
        'Track your money flows, balance, and everyday transactions on the go.',
    },
  ];

  const handleStep = () => {
    setCurrentIndex(1);
  };

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  const navigateToAuth = type => {
    navigation.push('Auth', {
      type: type,
    });
    console.log('type', type);
  };

  return (
    <View style={[Layouts.fullSize]}>
      <View style={[Layouts.halfHeight + '20%']}>
        {vectors?.map((item, index) => {
          if (index === currentIndex) {
            return (
              <Animatable.View
                key={index}
                animation="slideInRight"
                duration={1000}
                delay={0}
                style={[
                  Layouts.center,
                  {
                    gap: 20,
                    height: '80%',
                  },
                ]}
              >
                {item.vector}
                <View style={{ gap: 10 }}>
                  <Text
                    style={[Font.textCenter, Font.textBold, Font.textRegular]}
                  >
                    {t(`${item?.title}`)}
                  </Text>
                  <Text
                    style={[
                      Font.textLight,
                      Font.textCenter,
                      {
                        width: 250,
                        lineHeight: 20,
                        fontSize: FontSize.small - 2,
                      },
                    ]}
                  >
                    {item.description}
                  </Text>
                </View>
              </Animatable.View>
            );
          }
        })}
        <View
          style={[
            Layouts.center,
            {
              paddingHorizontal: 20,
              gap: 20,
            },
          ]}
        >
          <Button
            title={currentIndex === 1 ? 'Get Started' : 'Continue'}
            onPress={() => {
              if (currentIndex === 1) {
                navigateToAuth('sign_up');
              } else {
                handleStep();
              }
            }}
          />
          <Button
            title={'Sign in'}
            bgColor={Colors.white}
            color={Colors.primary}
            onPress={() => {
              navigateToAuth('sign_in');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
