import React from 'react';

import { t } from '../../global/locales';
import { formatCurrency } from '../../utils/formatCurrency';
import { ItemDTO } from '../../database/dtos/ItemDTO';

import { Button } from '../Button';

import {
  Container,
  Content,
  Row,
  Subtitle,
  Title,
  Price,
} from './styles';

interface Props {
  item: ItemDTO;
}

export function Card({ item }: Props) {
  return (
    <Container>
      {Object.keys(item).length ?
        <Content>
          <Row>
            <Title>{item.title} {item.measureValue}{item.unit}</Title>
            <Price>{formatCurrency(item.relativePrice)}</Price>
          </Row>
          <Row>
            <Subtitle>{item.quantity} {t('GENERAL_UNITS').toLowerCase()}</Subtitle>
            <Subtitle>{t('GENERAL_PER').toLowerCase()} {item.unit}</Subtitle>
          </Row>
          <Button
            buttonStyle="default"
            title={t('GENERAL_ADD_TO_LIST')}
            style={{ marginTop: 25 }}
          />
        </Content>
        :
        <Content>
          <Title>{t('GENERAL_NO_ITEMS_ADDED')}</Title>
          <Subtitle>{t('GENERAL_ADD_ITEMS_TO_CALCULATE')}</Subtitle>
        </Content>
      }
    </Container>
  );
}
