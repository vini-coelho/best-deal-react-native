import React from 'react';
import { ItemDTO } from '../../database/dtos/ItemDTO';
import { formatCurrency } from '../../utils/formatCurrency';

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
        <ItemInfo>{item.measureValue} {item.unit} x {item.quantity} un</ItemInfo>
        <Total>{formatCurrency(item.quantity * item.price)}</Total>
      </Header>
      <Content>
        <ItemTitle>{item.title}</ItemTitle>
        <RelativeValue>{formatCurrency(item.relativePrice!)} / l</RelativeValue>
      </Content>
    </Container>
  );
}
