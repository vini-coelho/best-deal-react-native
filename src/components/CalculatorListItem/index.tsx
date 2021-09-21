import React from 'react';
import { ItemDTO } from '../../database/dtos/ItemDTO';

import {
  Container,
  Header,
  ItemInfo,
  Total,
  Content,
  ItemTitle,
  RelativeValue,
} from './styles';

interface Props {
  item: ItemDTO;
}

export function CalculatorListItem({ item }: Props) {
  return (
    <Container>
      <Header>
        <ItemInfo>330 ml x 6 un</ItemInfo>
        <Total>R$ 25,74</Total>
      </Header>
      <Content>
        <ItemTitle>Budweiser Long Neck</ItemTitle>
        <RelativeValue>R$ 5,50 / l</RelativeValue>
      </Content>
    </Container>
  );
}
