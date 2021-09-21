import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: ${24 + getStatusBarHeight()}px 24px 0;
`;
