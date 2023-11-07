import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/deliveroo.png')} // Use the imported image as the source
            style={{width: 30, height: 30}}
          />
          <Text style={styles.logo}>deliveroo</Text>
        </View>
        <View style={styles.sideContainer}>
          <Icon
            name="search"
            color={COLORS.primary}
            style={{marginHorizontal: 21}}
            size={19}
          />
        </View>
        <View style={[styles.sideContainer]}>
          <Icon name="user" color={COLORS.primary} size={13} />
          <Text style={styles.logo}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 11,
  },
  logo: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
    color: COLORS.primary,
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1111',
    padding: 9,
    borderRadius: 9,
  },
});

export default Header;
