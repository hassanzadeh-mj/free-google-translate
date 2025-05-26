import React from 'react';

export interface TranslatorProviderProps {
  children: React.ReactNode;
  defaultLanguage: string;
  targetLanguage?: string;
}

export interface TranslatorContextType {
  currentLanguage: string;
  defaultLanguage: string;
  setLanguage: (lang: string) => void;
  isTranslating: boolean;
}

export interface UseTranslateProps {
  text: string;
  from?: string;
  to?: string;
}

export interface TranslateResponse {
  text: string;
  from: {
    language: {
      iso: string;
    };
  };
} 