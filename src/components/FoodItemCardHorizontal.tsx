import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../screens/FoodList';
import {  SIZES, COLORS, FONTS } from '../constants/theme';
const myImage = require('../../assets/prodImage.jpg');
const svg = require('../../assets/svg.png');
import Icon from 'react-native-vector-icons/FontAwesome5';

interface FoodItemCardHorizontalProps {
  rating: number;
}

const FoodItemCardHorizontal: React.FC<FoodItemCardHorizontalProps> = ({
  rating
}) => (
  <View style={styles.card}>
    <Image source={myImage} style={{ width: 100, height: 100 }} />
    <View
      style={{
        width: SIZES.width * 0.5,
        alignContent: 'center',
        alignSelf: 'center',
        marginLeft: 10,
      }}
    >
      <Text style={FONTS.h3}>Nathalie</Text>
      <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 5 }}>
        <Icon name="star" color="rgb(77, 124, 27);" size={20} />
        <Text style={[FONTS.h4, { marginLeft: 6 }]}>{rating}</Text>
        <Text style={[FONTS.h4, { marginLeft: 6 }]}>20 – 35 min</Text>
      </View>
      <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 5 }}>
        <Image
          tintColor={COLORS.primary}
          source={svg}
          style={{ width: 25, height: 25 }}
        />
        <Text style={[FONTS.h4, { marginLeft: 6 }]}>Deliveroo's Choice</Text>
      </View>
    </View>
  </View>
);

export default FoodItemCardHorizontal;
