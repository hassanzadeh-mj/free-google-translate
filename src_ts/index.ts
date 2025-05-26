import { Translator as TranslatorClass } from './Translator';
import { Translator } from './Translator';

export { Translator } from './Translator';
export { BaseProvider } from './providers/BaseProvider';
export { GoogleProvider } from './providers/GoogleProvider';

// Helper function for quick usage
export function createTranslator(options: { provider?: string; to?: string; from?: string } = {}) {
  const translator = new Translator();
  
  return async (text: string) => {
    return translator.translate(text, options.to, options.from);
  };
} 