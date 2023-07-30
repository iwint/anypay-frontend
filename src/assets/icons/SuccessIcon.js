import { View, Text } from 'react-native';
import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

const SuccessIcon = () => {
  return (
    <Svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="62"
        cy="62"
        r="60"
        fill="#62C886"
        fillOpacity="0.2"
        stroke="#5FD788"
        strokeWidth="4"
      />
      <Path
        strokeWidth={5}
        d="M43.3336 63.0001L56.667 75.3334L83.3336 48.6667"
        stroke="#5FD788"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SuccessIcon;
