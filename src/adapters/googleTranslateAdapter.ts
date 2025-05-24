export class GoogleTranslateAdapter {
  async translate(text: string, sourceLang: string, targetLang: string): Promise<string> {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0]; // translated text
  }
}

import { TranslationService } from '../core/translationService.js';

const googleAdapter = new GoogleTranslateAdapter();
export const translator = (languages: string[], defaultLang: string) => new TranslationService(googleAdapter, languages, defaultLang);