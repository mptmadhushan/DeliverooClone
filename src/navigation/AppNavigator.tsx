import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {selectIsAuthenticated} from '../Store/slices/authSlice';
import FoodList from '../screens/FoodList';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  FoodList: undefined;
  LoginScreen: undefined;
};

function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {!isAuthenticated ? (
          <Stack.Screen
            name="FoodList"
            component={FoodList}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
