import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container } from './styles';

interface Props extends RectButtonProps {
  iconName: ConstructorParameters<typeof Feather>[0]['name'];
}

export function ButtonIcon({ iconName, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <Feather
        size={RFValue(24)}
        color={colors.main}
        name={iconName}
      />
    </Container>
  );
}
