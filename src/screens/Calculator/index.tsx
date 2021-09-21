import React from 'react';
import { StatusBar } from 'react-native';

import { Card } from '../../components/Card';

import { Container } from './styles';

export function Calculator() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
      />
      <Card
        productCategory='cerveja'
        productSize='300ml'
        title='Heineken'
        price={2.49}
        quantity='3'
        total={24.5}
      />
    </Container>
  );
}
