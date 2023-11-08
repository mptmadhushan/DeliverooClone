import React from 'react';
import {ScrollView, Text,View, StyleSheet} from 'react-native';
import Banner from '../components/Banner';
import Header from '../components/Header';
import RestaurantInfo from '../components/RestaurantInfo';
import FoodList from './FoodList';

const Home: React.FC = () => {
  return (
    <ScrollView>
      <Header />
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
        <View style={styles.stickyContainer}>
      <Text style={styles.stickyText}>Sticky Component</Text>
    </View>
    <FoodList/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  stickyContainer: {
    position: 'sticky',  // Make the component sticky
    top: 0,             // Stick it at the top of the parent container
    backgroundColor: 'white',
    padding: 10,
    zIndex: 1,          // Ensure it appears above other content
  },
  stickyText: {
    fontWeight: 'bold',
  },
});


export default Home;
