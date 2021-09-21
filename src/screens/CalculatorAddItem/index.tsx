import React, { useState } from 'react';

import { t } from '../../global/locales';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
  Container,
  Title,
} from './styles';

export function CalculatorAddItem() {
  return (
    <Container>
      <Title>{t('COMPARE_SCREEN_TITLE')}</Title>
      <Input
        placeholder={t('GENERAL_ITEM')}
        iconName="local-offer"
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder={t('GENERAL_PRICE')}
        iconName="attach-money"
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder={t('GENERAL_AMOUNT')}
        iconName="confirmation-number"
        style={{ marginBottom: 10 }}
      />
      <Button
        buttonStyle='red'
        title={t('GENERAL_ADD')}
        onPress={() => alert('a')}
      />
    </Container>
  );
}
