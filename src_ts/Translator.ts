import { BaseProvider } from './providers/BaseProvider';
import { GoogleProvider } from './providers/GoogleProvider';

export class Translator {
  private provider: BaseProvider;
  private defaultLanguage: string;

  constructor(provider: BaseProvider = new GoogleProvider()) {
    this.provider = provider;
    // Get system locale and extract language code
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    this.defaultLanguage = locale.split('-')[0];
    
    if (!this.provider.isLanguageSupported(this.defaultLanguage)) {
      this.defaultLanguage = 'en';
    }
  }

  async translate(text: string, to?: string, from?: string): Promise<string> {
    const targetLang = to || this.defaultLanguage;
    const sourceLang = from || await this.provider.detect(text);

    if (!this.provider.isLanguageSupported(targetLang)) {
      throw new Error(`Language ${targetLang} is not supported`);
    }

    return this.provider.translate(text, sourceLang, targetLang);
  }

  getProvider(): BaseProvider {
    return this.provider;
  }

  setProvider(provider: BaseProvider): void {
    this.provider = provider;
  }

  getSupportedLanguages(): string[] {
    return this.provider.getSupportedLanguages();
  }

  getDefaultLanguage(): string {
    return this.defaultLanguage;
  }
} 