import React, { useState, useEffect, useRef } from 'react';
import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SectionList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodData, selectFoodData } from '../Store/slices/foodSlice';
import Banner from '../components/Banner';
import Header from '../components/Header';
import RestaurantInfo from '../components/RestaurantInfo';
import FoodItemCard from '../components/FoodItemCard';
import FoodItemCardHorizontal from '../components/FoodItemCardHorizontal';
import { COLORS, FONTS } from '../constants/theme';
type FoodItem = {
  category: string;
  // Add other properties as needed
};
const headerSectionHeight = 700;

const App: React.FC = () => {
  const scrollY = new Animated.Value(0);
  const dispatch = useDispatch();
  const headerScrollViewRef = useRef<ScrollView | null>(null);
  const sectionListRef = useRef<SectionList | null>(null);
  const sectionListY = useRef(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
  const foodData = useSelector(selectFoodData);

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const stickyTop = scrollY.interpolate({
    outputRange: [-10, 0],
    inputRange: [headerSectionHeight, headerSectionHeight + 50],
    extrapolate: 'clamp',
  });

  const renderFoodItem = ({ item }: { item: any }) => (
    <FoodItemCard name={item.name} price={item.price} rating={item.rating} />
  );

  const renderFoodItemHor = ({ item }: { item: any }) => (
    <FoodItemCardHorizontal rating={item.rating} />
  );

  const handleCategoryChange = (category: string, index: number) => {
    console.log('hello category', category, index);
    setCurrentCategoryIndex(index);
    sectionListRef.current?.scrollToLocation({
      animated: true,
      sectionIndex: index,
      itemIndex: 0,
      viewOffset: 0,
    });
  };

  const stickyOpacity = scrollY.interpolate({
    outputRange: [0, 1],
    inputRange: [headerSectionHeight, headerSectionHeight + 10],
    extrapolate: 'clamp',
  });

  const onSectionListScroll = (event: any) => {
    console.log('trigger');
    sectionListY.current = event.nativeEvent.contentOffset.y;
    const headerHeight = 40;
    const headerIndex = Math.floor(
      (sectionListY.current + headerHeight) / headerHeight
    );
    if (headerIndex >= 0 && headerIndex < foodData.length) {
      setCurrentCategoryIndex(headerIndex);
    }
  };

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: any }) => {
    // if (viewableItems.length > 0) {
    //   const firstItemIndex = viewableItems[0].index;
    //   handleCategoryChange(foodData[firstItemIndex].category, firstItemIndex);
    // }
  };

  const renderSectionHeaderFoods = ({ section: { category } }: { section: any }) => (
    <Text style={[FONTS.h3, { marginVertical: 20, marginLeft: 10 }]}>{category}</Text>
  );

  if (foodData === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <View style={styles.headerSection}>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.headerContainer}
            ref={headerScrollViewRef}
          >
            {foodData?.map((category:FoodItem, index:number) => (
              <Text
                key={index}
                style={[
                  styles.header,
                  currentCategoryIndex === index && styles.selectedHeader,
                  currentCategoryIndex === index && {
                    color: '#f0f0f0', // Set your desired text color
                  },
                ]}
                onPress={() => handleCategoryChange(category.category, index)}
              >
                {category.category}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View>
          <View style={{ margin: 10 }}>
            <Text style={[FONTS.h3, { marginVertical: 20, marginLeft: 10 }]}>Best value options nearby</Text>
            <Text style={FONTS.h4}>Adults need around 2000 kcal a day</Text>
          </View>
        </View>
        <SectionList
          horizontal={true}
          sections={foodData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderFoodItemHor}
        />
        <View style={{ margin: 10 }}>
          <Text style={FONTS.h4}>Adults need around 2000 kcal a day</Text>
        </View>
        <SectionList
          ref={sectionListRef}
          sections={foodData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderFoodItem}
          onViewableItemsChanged={onViewableItemsChanged}
          onEndReachedThreshold={0.1}
          renderSectionHeader={renderSectionHeaderFoods}
          onEndReached={() => {
            if (currentCategoryIndex < foodData.length - 1) {
              handleCategoryChange(
                foodData[currentCategoryIndex + 1].category,
                currentCategoryIndex + 1
              );
            }
          }}
        />
      </ScrollView>
      <Animated.View
        style={[
          styles.animatedView,
          {
            top: stickyTop,
            opacity: stickyOpacity,
          },
        ]}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.headerContainer}
          ref={headerScrollViewRef}
        >
          {foodData?.map((category:FoodItem, index:number) => (
            <Text
              key={index}
              style={[
                styles.header,
                currentCategoryIndex === index && styles.selectedHeader,
                currentCategoryIndex === index && {
                  color: '#f0f0f0', // Set your desired text color
                },
              ]}
              onPress={() => handleCategoryChange(category.category, index)}
            >
              {category.category}
            </Text>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    height: 50,
    marginVertical: 10,
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 35,
  },
  selectedHeader: {
    fontWeight: 'bold',
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    height: 35,
  },
  container: {
    flex: 1,
  },
  animatedView: {
    height: 60,
    backgroundColor: '#f0f0f0',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: -150,
    left: 0,
    right: 0,
    opacity: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 16,
        shadowOffset: {
          width: 4,
          height: 3,
        },
      },
    }),
  },
  headerSection: {
    height: headerSectionHeight,
  },
});

export default App;
