import { BaseProvider } from './BaseProvider';

export class GoogleProvider extends BaseProvider {
  name = 'google';
  private supportedLanguages = ['en', 'fa', 'ar', 'fr', 'de', 'es', 'tr', 'ru', 'ja', 'ko', 'zh'];

  async translate(text: string, from: string, to: string): Promise<string> {
    if (!text || from === to) return text;
    
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0];
  }

  async detect(text: string): Promise<string> {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[2];
  }

  isLanguageSupported(lang: string): boolean {
    return this.supportedLanguages.includes(lang);
  }

  getSupportedLanguages(): string[] {
    return [...this.supportedLanguages];
  }
} 