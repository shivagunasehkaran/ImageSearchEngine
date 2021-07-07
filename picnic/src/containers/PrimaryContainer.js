import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import * as NAV_ROUTES from '@routes/Routes';
import * as NAVIGATION from '@routes/Navigator';

const Stack = createStackNavigator();

// base stack
const PrimaryContainer = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        key={NAV_ROUTES.pageNamePublicStack}
        name={NAV_ROUTES.pageNamePublicStack}
        component={NAVIGATION.PublicRoutes}
      />
    </Stack.Navigator>
  );
};

export default PrimaryContainer;
