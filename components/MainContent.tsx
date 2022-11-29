import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import HealthDetails from './HealthDetails';
import BmiChart from './BmiChart';
import ChartPannel from './ChartPannel';
import WhrChart from './WhrChart';

const MainContent = () => {
  return (
    <>
      <View style={styles.container2}>
        <View>
          <Image source={require('../assets/body.png')} />
        </View>
        <View style={styles.charts}>
          <View>
            <ChartPannel Check={<BmiChart />} description="BMI" points="23.2" summary="Normal" />
          </View>
          <View>
            <ChartPannel Check={<WhrChart />} description="WHR" points="0.96" summary="Average" />
          </View>
        </View>
      </View>
      <HealthDetails />
    </>
  );
};

const styles = StyleSheet.create({
  container2: {
    // position: 'absolute',
    width: 123.07,
    height: 342,
    left: 38,
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charts: {
    left: 38,
    justifyContent: 'space-around',
  },
});
export default MainContent;
