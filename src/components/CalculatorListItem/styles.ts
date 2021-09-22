import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};

  padding: 15px 24px;
  margin-bottom: ${RFValue(5)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemInfo = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const ItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(15)}px;
`;

export const RelativeValue = styled.Text`
  color: ${({ theme }) => theme.colors.main};
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  font-size: ${RFValue(15)}px;
`;

