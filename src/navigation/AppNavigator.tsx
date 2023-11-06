import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/SplashScreen';
import FoodList from '../screens/FoodList';
import LoginScreen from '../screens/LoginScreen';
import { selectIsAuthenticated } from '../Store/slices/authSlice';
const Stack = createStackNavigator();

export type RootStackParamList = {
  Splash: undefined;
  FoodList: undefined;
  LoginScreen: undefined;
};

function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log("🚀 ~ file: AppNavigator.tsx:19 ~ AppNavigator ~ isAuthenticated:", isAuthenticated)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        {!isAuthenticated ? (
          <Stack.Screen name="FoodList" component={FoodList} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
