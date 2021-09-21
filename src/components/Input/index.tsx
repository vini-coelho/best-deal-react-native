import React, { useRef, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Content,
  Highlight,
  StyledInput,
  IconContainer,
} from './styles';

interface Props extends TextInputProps {
  iconName:  ConstructorParameters<typeof Feather>[0]['name'];
}

export function Input({
  iconName,
  style,
  value,
  ...rest
}: Props) {
  const { colors } = useTheme();
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <Container style={style}>
      <Content>
      <IconContainer>
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || !!value) ? colors.main : colors.text}
        />
      </IconContainer>

      <StyledInput
        autoCorrect={false}
        autoCapitalize="none"
        ref={inputRef.current}
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
