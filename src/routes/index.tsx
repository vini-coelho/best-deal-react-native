import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from './Stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
