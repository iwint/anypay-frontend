import { View, Text } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

const EmailIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
    >
      <Path
        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 7L12 13L21 7"
        stroke="#9CA3AF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default EmailIcon;
