export class GoogleTranslateAdapter {
  async translate(text, sourceLang, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0]; // متن ترجمه‌شده
  }
}

import { TranslationService } from '../core/translationService.js';

const googleAdapter = new GoogleTranslateAdapter();
export const translator = (languages, defaultLang) => new TranslationService(googleAdapter, languages, defaultLang);