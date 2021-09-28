import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  buttonStyle: 'default' | 'white';
}

export function Button({
  title,
  buttonStyle = 'default',
  ...rest
}: Props) {
  return (
    <Container buttonStyle={buttonStyle} {...rest}>
      <Title buttonStyle={buttonStyle}>{title}</Title>
    </Container>
  )
}
