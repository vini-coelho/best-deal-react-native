import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { v4 as uuid } from 'uuid';

import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { ButtonMinimal } from '../../components/ButtonMinimal';
import { CalculatorListItem } from '../../components/CalculatorListItem';
import { CalculatorAddItem } from '../CalculatorAddItem';

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
import { AnimatedModal } from '../../components/AnimatedModal';

export function Calculator() {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<ItemDTO[]>([] as ItemDTO[]);
  const [bestDeal, setBestDeal] = useState<ItemDTO>({} as ItemDTO);

  function handleAddItem(item: ItemDTO) {
    setItems(prev => [...prev, item]);
    setModalVisible(false);
  }

  function compareItems() {
    if(items.length === 1) {
      return setBestDeal(items[0]);
    }

    if(items.length === 0) return;

    const bestDealItem = items.reduce((prev, current) => {
        const minValue = Math.min(prev.relativePrice!, current.relativePrice!);
        return prev.relativePrice === minValue ? prev : current;
    });

    setBestDeal(bestDealItem);
  }

  useEffect(() => {
    compareItems()
  }, [items]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
      />
      <AnimatedModal visible={modalVisible}>
        <CalculatorAddItem
          onCancel={() => setModalVisible(false)}
          onAddItem={handleAddItem}
        />
      </AnimatedModal>
      <Content>
        <Title>{t('GENERAL_BEST_DEAL')}</Title>
        <Card
          item={bestDeal}
        />
        {/* <Button
          title={t('GENERAL_ADD_TO_LIST')}
          buttonStyle="green"
          style={{ marginTop: 16 }}
        />
        <BorderlessButton>
          <ButtonMinimal
            title={t('GENERAL_CLEAR_ALL')}
          />
        </BorderlessButton> */}
      </Content>

      <ListHeader>
        <HeaderLeftTitle>Opções comparadas</HeaderLeftTitle>
        <RectButton onPress={() => setModalVisible(true)}>
          <HeaderRightTitle>02</HeaderRightTitle>
        </RectButton>

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
