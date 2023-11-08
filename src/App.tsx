import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from './Store/store';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
