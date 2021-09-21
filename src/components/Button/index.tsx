import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  buttonStyle: 'red' | 'green' | 'white';
}

export function Button({
  title,
  buttonStyle = 'white',
  style,
  ...rest
}: Props) {
  const { colors } = useTheme();

  const gradients = useMemo(() => ({
    red: [colors.main, colors.main_light],
    green: [colors.success, colors.success],
    white: [colors.white, colors.white],
  }), [])

  return (
    <LinearGradient
      colors={gradients[buttonStyle]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={style}
    >
      <Container {...rest}>
        <Title buttonStyle={buttonStyle}>{title}</Title>
      </Container>
    </LinearGradient>
  )
}
