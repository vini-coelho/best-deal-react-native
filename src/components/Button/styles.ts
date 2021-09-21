import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

interface TitleProps {
  buttonStyle: 'red' | 'green' | 'white';
}

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, buttonStyle }) => buttonStyle === 'white'
    ? theme.colors.title
    : theme.colors.white
  };
  font-family: ${({ theme }) => theme.fonts.secondaryMedium};
  font-size: ${RFValue(15)}px;
`;
