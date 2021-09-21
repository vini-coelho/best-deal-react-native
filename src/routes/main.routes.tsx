import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CalculatorAddItem } from '../screens/CalculatorAddItem';
import { Calculator } from '../screens/Calculator';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return(
    <Stack.Navigator
      initialRouteName='Calculator'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Calculator'
        component={Calculator}
      />
      <Stack.Screen
        name='CalculatorAddItem'
        component={CalculatorAddItem}
      />
    </Stack.Navigator>
  )
}
