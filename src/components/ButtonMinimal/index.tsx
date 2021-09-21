import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface Props extends BorderlessButtonProps {
  title: string;
}
export function ButtonMinimal({
  title,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
