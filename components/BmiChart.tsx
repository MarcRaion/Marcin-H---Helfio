import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

const BmiChart = () => {
  return (
    <View>
      <Svg width={124} height={66} fill="none">
        <Path
          d="m10.687 27.19 6.476 4.706C11.377 40.497 8 50.854 8 62a4 4 0 1 1-8 0c0-12.903 3.942-24.886 10.687-34.81Z"
          fill="#E6EFCF"
        />

        <Path
          d="M43.418 11.282c-9.506 3.484-17.759 9.563-23.901 17.38l-6.477-4.706c7.13-9.163 16.778-16.272 27.904-20.289l2.474 7.615Z"
          fill="#8FBD12"
        />

        <Path
          d="M76.778 10.047A54.038 54.038 0 0 0 62 8c-5.124 0-10.081.714-14.778 2.047l-2.474-7.615A62.03 62.03 0 0 1 62 0a62.03 62.03 0 0 1 17.252 2.432l-2.474 7.615ZM104.483 28.662c-6.142-7.817-14.396-13.896-23.901-17.38l2.474-7.615c11.126 4.017 20.773 11.126 27.903 20.29l-6.476 4.705ZM106.837 31.896C112.623 40.497 116 50.854 116 62a4 4 0 0 0 8 0c0-12.903-3.942-24.886-10.687-34.81l-6.476 4.706Z"
          fill="#E6EFCF"
        />
      </Svg>
      <Svg width={20} height={18} style={styles.arrow} fill="none">
        <Path
          d="M15.249 5.664 8.617 3.978a2 2 0 0 0-2.464 1.6l-1.156 6.744c-.295 1.719 1.598 2.965 3.06 2.015l7.788-5.057c1.463-.95 1.094-3.186-.596-3.616Z"
          fill="#8FBD12"
          stroke="#F6F6F6"
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    left: 22,
    top: 11,
  },
});

export default BmiChart;
