import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentedRoundDisplay from 'react-native-segmented-round-display';
import { BmiBorders } from './BmiBorders';
import { WhrBorders } from './WhrBorders';

type ChartT = {
  chartName: string;
  value: number;
};
const Chart = ({ chartName, value }: ChartT) => {
  const whrChartColor = '#FDA901';
  const bmiChartColor = '#8FBD12';

  const getColor = () => {
    return chartName.toLowerCase() === 'bmi' ? bmiChartColor : whrChartColor;
  };

  const getSummaryText = () => {
    if (chartName.toLocaleLowerCase() === 'bmi') {
      if (value < BmiBorders.LOW) {
        return 'Low';
      }
      if (value < BmiBorders.NORMAL) {
        return 'Normal';
      }
      if (value <= BmiBorders.RISEN) {
        return 'Risen';
      }
      if (value <= BmiBorders.HIGH) {
        return 'High';
      } else {
        return 'Very high';
      }
    } else {
      if (value <= WhrBorders.LOW) {
        return 'Low';
      }
      if (value > WhrBorders.LOW && value <= WhrBorders.AVERAGE) {
        return 'Average';
      } else return 'High';
    }
  };

  const getSegments = () => {
    return chartName.toLocaleLowerCase() === 'bmi' ? bmiSegments : whrSegments;
  };

  const bmiSegments = [
    {
      total: 18.5,
      filled: value < BmiBorders.LOW ? value : 0 || (value >= 18.5 && 18.5),
    },
    {
      total: 7,
      filled: value >= BmiBorders.LOW ? value - BmiBorders.LOW : 0 || (value >= 24.99 && 7),
    },
    {
      total: 5,
      filled: value > BmiBorders.NORMAL ? value - BmiBorders.NORMAL : 0 || (value >= 30 && 5),
    },
    {
      total: 10,
      filled: value > BmiBorders.RISEN ? value - BmiBorders.RISEN : 0 || (value >= 40 && 10),
    },
    {
      total: 10,
      filled: value > BmiBorders.HIGH ? value - BmiBorders.HIGH : 0,
    },
  ];
  const whrSegments = [
    {
      total: 1,
      filled: value <= WhrBorders.LOW ? value - 1 : 0 || (value > 0.5 && 1),
    },
    {
      total: 1,
      filled: value > WhrBorders.LOW ? value - 0.5 : 0,
    },
    {
      total: 1,
      filled: value > WhrBorders.AVERAGE ? value - 1.5 : 0,
    },
  ];
  return (
    <View>
      <SegmentedRoundDisplay
        radius={60}
        totalArcSize={180}
        arcSpacing={10}
        filledArcColor={getColor()}
        incompleteArcColor={getColor()}
        emptyArcColor="#F2EFDC"
        segments={getSegments()}
      />
      <View style={styles().container}>
        <Text style={styles().points}>{value}</Text>
        <Text style={styles().chartName}>{chartName.toUpperCase()}</Text>
        <View style={styles(chartName).summary}>
          <Text style={styles(chartName).summaryText}>{getSummaryText()}</Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;

const styles = (chartName?: string) =>
  StyleSheet.create({
    container: {
      bottom: 100,
    },
    points: {
      alignSelf: 'center',
      position: 'absolute',
      fontFamily: 'Quicksand',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 32,
      lineheight: 40,
      color: '#293C32',
      bottom: 20,
    },
    chartName: {
      alignSelf: 'center',
      justifyContent: 'flex-start',
      position: 'absolute',
      fontFamily: 'Red Hat Display',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 21,
      textAlign: 'center',
      color: '#293C32',
    },
    summary: {
      width: 86,
      height: 28,
      backgroundColor: chartName?.toLocaleLowerCase() === 'bmi' ? '#EEF3DF' : '#FFF0D2',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      top: 30,
    },
    summaryText: {
      fontFamily: 'Red Hat Display',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 19,
      color: chartName?.toLocaleLowerCase() === 'bmi' ? '#8FBD12' : '#FDA901',
    },
  });
