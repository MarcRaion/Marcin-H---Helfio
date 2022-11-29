import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>Health</Text>
        <Text style={styles.headerSubtitle}>Your body condition</Text>
      </View>
      <View style={styles.headerButtons}>
        <View style={styles.headerButtonsSmall}>
          <Image source={require('../assets/thunderbolt.png')} />
          <Text>1</Text>
        </View>
        <View>
          <Image source={require('../assets/avatar.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: 340,
    height: 54,
    left: 16,
    top: 67,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 24,
    lineHeight: 32,
    color: '#293C32',
  },
  headerSubtitle: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 21,
    color: '#97A98F',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButtonsSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
});

export default Header;
