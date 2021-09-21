import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)`
  align-self: center;
  margin: 24px 0;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondaryMedium};
  color: ${({ theme }) => theme.colors.text};
`;
