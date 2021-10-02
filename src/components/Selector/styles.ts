import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const SelectorContainer = styled(BorderlessButton)`
  flex-direction: row;
  align-items: center;
`;

export const SelectorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryRegular};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(14)}px;
`;
