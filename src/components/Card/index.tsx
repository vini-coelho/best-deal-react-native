import React from 'react';

import { t } from '../../global/locales';
import { formatCurrency } from '../../utils/formatCurrency';

import { ItemDTO } from '../../database/dtos/ItemDTO';

import {
  Container,
  Content,
  Subtitle,
  Title,
  Price,
  Footer,
  TotalLabel,
  Total,
} from './styles';

interface Props {
  item: ItemDTO
}

export function Card({ item }: Props) {
  return (
    <Container>
      <Content>
        <Subtitle>{item.category}</Subtitle>
        <Title>{item.title} {item.measureValue} x {item.quantity} un.</Title>
        <Price>{formatCurrency(item.price)} / litro</Price>
      </Content>
      <Footer>
        <TotalLabel>{t('GENERAL_TOTAL')}</TotalLabel>
        <Total>{formatCurrency(item.price * item.quantity)}</Total>
      </Footer>
    </Container>
  );
}
