import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding-top: ${24 + getStatusBarHeight()}px;
`;

export const Content = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  font-size: ${RFValue(40)}px;
  margin-bottom: 5px;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`;

export const HeaderLeftTitle = styled.Text``;

export const HeaderRightTitle = styled.Text``;
