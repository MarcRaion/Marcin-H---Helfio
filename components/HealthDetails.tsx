import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ProgressBar from './ProgressBar';

const HealthDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.riskDescription}>Risk of developing diabetes over 10 years</Text>
      <Text style={styles.riskLevel}>Low</Text>
      <ProgressBar />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Learn more</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 343,
    height: 144,
    borderRadius: 16,
    alignSelf: 'center',
    top: 175,
    alignItems: 'center',
    justifyContent: 'center',
  },
  riskDescription: {
    color: '#293C32',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 26,
    fontStyle: 'normal',
    fontFamily: 'Red Hat Display',
  },
  riskLevel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 21,
    fontStyle: 'normal',
    color: '#B7B232',
  },
  button: {
    marginTop: 14,
    width: 323,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#97A98F',
  },
});

export default HealthDetails;
