import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import * as ROUTES from '@routes/Routes';
import ImageDetails from '@views/ImageDetails';
import Home from '@views/Home';
import {ColourPalette} from '@assets/styles/ColoursStyles';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColourPalette.white,
        },
        headerTintColor: ColourPalette.black,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <PublicStack.Screen
        key={ROUTES.pageNameHome}
        name={ROUTES.pageNameHome}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <PublicStack.Screen
        key={ROUTES.pageNameImageDetails}
        name={ROUTES.pageNameImageDetails}
        component={ImageDetails}
        options={{
          headerShown: false,
        }}
      />
    </PublicStack.Navigator>
  );
};
