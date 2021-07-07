/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PrimaryContainer from '@containers/PrimaryContainer';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <PrimaryContainer />
      </NavigationContainer>
    </>
  );
};

export default App;
