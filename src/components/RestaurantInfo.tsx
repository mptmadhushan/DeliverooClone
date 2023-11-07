import {View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FONTS, SIZES, COLORS} from '../constants/theme';

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
    <View style={styles.infoContainer}>
      <TouchableOpacity>
        <Icon name="info-circle" color="black" size={30} />
      </TouchableOpacity>

      <View style={{width: SIZES.width * 0.6}}>
        <Text style={styles.details}>Info</Text>
        <Text>Map, allergens and hygiene rating</Text>
      </View>
      <TouchableOpacity>
        <Icon name="reply" color="black" size={30} />
      </TouchableOpacity>
    </View>
    <View style={styles.infoContainer}>
      <TouchableOpacity>
        <Icon name="star" color="black" size={30} />
      </TouchableOpacity>

      <View style={{width: SIZES.width * 0.6}}>
        <Text style={[styles.details, {color: '#4d7c1b'}]}>4.8 Excellent</Text>
        <Text>See all 500 reviews</Text>
      </View>
      <TouchableOpacity>
        <Icon name="reply" color="black" size={30} />
      </TouchableOpacity>
    </View>
    <View style={styles.infoContainer}>
      <TouchableOpacity>
      <Image
        source={require('../../assets/rider.png')} // Use the imported image as the source
        style={{ width: 40, height:40 }}
      />
      </TouchableOpacity>

      <View style={{width: SIZES.width * 0.6}}>
        <Text style={styles.details}>Deliver</Text>
      </View>
      <TouchableOpacity>
      <Text style={[ {color:COLORS.primary,fontSize:20}]}>Change</Text>

      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
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
