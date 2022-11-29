import React from 'react';
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { StyleSheet } from 'react-native';

const ProgressBar = () => {
  return (
    <>
      <Svg width={20} height={17} fill="none" style={styles.arrow}>
        <Path
          d="M12.314 13.551a3 3 0 0 1-4.628 0L2.206 6.91C.594 4.952 1.986 2 4.522 2H15.48c2.536 0 3.928 2.952 2.314 4.909l-5.479 6.642Z"
          fill="#D5C943"
          stroke="#fff"
          strokeWidth={3}
        />
      </Svg>
      <Svg width={271} height={8} fill="none">
        <Rect width={271} height={8} rx={4} fill="url(#a)" />
        <Defs>
          <LinearGradient id="a" x1={271} y1={4} x2={0} y2={4} gradientUnits="userSpaceOnUse">
            <Stop stopColor="#F93B12" />
            <Stop offset={0.339} stopColor="#FD7D36" />
            <Stop offset={0.682} stopColor="#FFC736" />
            <Stop offset={1} stopColor="#86CC5B" />
          </LinearGradient>
        </Defs>
      </Svg>
    </>
  );
};

const styles = StyleSheet.create({
  arrow: { right: 90, top: 2 },
});

export default ProgressBar;
