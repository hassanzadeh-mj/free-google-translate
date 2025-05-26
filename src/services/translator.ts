class TranslatorService {
  private baseUrl = 'https://translate.googleapis.com/translate_a/single';

  async translate(text: string, from: string = 'auto', to: string = 'en'): Promise<string> {
    try {
      const url = new URL(this.baseUrl);
      url.searchParams.append('client', 'gtx');
      url.searchParams.append('sl', from);
      url.searchParams.append('tl', to);
      url.searchParams.append('dt', 't');
      url.searchParams.append('q', text);

      const response = await fetch(url.toString());
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      // Google Translate API returns an array of arrays where the first element
      // of the first array contains the translation
      return data[0][0][0];
    } catch (error) {
      console.error('Translation error:', error);
      throw error;
    }
  }

  async detectLanguage(text: string): Promise<string> {
    try {
      const translation = await this.translate(text);
      return translation;
    } catch (error) {
      console.error('Language detection error:', error);
      throw error;
    }
  }
}

export const translatorService = new TranslatorService(); 