const GOOGLE_TRANSLATE_BASE_URL = 'https://translate.googleapis.com/translate_a/single';

interface TranslateResponse {
  data: {
    translations: Array<{
      translatedText: string;
    }>;
  };
}

export const translateText = async (
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<string> => {
  try {
    const params = new URLSearchParams({
      client: 'gtx',
      sl: sourceLang,
      tl: targetLang,
      dt: 't',
      q: text,
    });

    const response = await fetch(`${GOOGLE_TRANSLATE_BASE_URL}?${params.toString()}`);
    const data = await response.json();

    // Google Translate API returns a nested array where the first element
    // contains the translations
    if (Array.isArray(data) && data[0] && Array.isArray(data[0])) {
      return data[0]
        .filter(item => item && item[0])
        .map(item => item[0])
        .join('');
    }

    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}; 