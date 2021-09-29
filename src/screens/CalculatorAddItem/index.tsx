import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Picker } from '@react-native-picker/picker';
import { FlatList } from 'react-native';

import { ItemDTO } from '../../database/dtos/ItemDTO';
import { t } from '../../global/locales';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Selector } from '../../components/Selector';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Badge } from '../../components/Badge';

import {
  Container,
  Title,
  Header,
  Row,
} from './styles';

interface Props {
  onCancel: () => void;
  onAddItem: (item: ItemDTO) => void;
}

export function CalculatorAddItem({ onCancel, onAddItem }: Props) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('ml');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('1');

  const suggestions = [
    { value: 250, unit: 'ml' },
    { value: 300, unit: 'ml' },
    { value: 330, unit: 'ml' },
    { value: 1, unit: 'L' },
  ];

  function handleAddItem() {
    onAddItem({
      id: uuid(),
      title,
      unit: 'ml',
      price: parseFloat(price.replace(',', '.')),
      measureValue: parseFloat(size),
      quantity: parseInt(quantity),
      relativePrice: (parseFloat(price.replace(',', '.')))/((parseFloat(size) * parseInt(quantity)) / 1000)
    });
  }

  return (
    <Container>
      <Header>
        <Title>{t('GENERAL_ADD_ITEM')}</Title>
        <ButtonIcon
          onPress={() => onCancel()}
          iconName="x"
        />
      </Header>

      <Row>
        <Input
          placeholder={t('GENERAL_ITEM')}
          label={t('GENERAL_ITEM')}
          value={title}
          onChangeText={setTitle}
          style={{ marginBottom: 10, flex: 2, marginRight: 5 }}
        />
        <Input
          label={t('GENERAL_SIZE')}
          value={size}
          onChangeText={setSize}
          keyboardType="numeric"
          style={{ marginBottom: 10, flex: 1, marginRight: 10 }}
        />
        <Selector label={unit}/>
      </Row>

      <Picker
        selectedValue={unit}
        onValueChange={(itemValue) =>
          setUnit(itemValue)
        }>
        <Picker.Item label="ml" value="ml" />
        <Picker.Item label="l" value="L" />
      </Picker>

      <FlatList
        data={suggestions}
        horizontal
        contentContainerStyle={{ paddingBottom: 10, marginBottom: 15 }}
        keyExtractor={(item) => `${item.value}${item.unit}`}
        renderItem={({ item }) => (
          <Badge
            selected={`${item.value}${item.unit}` === `${size}${unit}`}
            value={`${item.value}${item.unit}`}
            onPress={() => {
              setUnit(item.unit);
              setSize(item.value.toString());
            }}
            style={{ marginRight: 5 }}
          />
        )}
      />

      <Input
        placeholder={t('GENERAL_PRICE')}
        label={t('GENERAL_PRICE')}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ marginBottom: 10 }}
      />

      <Button
        buttonStyle='default'
        title={t('GENERAL_ADD')}
        onPress={handleAddItem}
      />
    </Container>
  );
}
