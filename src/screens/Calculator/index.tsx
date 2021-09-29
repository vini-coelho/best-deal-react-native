import React, { useState, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Modal, StatusBar, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Card } from '../../components/Card';
import { CalculatorListItem } from '../../components/CalculatorListItem';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CalculatorAddItem } from '../CalculatorAddItem';

import { ItemDTO } from '../../database/dtos/ItemDTO';
import { t } from '../../global/locales';

import {
  Container,
  Header,
  HeaderButtons,
  Content,
  Title,
  ListHeader,
  HeaderLeftTitle,
} from './styles';
import { Selector } from '../../components/Selector';

export function Calculator() {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState<ItemDTO[]>([] as ItemDTO[]);
  const [bestDeal, setBestDeal] = useState<ItemDTO>({} as ItemDTO);
  const { colors } = useTheme();

  function handleOpenModal() {
    setModalVisible(true);
  }

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
      const minValue = Math.min(prev.relativePrice, current.relativePrice);
      return prev.relativePrice === minValue ? prev : current;
    });

    setBestDeal(bestDealItem);
  }

  useEffect(() => {
    compareItems();
  }, [items]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}
        >
          <CalculatorAddItem
            onCancel={() => setModalVisible(false)}
            onAddItem={handleAddItem}
          />
        </KeyboardAvoidingView>
      </Modal>

      <Header>
        {/* <HeaderButtons>
          <BorderlessButton onPress={() => setModalVisible(true)}>
            <Feather
              name="chevron-left"
              size={RFValue(32)}
              color={colors.text_detail}
            />
          </BorderlessButton>
        </HeaderButtons> */}

        <Title>{t('GENERAL_CALCULATOR')}</Title>
        { /* TODO: move this string to locales */}
        <Selector label="Bebidas (ml/l)" />
      </Header>

      <Content>
        <Card
          item={bestDeal}
        />
      </Content>

      <ListHeader>
        <HeaderLeftTitle>{t('GENERAL_COMPARED_OPTIONS')}</HeaderLeftTitle>
        <ButtonIcon
          onPress={handleOpenModal}
          iconName="plus"
        />
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
