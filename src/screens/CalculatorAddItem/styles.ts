import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 24px;
  padding-bottom: ${getBottomSpace() + 24}px;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
