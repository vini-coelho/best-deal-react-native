import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Modal, StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Card } from '../../components/Card';
import { CalculatorListItem } from '../../components/CalculatorListItem';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Selector } from '../../components/Selector';
import { CalculatorAddItem } from '../CalculatorAddItem';

import { useCalculator } from '../../hooks/useCalculator';
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

export function Calculator() {
  const [modalVisible, setModalVisible] = useState(false);
  const { bestDeal, items } = useCalculator();
  const { colors } = useTheme();

  function handleOpenModal() {
    setModalVisible(true);
  }

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
          <CalculatorAddItem onClose={() => setModalVisible(false)} />
        </KeyboardAvoidingView>
      </Modal>

      <Header>
        <HeaderButtons>
          <BorderlessButton onPress={() => setModalVisible(true)}>
            <Feather
              name="chevron-left"
              size={RFValue(32)}
              color={colors.text_detail}
            />
          </BorderlessButton>
        </HeaderButtons>

        <Title>{t('GENERAL_CALCULATOR')}</Title>
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
