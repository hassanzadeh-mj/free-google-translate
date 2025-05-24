// ... existing code ...
export class TranslationService {
  constructor(adapter, languages, defaultLang) {
    this.adapter = adapter;
    this.languages = languages;
    this.defaultLang = defaultLang;
  }

  async translate(text, from, to) {
    if (!text || from === to) return text;
    return await this.adapter.translate(text, from, to);
  }
}
// ... existing code ...