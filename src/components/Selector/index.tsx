import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  SelectorContainer,
  SelectorText,
} from './styles';

interface Props extends BorderlessButtonProps {
  label: string;
}

export function Selector({ label, ...rest }: Props) {
  const { colors } = useTheme();
  return (
    <SelectorContainer {...rest}>
      <SelectorText>{label}</SelectorText>
      <Feather
        name="chevron-down"
        size={RFValue(16)}
        color={colors.main}
      />
    </SelectorContainer>
  );
}
