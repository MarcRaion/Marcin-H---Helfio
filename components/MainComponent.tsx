import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import MainContent from './MainContent';

const MainComponent = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MainContent />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default MainComponent;
