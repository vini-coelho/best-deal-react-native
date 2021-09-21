import * as Localization from 'expo-localization';

export function formatCurrency(value: number) {
  return new Intl.NumberFormat(Localization.locale, {
    style: 'currency',
    currency: Localization.currency!
  }).format(value);
}
