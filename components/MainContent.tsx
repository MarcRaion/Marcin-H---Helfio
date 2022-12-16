import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import HealthDetails from './HealthDetails';
import Chart from './Chart';

const MainContent = () => {
  const bmiProps = {
    chartName: 'Bmi',
    value: 22,
  };
  const whrProps = {
    chartName: 'Vhr',
    value: 1,
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/body.png')} />
        </View>
        <View style={styles.charts}>
          <Chart chartName={bmiProps.chartName} value={bmiProps.value} />
          <Chart chartName={whrProps.chartName} value={whrProps.value} />
        </View>
      </View>
      <HealthDetails />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 123.07,
    height: 342,
    left: 38,
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charts: {
    top: 20,
    justifyContent: 'space-around',
  },
});
export default MainContent;
