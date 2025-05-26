import { Translator, GoogleProvider } from '../src_ts';

describe('Translator', () => {
  let translator: Translator;

  beforeEach(() => {
    translator = new Translator();
  });

  test('should use system locale as default language', () => {
    const defaultLang = translator.getDefaultLanguage();
    expect(typeof defaultLang).toBe('string');
    expect(defaultLang.length).toBe(2);
  });

  test('should translate text using default provider', async () => {
    const result = await translator.translate('Hello', 'fa');
    expect(result).toBe('سلام');
  }, 10000);

  test('should detect source language', async () => {
    const result = await translator.translate('سلام', 'en');
    const validTranslations = ['hello', 'hi'];
    expect(validTranslations).toContain(result.toLowerCase());
  }, 10000);

  test('should return supported languages', () => {
    const languages = translator.getSupportedLanguages();
    expect(Array.isArray(languages)).toBe(true);
    expect(languages.length).toBeGreaterThan(0);
  });
}); 