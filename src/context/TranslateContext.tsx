import React, { createContext, useContext, useState, useEffect } from 'react';
import { detectOS } from '../utils/detectOS';
import { translateText } from '../utils/translateText';

interface TranslateContextType {
  currentLanguage: string;
  defaultLanguage: string;
  setLanguage: (lang: string) => void;
  translate: (text: string) => Promise<string>;
  isTranslating: boolean;
}

export interface TranslateProviderProps {
  children: React.ReactNode;
  defaultLanguage?: string;
  targetLanguage?: string;
}

const TranslateContext = createContext<TranslateContextType | undefined>(undefined);

export const TranslateProvider: React.FC<TranslateProviderProps> = ({
  children,
  defaultLanguage = 'en',
  targetLanguage,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const detectLanguage = async () => {
      if (!targetLanguage) {
        const osLanguage = detectOS();
        if (osLanguage && osLanguage !== defaultLanguage) {
          setCurrentLanguage(osLanguage);
        }
      } else {
        setCurrentLanguage(targetLanguage);
      }
    };

    detectLanguage();
  }, [defaultLanguage, targetLanguage]);

  const translate = async (text: string): Promise<string> => {
    if (currentLanguage === defaultLanguage) {
      return text;
    }

    setIsTranslating(true);
    try {
      const translated = await translateText(text, defaultLanguage, currentLanguage);
      setIsTranslating(false);
      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      setIsTranslating(false);
      return text;
    }
  };

  const value = {
    currentLanguage,
    defaultLanguage,
    setLanguage: setCurrentLanguage,
    translate,
    isTranslating,
  };

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslator = () => {
  const context = useContext(TranslateContext);
  if (context === undefined) {
    throw new Error('useTranslator must be used within a TranslateProvider');
  }
  return context;
}; 