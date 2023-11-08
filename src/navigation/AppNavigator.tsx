import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {selectIsAuthenticated} from '../Store/slices/authSlice';
import FoodList from '../screens/FoodList';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export type RootStackParamList = {
  Home: undefined;
  FoodList: undefined;
  Login: undefined;
};

function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <NavigationContainer>
    {!isAuthenticated ? (
      <Drawer.Navigator>
        <Drawer.Screen  options={{ headerShown: false }}  name="Home" component={Home} />
        <Drawer.Screen  options={{ headerShown: false }}  name="FoodList" component={FoodList} />
        <Drawer.Screen  options={{ headerShown: false }}  name="Login" component={Login} />
      </Drawer.Navigator>
    ) : (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    )}
  </NavigationContainer>
  );
}

export default AppNavigator;
