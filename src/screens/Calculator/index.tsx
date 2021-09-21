import React from 'react';
import { StatusBar } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { ButtonMinimal } from '../../components/ButtonMinimal';

import { Card } from '../../components/Card';
import { t } from '../../global/locales';

import { Container } from './styles';

export function Calculator() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
      />
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
    </Container>
  );
}
