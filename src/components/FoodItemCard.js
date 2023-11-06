import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../screens/FoodList';
import {images, SIZES, COLORS, FONTS} from '../constants/theme';
const myImage = require('../../assets/prodImage.jpg');
export const FoodItemCard = ({ name, price, rating }) => (
  <View style={styles.card}>
    <View style={{width:SIZES.width*0.5}}>
    <Text style={FONTS.h3}>{name}</Text>
    <Text style={FONTS.h4}>Voluptate dolor ipsum na veniam in.</Text>
    <Text style={FONTS.h4}>{Math.floor(Math.random() * 1001)} cal</Text>
    </View>
    <Image
        source={myImage} // Use the imported image as the source
        style={{ width: 100, height: 100 }}
      />
  </View>
);
