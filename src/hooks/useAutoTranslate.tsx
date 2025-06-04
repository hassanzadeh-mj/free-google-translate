import { useState, useEffect } from 'react';
import { useTranslator } from '../context/TranslateContext';

export const useAutoTranslate = (text: string): string => {
  const { translate, currentLanguage, defaultLanguage } = useTranslator();
  const [translatedText, setTranslatedText] = useState<string>(text);

  useEffect(() => {
    const translateText = async () => {
      if (currentLanguage === defaultLanguage) {
        setTranslatedText(text);
        return;
      }

      try {
        const result = await translate(text);
        setTranslatedText(result);
      } catch (error) {
        console.error('Translation error:', error);
        setTranslatedText(text);
      }
    };

    translateText();
  }, [text, currentLanguage, defaultLanguage, translate]);

  return translatedText;
}; 