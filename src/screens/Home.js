import React from 'react';
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import HeaderComponent from '../components/Header';
import {SIZES, COLORS, FONTS} from '../constants/theme';
import Banner from '../components/Banner.tsx';
import Header from '../components/Header';
import RestaurantInfo from '../components/RestaurantInfo';
function Home() {
  return (
    <ScrollView>
      <Header/>
      <Banner
        source={require('../../assets/banner.webp')}
        iconTopLeftName="arrow-circle-left"
        iconBottomRightName="user-friends"
        onTopPress={() => {
          // Handle top icon press
        }}
        onBottomRightPress={() => {
          // Handle bottom-right press
        }}
        restaurantName="Tossed - St Martin's Lane"
        cuisineType="Chicken . Salads . Healthy"
        distance="0.20 miles away . Opens at 11:00 . £7.00 minimum . £0.49 delivery"
      />
      <RestaurantInfo
        restaurantName="Tossed - St Martin's Lane"
        cuisineType="Chicken . Salads . Healthy"
        details="0.20 miles away . Opens at 11:00 . £7.00 minimum . £0.49 delivery"
      />
    </ScrollView>
  );
}

export default Home;
