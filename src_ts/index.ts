import { Translator as TranslatorClass } from "./Translator";
export { GoogleProvider } from "./providers/GoogleProvider";
export { BaseProvider } from "./providers/BaseProvider";
export { TranslatorClass as Translator };

export function createTranslator(options?: { to?: string }) {
  const translator = new TranslatorClass();
  if (options?.to) {
    return (text: string) => translator.translate(text, options.to as string);
  }
  return (text: string) => translator.translate(text);
}
