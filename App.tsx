/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import UsersScreen from './src/container/Main/users/UserListScreen';
import RootNavigator from './src/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
