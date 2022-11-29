import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

const WhrChart = () => {
  return (
    <View>
      <Svg width={124} height={66} fill="none">
        <Path
          d="m94.72 9.327-4.003 6.933C105.906 25.817 116 42.73 116 62a4 4 0 0 0 8 0c0-22.231-11.701-41.73-29.28-52.673Z"
          fill="#F2EFDC"
        />

        <Path
          d="M36.745 14.258C44.281 10.262 52.877 8 62 8c9.124 0 17.719 2.263 25.255 6.257l4.003-6.933C82.543 2.65 72.58 0 62 0 51.42 0 41.457 2.65 32.742 7.324l4.003 6.934Z"
          fill="#FDA901"
        />

        <Path
          d="M33.283 16.26 29.28 9.328C11.7 20.27 0 39.77 0 62a4 4 0 1 0 8 0c0-19.27 10.094-36.183 25.283-45.74Z"
          fill="#F2EFDC"
        />
      </Svg>
      <Svg width={16} height={12} fill="none" style={styles.arrow}>
        <Path
          d="M9.47 2.117a2 2 0 0 0-2.939 0l.735.678-.735-.678-4.643 5.026C.705 8.424 1.613 10.5 3.358 10.5h9.285c1.744 0 2.653-2.076 1.47-3.357L9.468 2.117Z"
          fill="#FDA901"
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
    alignSelf: 'center',
    top: 3,
  },
});

export default WhrChart;
