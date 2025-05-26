import React from 'react';
import { useTranslator, useAutoTranslate } from '../context/TranslatorContext';

interface TranslatableTextProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TranslatableText: React.FC<TranslatableTextProps> = ({
  children,
  as: Component = 'span',
  className = '',
}) => {
  const { currentLanguage, defaultLanguage } = useTranslator();
  const { translatedText, isTranslating } = useAutoTranslate(children);

  if (currentLanguage === defaultLanguage) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={className}>
      {isTranslating ? '...' : translatedText}
    </Component>
  );
};

export { TranslatableText }; 