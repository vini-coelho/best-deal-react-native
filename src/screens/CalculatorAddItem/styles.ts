import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: ${getStatusBarHeight() + 24}px 24px 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  font-size: ${RFValue(40)}px;
`;

export const Content = styled.View`
  background-color: red;
  flex: 1;
`;
