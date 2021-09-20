import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Calculator } from '../screens/Calculator';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return(
    <Stack.Navigator initialRouteName='Calculator'>
      <Stack.Screen name='Calculator' component={Calculator} />
    </Stack.Navigator>
  )
}
