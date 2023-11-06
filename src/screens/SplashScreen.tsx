import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Define RootStackParamList in AppNavigator

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

function SplashScreen({ navigation }: SplashScreenProps) {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds) and then navigate to the Home screen.
    setTimeout(() => {
      navigation.navigate('FoodList');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00ccbc" />
      <LottieView
        style={styles.animation}
        source={require('../../assets/AnimationSplash.json')}
        autoPlay
        loop
        speed={0.5}
      />
      <Text style={styles.text}>Deliveroo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ccbc', // Replace with your desired background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;
