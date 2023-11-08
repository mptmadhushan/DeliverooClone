import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from '../screens/FoodList';
import {  SIZES, COLORS, FONTS } from '../constants/theme';

const myImage = require('../../assets/prodImage.jpg');

interface FoodItemCardProps {
  name: string;
  price: number;
  rating: number;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({ name, price, rating }) => {
  return (
    <View style={styles.card}>
      <View style={{ width: SIZES.width * 0.5 }}>
        <Text style={FONTS.h3}>{name}</Text>
        <Text style={FONTS.h4}>Voluptate dolor ipsum na veniam in.</Text>
        <Text style={FONTS.h4}>{Math.floor(Math.random() * 1001)} cal</Text>
      </View>
      <Image source={myImage} style={{ width: 100, height: 100 }} />
      <View style={styles.sideIcon}>
        <Icon name="plus" color="grey" size={19} />
      </View>
    </View>
  );
};

export default FoodItemCard;
