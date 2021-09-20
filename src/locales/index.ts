import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { pt } from './pt';

i18n.translations = {
  pt,
  en: { WELCOME: 'Hello' },
};

i18n.locale = Localization.locale;
i18n.defaultLocale = 'pt';
i18n.fallbacks = true;

export function t(str: keyof typeof pt) {
  return i18n.t(str);
}
