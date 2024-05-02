// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import ukTranslations from './locales/uk.json';
import frTranslations from './locales/fr.json';
import gerTranslations from './locales/ger.json';
import dutchTranslations from './locales/nth.json';
import spanishTranslations from './locales/spanish.json';
import catalaTranslations from './locales/catala.json';
import italyTranslations from './locales/italy.json';
import portugalTranslations from './locales/portugal.json';
import norwayTranslations from './locales/norway.json';
import finlandTranslations from './locales/finland.json';
import swedenTranslations from './locales/sweden.json';
import czechTranslations from './locales/czech.json';
import hungaryTranslations from './locales/hungary.json';
import romaniaTranslations from './locales/romania.json';
import japanTranslations from './locales/japan.json';
import chinesesimplifiedTranslations from './locales/chinesesimplified.json';
import chinesetraditionalTranslations from './locales/chinesetraditional.json';
import polishTranslations from './locales/polish.json';
import greekTranslations from './locales/greek.json';
import russianTranslations from './locales/russian.json';
import turkishTranslations from './locales/turkish.json';
import bulgariaTranslations from './locales/bulgaria.json';
import arabicTranslations from './locales/arabic.json';
import koreanTranslations from './locales/korean.json';
import hebrewTranslations from './locales/hebrew.json';
import latvianTranslations from './locales/latvian.json';
import ukranianTranslations from './locales/ukranian.json';
import hindiTranslations from './locales/hindi.json';
import bahasaTranslations from './locales/bahasa.json';
import thaiTranslations from './locales/thai.json';
import estoniaTranslations from './locales/estonia.json';
import croatianTranslations from './locales/croatian.json';
import lithuanianTranslations from './locales/lithuanian.json';
import slovakTranslations from './locales/slovak.json';
import serbianTranslations from './locales/serbian.json';
import sloveneTranslations from './locales/slovene.json';
import vietnameseTranslations from './locales/vietnamese.json';
import filipinoTranslations from './locales/filipino.json';
import denmarkTranslations from './locales/denmark.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      uk: { translation: ukTranslations },
      fr: { translation: frTranslations },
      ger: { translation: gerTranslations },
      nth: { translation: dutchTranslations },
      spanish: { translation: spanishTranslations },
      catala: { translation: catalaTranslations },
      italy: { translation: italyTranslations },
      portugal: { translation: portugalTranslations },
      norway: { translation: norwayTranslations },
      finland: { translation: finlandTranslations },
      sweden : { translation: swedenTranslations },
      denmark : { translation: denmarkTranslations },
      czech:{translation : czechTranslations },
     hungary:{translation : hungaryTranslations },
    romania:{translation : romaniaTranslations },
    japan:{translation : japanTranslations },
    chinesesimplified:{translation : chinesesimplifiedTranslations },
    chinesetraditional:{translation : chinesetraditionalTranslations },
    polish:{translation : polishTranslations },
    greek:{translation : greekTranslations },
    russian:{translation : russianTranslations },
    turkish:{translation : turkishTranslations },
    bulgaria:{translation : bulgariaTranslations },
    arabic:{translation : arabicTranslations },
    korean:{translation : koreanTranslations },
    hebrew:{translation : hebrewTranslations },
    latvian:{translation : latvianTranslations },
    ukranian:{translation : ukranianTranslations },
    hindi:{translation : hindiTranslations },
    bahasa:{translation : bahasaTranslations },
    thai:{translation : thaiTranslations }, 
    estonia:{translation : estoniaTranslations },
    croatian:{translation : croatianTranslations },
    lithuanian:{translation : lithuanianTranslations },
    slovak:{translation : slovakTranslations},
    serbian:{translation : serbianTranslations },
    slovene:{translation : sloveneTranslations },
    vietnamese:{translation : vietnameseTranslations },
    filipino:{translation : filipinoTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
