import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { theme } from './src/global/styles/theme';
import { CalculatorProvider } from './src/hooks/useCalculator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <CalculatorProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </CalculatorProvider>
  );
}
