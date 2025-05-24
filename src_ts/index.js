import { TranslationService } from './core/translationService.js';
import { GoogleTranslateAdapter } from './adapters/googleTranslateAdapter.js';

const googleAdapter = new GoogleTranslateAdapter();
export const translator = (from, to) => {
  const service = new TranslationService(googleAdapter, [from, to], to);
  return {
    translate: async (text) => service.translate(text, from, to)
  };
};

// نسخه ساده‌تر با createTranslator
export function createTranslator({ provider = 'google', from = 'en', to = 'fa' } = {}) {
  let adapter;
  if (provider === 'google') {
    adapter = new GoogleTranslateAdapter();
  } else {
    throw new Error('Provider not supported');
  }
  const service = new TranslationService(adapter, [from, to], to);
  // تابع ساده برای ترجمه فقط با متن
  return async (text) => service.translate(text, from, to);
}