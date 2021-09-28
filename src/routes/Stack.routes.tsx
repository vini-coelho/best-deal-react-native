import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainTabs } from './Tabs.routes';

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
        name='Home'
        component={MainTabs}
      />
    </Stack.Navigator>
  )
}
