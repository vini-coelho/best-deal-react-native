import React from 'react';
import { FlatList, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { v4 as uuid } from 'uuid';

import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { ButtonMinimal } from '../../components/ButtonMinimal';
import { CalculatorListItem } from '../../components/CalculatorListItem';

import { ItemDTO } from '../../database/dtos/ItemDTO';
import { t } from '../../global/locales';

import {
  Container,
  Content,
  Title,
  ListHeader,
  HeaderLeftTitle,
  HeaderRightTitle,
} from './styles';

export function Calculator() {
  const items: ItemDTO[] = [
    {
      category: 'cerveja',
      title: 'Heineken',
      unit: 'ml',
      id: uuid(),
      measureValue: 330,
      quantity: 1
    },
    {
      category: 'cerveja',
      title: 'Heineken',
      unit: 'ml',
      id: uuid(),
      measureValue: 330,
      quantity: 1
    },
    {
      category: 'cerveja',
      title: 'Heineken',
      unit: 'ml',
      id: uuid(),
      measureValue: 330,
      quantity: 1
    },
    {
      category: 'cerveja',
      title: 'Heineken',
      unit: 'ml',
      id: uuid(),
      measureValue: 330,
      quantity: 1
    },
    {
      category: 'cerveja',
      title: 'Heineken',
      unit: 'ml',
      id: uuid(),
      measureValue: 330,
      quantity: 1
    },
  ];

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
      />
      <Content>
        <Title>{t('GENERAL_BEST_DEAL')}</Title>
        <Card
          productCategory="cerveja"
          productSize="300ml"
          title="Heineken"
          price={2.49}
          quantity="3"
          total={24.5}
        />
        <Button
          title={t('GENERAL_ADD_TO_LIST')}
          buttonStyle="green"
          style={{ marginTop: 16 }}
        />
        <BorderlessButton>
          <ButtonMinimal
            title={t('GENERAL_CLEAR_ALL')}
          />
        </BorderlessButton>
      </Content>

      <ListHeader>
        <HeaderLeftTitle>Opções comparadas</HeaderLeftTitle>
        <HeaderRightTitle>02</HeaderRightTitle>
      </ListHeader>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: getBottomSpace() }}
        renderItem={({ item }) => (
          <CalculatorListItem
            item={item}
          />
        )}
      />
    </Container>
  );
}
