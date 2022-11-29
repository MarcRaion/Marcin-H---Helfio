import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
  Check: React.ReactNode;
  points: string;
  description: string;
  summary: string;
}
const ChartPannel = ({ Check, points, description, summary }: IProps) => {
  return (
    <>
      {Check}
      <Text style={styles().points}>{points}</Text>
      <Text style={styles().text}>{description}</Text>
      <View style={styles(description).summary}>
        <Text style={styles(description).summaryText}>{summary}</Text>
      </View>
    </>
  );
};

const styles = (description?: string) =>
  StyleSheet.create({
    points: {
      alignSelf: 'center',
      justifyContent: 'flex-start',
      position: 'absolute',
      top: 30,
      fontFamily: 'Quicksand',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 32,
      lineheight: 40,
      color: '#293C32',
    },
    text: {
      alignSelf: 'center',
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
      backgroundColor: description === 'WHR' ? '#FFF0D2' : '#EEF3DF',
      borderRadius: 16,
      marginTop: 8,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    summaryText: {
      fontFamily: 'Red Hat Display',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 19,
      color: description === 'WHR' ? '#FDA901' : '#8FBD12',
    },
  });

export default ChartPannel;
