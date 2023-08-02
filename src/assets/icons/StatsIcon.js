import { View, Text } from 'react-native';
import React from 'react';
import { ClipPath, Defs, G, Path, Rect, Svg } from 'react-native-svg';

const StatsIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.3" clip-path="url(#clip0_117_5618)">
        <Path
          d="M6.58333 12H2.91667C2.41041 12 2 12.4477 2 13V19C2 19.5523 2.41041 20 2.91667 20H6.58333C7.08959 20 7.5 19.5523 7.5 19V13C7.5 12.4477 7.08959 12 6.58333 12Z"
          fill="#022964"
        />
        <Path
          d="M20.5833 8H16.9167C16.4104 8 16 8.44772 16 9V19C16 19.5523 16.4104 20 16.9167 20H20.5833C21.0896 20 21.5 19.5523 21.5 19V9C21.5 8.44772 21.0896 8 20.5833 8Z"
          fill="#022964"
        />
        <Path
          d="M13.5833 4H9.91667C9.41041 4 9 4.44772 9 5V19C9 19.5523 9.41041 20 9.91667 20H13.5833C14.0896 20 14.5 19.5523 14.5 19V5C14.5 4.44772 14.0896 4 13.5833 4Z"
          fill="#022964"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_117_5618">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default StatsIcon;
