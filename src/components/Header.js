import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>Deliveroo</Text>
        <Text style={styles.logo}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    fontFamily: FONTS.logoFont,
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default Header;
