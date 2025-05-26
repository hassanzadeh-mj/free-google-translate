import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { TranslatorContextType, TranslatorProviderProps } from '../types';
import { translatorService } from '../services/translator';

const TranslatorContext = createContext<TranslatorContextType | null>(null);

const LANGUAGE_KEY = 'preferred_language';

export const useTranslator = () => {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error('useTranslator must be used within a TranslatorProvider');
  }
  return context;
};

export const useAutoTranslate = (text: string) => {
  const { currentLanguage, defaultLanguage, isTranslating } = useTranslator();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    async function translateText() {
      if (currentLanguage !== defaultLanguage) {
        try {
          const result = await translatorService.translate(text, defaultLanguage, currentLanguage);
          setTranslatedText(result);
        } catch (error) {
          console.error('Translation error:', error);
          setTranslatedText(text);
        }
      } else {
        setTranslatedText(text);
      }
    }
    translateText();
  }, [text, currentLanguage, defaultLanguage]);

  return { translatedText, isTranslating };
};

export const TranslatorProvider: React.FC<TranslatorProviderProps> = ({
  children,
  defaultLanguage,
  targetLanguage,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return saved || targetLanguage || defaultLanguage;
  });
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  }, [currentLanguage]);

  const setLanguage = useCallback((lang: string) => {
    setIsTranslating(true);
    setCurrentLanguage(lang);
    setTimeout(() => setIsTranslating(false), 100);
  }, []);

  const value = {
    currentLanguage,
    defaultLanguage,
    setLanguage,
    isTranslating
  };

  return (
    <TranslatorContext.Provider value={value}>
      {children}
    </TranslatorContext.Provider>
  );
}; 