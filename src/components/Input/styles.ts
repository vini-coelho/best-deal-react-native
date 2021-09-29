import styled from 'styled-components/native'
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;

  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
  margin-bottom: 3px;
`;

export const Highlight = styled.View`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 2px;
  bottom: 0px;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const StyledInput = styled(TextInput)`
  flex: 1;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primaryMedium};
`;

export const IconContainer = styled.View`
  height: ${RFValue(56)}px;

  padding-left: 24px;

  align-items: center;
  justify-content: center;

  /* border-right-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.background_primary}; */
`;
