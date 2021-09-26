import * as Localization from 'expo-localization';
import 'intl';
import 'intl/locale-data/jsonp/en-US'
import 'intl/locale-data/jsonp/pt-BR'

export function formatCurrency(value: number) {
  return new Intl.NumberFormat(Localization.locale, {
    style: 'currency',
    currency: Localization.currency!
  }).format(value);
}
