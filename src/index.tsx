import * as React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      type="button" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { TranslateProvider, useTranslator } from './context/TranslateContext';
export { useAutoTranslate } from './hooks/useAutoTranslate';
export { TranslateText } from './components/TranslateText';
export type { TranslateProviderProps } from './context/TranslateContext'; 