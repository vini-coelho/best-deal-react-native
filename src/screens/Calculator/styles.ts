import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding-top: ${24 + getStatusBarHeight()}px;
`;

export const Header = styled.View`
  padding: 0 24px;
  margin-bottom: 20px;
`;

export const HeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Selector = styled(BorderlessButton)`
  flex-direction: row;
`;

export const SelectorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primaryRegular};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
`;

export const Content = styled.View`
  padding: 0 24px;
`;


export const ListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const HeaderLeftTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primarySemiBold};
  font-size: ${RFValue(14)}px;
`;
