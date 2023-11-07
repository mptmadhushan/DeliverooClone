import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../constants/theme';

interface RestaurantInfoProps {
  restaurantName: string;
  cuisineType: string;
  details: string;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  restaurantName,
  cuisineType,
  details,
}) => (
  <View style={styles.container}>
    <Text style={styles.restaurantName}>{restaurantName}</Text>
    <Text style={styles.cuisineType}>{cuisineType}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  restaurantName: {
    ...FONTS.h1,
    marginBottom: 5,
  },
  cuisineType: {
    ...FONTS.body2,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    ...FONTS.body2,
    width: SIZES.width * 0.7,
  },
});

export default RestaurantInfo;
