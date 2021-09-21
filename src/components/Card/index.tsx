import React from 'react';

import { t } from '../../global/locales';
import { formatCurrency } from '../../utils/formatCurrency';

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
  productCategory: string;
  productSize: string;
  quantity: string;
  title: string;
  price: number;
  total: number;
}

export function Card({
  productCategory,
  productSize,
  quantity,
  title,
  price,
  total,
}: Props) {
  return (
    <Container>
      <Content>
        <Subtitle>{productCategory}</Subtitle>
        <Title>{title} {productSize} x {quantity} un.</Title>
        <Price>{formatCurrency(price)} / litro</Price>
      </Content>
      <Footer>
        <TotalLabel>{t('GENERAL_TOTAL')}</TotalLabel>
        <Total>{formatCurrency(total)}</Total>
      </Footer>
    </Container>
  );
}
