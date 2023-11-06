import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, SectionList } from 'react-native';
// import foodData from '../constants/foodData';


const foodData = [
  {
    category: 'Beverage',
    data: [
      { name: 'Orange Juice', price: 200, rating: 4.3 },
      { name: 'Coffee', price: 150, rating: 4.0 },
      { name: 'Iced Tea', price: 180, rating: 4.5 },
      { name: 'Lemonade', price: 170, rating: 4.2 },
      { name: 'Milkshake', price: 190, rating: 4.4 },
    ],
  },
  {
    category: 'Appetizer',
    data: [
      { name: 'Mozzarella Sticks', price: 250, rating: 4.2 },
      { name: 'Nachos', price: 220, rating: 4.1 },
      { name: 'Spring Rolls', price: 190, rating: 4.4 },
      { name: 'Chicken Wings', price: 270, rating: 4.6 },
      { name: 'Spinach Dip', price: 230, rating: 4.3 },
    ]
  },
  {
    category: 'Main Course',
    data: [
      { name: 'Grilled Chicken', price: 350, rating: 4.6 },
      { name: 'Pasta Carbonara', price: 320, rating: 4.8 },
      { name: 'Steak', price: 420, rating: 4.7 },
      { name: 'Salmon Fillet', price: 380, rating: 4.5 },
      { name: 'Vegetable Stir-fry', price: 290, rating: 4.2 },
        ]
  },
  {
    category: 'Dessert',
    data: [
      { name: 'Chocolate Cake', price: 180, rating: 4.5 },
      { name: 'Ice Cream Sundae', price: 150, rating: 4.3 },
      { name: 'Fruit Salad', price: 160, rating: 4.2 },
      { name: 'Cheesecake', price: 200, rating: 4.1 },
      { name: 'Tiramisu', price: 170, rating: 4.7 },
    ]
  },
  // Additional categories
  {
    category: 'Salad',
    data: [
      { name: 'Caesar Salad', price: 220, rating: 4.2 },
      { name: 'Greek Salad', price: 200, rating: 4.4 },
      { name: 'Cobb Salad', price: 250, rating: 4.6 },
    ],
  },
  {
    category: 'Seafood',
    data: [
      { name: 'Shrimp Scampi', price: 320, rating: 4.8 },
      { name: 'Lobster Bisque', price: 280, rating: 4.3 },
      { name: 'Grilled Salmon', price: 360, rating: 4.5 },
    ],
  },
];

const FoodItemCard = ({ name, price, rating }) => (
  <View style={styles.card}>
    <Text>Name: {name}</Text>
    <Text>Price: ${price}</Text>
    <Text>Rating: {rating}</Text>
  </View>
);

const FoodList = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const sectionListRef = useRef(null);
  const sectionListY = useRef(0);
  const headerScrollViewRef = useRef(null);

  const handleCategoryChange = (category, index) => {
    setCurrentCategoryIndex(index);
    sectionListRef.current.scrollToLocation({
      animated: true,
      sectionIndex: index,
      itemIndex: 0,
      viewOffset: 0,
    });

    // Calculate the position of the selected header title and scroll to it
    const headerWidth = 120; // Adjust this value based on your header's width
    const scrollPosition = headerWidth * index;
    headerScrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
  };

  const renderFoodItem = ({ item }) => (
    <FoodItemCard
      name={item.name}
      price={item.price}
      rating={item.rating}
    />
  );

  const onSectionListScroll = (event) => {
    sectionListY.current = event.nativeEvent.contentOffset.y;
    // Determine the category based on the scroll position and update the current category
    const headerHeight = 40; // Adjust this value based on your header's height
    const headerIndex = Math.floor((sectionListY.current + headerHeight) / headerHeight);
    if (headerIndex >= 0 && headerIndex < foodData.length) {
      setCurrentCategoryIndex(headerIndex);
      
      // Calculate the position of the selected header title and scroll to it
      const headerWidth = 120; // Adjust this value based on your header's width
      const scrollPosition = headerWidth * headerIndex;
      headerScrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.headerContainer}
        contentContainerStyle={styles.headerContent}
        ref={headerScrollViewRef}
      >
        {foodData.map((category, index) => (
          <Text
            key={index}
            style={[
              styles.header,
              currentCategoryIndex === index && styles.selectedHeader,
            ]}
            onPress={() => handleCategoryChange(category.category, index)}
          >
            {category.category}
          </Text>
        ))}
      </ScrollView>
      <SectionList
        ref={sectionListRef}
        sections={foodData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderFoodItem}
        onScroll={onSectionListScroll} // Handle scroll event
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (currentCategoryIndex < foodData.length - 1) {
            handleCategoryChange(
              foodData[currentCategoryIndex + 1].category,
              currentCategoryIndex + 1
            );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  headerContent: {
    alignItems: 'flex-start', // Align the content to the left
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  selectedHeader: {
    fontWeight: 'bold',
    color: 'red',
    backgroundColor:'blue'
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    elevation: 2,
  },
});

export default FoodList;
