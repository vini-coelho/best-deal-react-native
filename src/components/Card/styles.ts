import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;

  margin-bottom: 4px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: 4px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.success};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 2px;
  padding: 15px 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TotalLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Total = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.secondaryMedium};
  color: ${({ theme }) => theme.colors.title};
`;

