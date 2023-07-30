import { View, Text } from 'react-native';
import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

const BackArrowIcon = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_50_9241)">
        <Path
          d="M5 12H19"
          stroke={color ? color : '#111827'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5 12L11 18"
          stroke={color ? color : '#111827'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M5 12L11 6"
          stroke={color ? color : '#111827'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_50_9241">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BackArrowIcon;
