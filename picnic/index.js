/**
 * @format
 */
// MUST BE TOP
import {ColourPalette} from '@assets/styles/ColoursStyles';
import {NavigationContainer} from '@react-navigation/native';

import React, {Suspense} from 'react';
import {AppRegistry, View, ActivityIndicator} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => {
  return () => (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Suspense
          fallback={
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color={ColourPalette.gray} />
            </View>
          }>
          <App />
        </Suspense>
      </View>
    </NavigationContainer>
  );
});
