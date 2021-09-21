import React from 'react';

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
  price: string;
  total: string;
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
        <Price>R$ {price} / litro</Price>
      </Content>
      <Footer>
        <TotalLabel>total</TotalLabel>
        <Total>{total}</Total>
      </Footer>
    </Container>
  );
}
