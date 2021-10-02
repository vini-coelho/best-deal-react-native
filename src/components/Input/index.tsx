import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Content,
  Label,
  Highlight,
  StyledInput,
  IconContainer,
} from './styles';

interface Props extends TextInputProps {
  iconName?:  ConstructorParameters<typeof Feather>[0]['name'];
  label: string;
}

export function Input({
  iconName,
  style,
  value,
  label,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme();

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <Container style={style}>
      <Label>{label}</Label>
      <Content>
        {
          !!iconName &&
          <IconContainer>
            <Feather
              name={iconName}
              size={24}
              color={(isFocused || !!value) ? colors.main : colors.text_detail}
            />
          </IconContainer>
        }

      <StyledInput
        autoCorrect={false}
        autoCapitalize="none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        placeholderTextColor={colors.text_detail}
        {...rest}
      />
      </Content>

      { (isFocused || !!value) && <Highlight /> }
    </Container>
  );
}
