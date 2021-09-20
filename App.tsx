import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  Archivo_600SemiBold,
  useFonts,
} from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { theme } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts([
    Archivo_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
  ]);

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
