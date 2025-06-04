import React from 'react';
import { useAutoTranslate } from '../hooks/useAutoTranslate';

interface TranslateTextProps {
  children: string | React.ReactNode;
}

export const TranslateText: React.FC<TranslateTextProps> = ({ children }) => {
  if (typeof children === 'string') {
    const translatedText = useAutoTranslate(children);
    return <>{translatedText}</>;
  }

  return <>{children}</>;
}; 