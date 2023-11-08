import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SectionList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFoodData, selectFoodData} from '../Store/slices/foodSlice';
import {FoodItemCard} from '../components/FoodItemCard';
import { SIZES, COLORS, FONTS} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Banner from '../components/Banner.tsx';
const FoodList = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const sectionListRef = useRef(null);
  const sectionListY = useRef(0);
  const headerScrollViewRef = useRef(null);
  const foodData = useSelector(selectFoodData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  const handleCategoryChange = (category, index) => {
    setCurrentCategoryIndex(index);
    sectionListRef.current.scrollToLocation({
      animated: true,
      sectionIndex: index,
      itemIndex: 0,
      viewOffset: 0,
    });

    const headerWidth = 120;
    const scrollPosition = headerWidth * index;
    headerScrollViewRef.current.scrollTo({x: scrollPosition, animated: true});
  };

  const renderFoodItem = ({item}) => (
    <FoodItemCard name={item.name} price={item.price} rating={item.rating} />
  );
  const renderSectionHeader = ({section}) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );
  const onSectionListScroll = event => {
    sectionListY.current = event.nativeEvent.contentOffset.y;

    const headerHeight = 40;
    const headerIndex = Math.floor(
      (sectionListY.current + headerHeight) / headerHeight,
    );
    if (headerIndex >= 0 && headerIndex < foodData.length) {
      setCurrentCategoryIndex(headerIndex);

      const headerWidth = 120;
      const scrollPosition = headerWidth * headerIndex;
      headerScrollViewRef.current.scrollTo({x: scrollPosition, animated: true});
    }
  };
  if (foodData === null) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.headerContainer}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.headerContent}
        ref={headerScrollViewRef}>
        {foodData.map((category, index) => (
          <Text
            key={index}
            style={[
              styles.header,
              currentCategoryIndex === index && styles.selectedHeader,
            ]}
            onPress={() => handleCategoryChange(category.category, index)}>
            {category.category}
          </Text>
        ))}
      </ScrollView>
      <View style={{margin: 10}}>
        <Text style={[FONTS.h4]}>Adults need around 2000 kcal a day</Text>
        <Text style={[FONTS.h3, {marginVertical: 20}]}>New daily Specials</Text>
      </View>
      <SectionList
        ref={sectionListRef}
        sections={foodData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderFoodItem}
        onScroll={onSectionListScroll}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (currentCategoryIndex < foodData.length - 1) {
            handleCategoryChange(
              foodData[currentCategoryIndex + 1].category,
              currentCategoryIndex + 1,
            );
          }
        }}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    height: 80,
    marginVertical: 20,
  },
  headerContent: {
    alignItems: 'flex-start',
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  selectedHeader: {
    fontWeight: 'bold',
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    elevation: 2,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuContainer: {
    marginHorizontal: 20,
  },
  headerComponent: {
    display: 'flex',
    alignContent: 'center',
    height: 60,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    width: SIZES.width * 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 20,
    height: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height:SIZES.height * 0.3
  },
});

export default FoodList;
