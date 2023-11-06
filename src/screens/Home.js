import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import HeaderComponent from '../components/Header';
import FoodList from '../screens/FoodList';
function Home() {
  return (
    <View>
      <HeaderComponent />
      {/* <FoodList /> */}
    </View>
  );
}

export default Home;
