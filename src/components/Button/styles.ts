import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  buttonStyle: 'default' | 'white';
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(15)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, buttonStyle }) => buttonStyle === 'white'
    ? theme.colors.white
    : theme.colors.main
  };
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, buttonStyle }) => buttonStyle === 'white'
    ? theme.colors.title
    : theme.colors.white
  };
  font-family: ${({ theme }) => theme.fonts.secondaryMedium};
  font-size: ${RFValue(15)}px;
`;
