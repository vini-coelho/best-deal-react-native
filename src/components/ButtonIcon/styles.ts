import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;
