import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Label,
} from './styles';

interface Props extends RectButtonProps {
  value: string;
  selected?: boolean;
}

export function Badge({ value, selected = false, ...rest }: Props) {
  return (
    <Container selected={selected} {...rest}>
      <Label selected={selected}>{value}</Label>
    </Container>
  );
}
