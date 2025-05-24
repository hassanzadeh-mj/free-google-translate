// ... existing code ...
export class TranslationService {
  adapter: any;
  languages: string[];
  defaultLang: string;

  constructor(adapter: any, languages: string[], defaultLang: string) {
    this.adapter = adapter;
    this.languages = languages;
    this.defaultLang = defaultLang;
  }

  async translate(text: string, from: string, to: string): Promise<string> {
    if (!text || from === to) return text;
    return await this.adapter.translate(text, from, to);
  }
}
// ... existing code ...