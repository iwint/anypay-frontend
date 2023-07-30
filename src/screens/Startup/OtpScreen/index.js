import { View, Text } from 'react-native';
import React from 'react';
import { Layout } from '../../../theme';
import { Button, Header } from '../../../components';
import TopSection from '../TopSection';
import { Colors } from '../../../theme/Variables';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import SuccessBanner from '../../../components/SuccessBanner';

const OtpScreen = ({ navigation }) => {
  const mobile = navigation.getState().routes[2]?.params?.mobile;
  const [success, setSuccess] = React.useState(false);
  const Content = {
    title: 'Verify Code',
    description: `Please enter the code we just sent to phone number (+91) ${
      mobile ? mobile : '**********'
    }`,
  };

  const onHandleContinue = () => {
    setSuccess(p => !p);
  };

  return (
    <>
      <View
        style={[
          Layout().fullSize,

          {
            backgroundColor: Colors.blue,
            gap: 20,
            padding: 20,
          },
        ]}
      >
        {success ? (
          <SuccessBanner navigation={navigation} />
        ) : (
          <>
            <Header navigation={navigation} arrowColor={Colors.white} />
            <TopSection Content={Content} dark={true} />
            <View
              style={[
                Layout().justifyContentBetween,
                Layout().alignItemsCenter,
                { height: '75%' },
              ]}
            >
              <OTPInputView
                style={{ width: '80%', height: 200 }}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                  backgroundColor: Colors.circleButtonColor,
                  borderColor: Colors.circleButtonColor,
                  fontWeight: 'bold',
                  fontSize: 24,
                }}
                codeInputHighlightStyle={{
                  borderColor: Colors.primary,
                }}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
                keyboardAppearance="light"
              />
              <Button title={'Continue'} onPress={onHandleContinue} />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default OtpScreen;
