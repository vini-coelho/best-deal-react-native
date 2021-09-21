import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { pt } from './pt';
import { en } from './en';

i18n.translations = {
  pt,
  en,
};

i18n.locale = Localization.locale;
i18n.defaultLocale = 'en';
i18n.fallbacks = true;

console.log(Localization.locale)

export function t(str: keyof typeof pt) {
  return i18n.t(str);
}
