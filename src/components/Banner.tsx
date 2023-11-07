import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SIZES, COLORS, FONTS} from '../constants/theme';

interface ReusableImageBackgroundProps {
  source: ImageSourcePropType;
  iconTopLeftName: string; // Rename iconTopLeftName to iconTopName
  iconBottomRightName: string;
  onTopPress?: () => void; // Rename onTopLeftPress to onTopPress
  onBottomRightPress?: () => void;
}

const Banner: React.FC<ReusableImageBackgroundProps> = ({
  source,
  iconTopLeftName,
  iconBottomRightName,
  onTopPress,
  onBottomRightPress,
}) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchableTop} onPress={onTopPress}>
          <Icon
            name={iconTopLeftName}
            style={styles.icon}
            color="white"
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableBottomRight}
          onPress={onBottomRightPress}>
          <Icon
            name={iconBottomRightName}
            style={styles.icon}
            color={COLORS.primary}
            size={10}
          />
          <Text>Start Group Order</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
height:277,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
  },
  icon: {
    padding: 10,
  },
  touchableTop: {
    position: 'absolute',
    top: 0,
    left: 10,
    backgroundColor: 'transparent',
  },
  touchableBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderRadius: 8,
  },
});

export default Banner;
