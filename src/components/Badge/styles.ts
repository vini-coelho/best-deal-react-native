import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  selected: boolean;
}

export const Container = styled(RectButton)<Props>`
  background-color: ${({ theme, selected }) => selected ? theme.colors.main : theme.colors.background_secondary};
  padding: 0 15px;
  height: ${RFValue(25)}px;
  border-radius: ${RFValue(12.5)}px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<Props>`
  color: ${({ theme, selected }) => selected ? theme.colors.white : theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(12)}px;
`;
