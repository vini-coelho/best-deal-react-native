import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { v4 as uuid } from 'uuid';

import { t } from '../../global/locales';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
  Container,
  Title,
  Header,
  CloseButton,
} from './styles';
import { ItemDTO } from '../../database/dtos/ItemDTO';

interface Props {
  onCancel: () => void;
  onAddItem: (item: ItemDTO) => void;
}

export function CalculatorAddItem({ onCancel, onAddItem }: Props) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [volume, setVolume] = useState('');
  const [quantity, setQuantity] = useState('');
  const { colors } = useTheme();

  function handleAddItem() {
    onAddItem({
      id: uuid(),
      title,
      unit: 'ml',
      price: parseFloat(price.replace(',', '.')),
      measureValue: parseFloat(volume),
      quantity: parseInt(quantity),
      relativePrice: (parseFloat(price.replace(',', '.')))/((parseFloat(volume) * parseInt(quantity)) / 1000)
    });
  }

  return (
    <Container>
      <Header>
        <Title>{t('GENERAL_ADD_ITEM')}</Title>
        <CloseButton onPress={() => onCancel()}>
          <Feather
            name="x"
            color={colors.title}
            size={RFValue(25)}
          />
        </CloseButton>
      </Header>
      <Input
        placeholder={t('GENERAL_ITEM')}
        iconName="local-offer"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder={t('GENERAL_SIZE')}
        iconName="attach-money"
        value={volume}
        onChangeText={setVolume}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder={t('GENERAL_PRICE')}
        iconName="attach-money"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder={t('GENERAL_AMOUNT')}
        iconName="confirmation-number"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />
      <Button
        buttonStyle='red'
        title={t('GENERAL_ADD')}
        onPress={handleAddItem}
      />
    </Container>
  );
}
