export abstract class BaseProvider {
  abstract name: string;

  abstract translate(text: string, from: string, to: string): Promise<string>;

  abstract detect(text: string): Promise<string>;

  abstract isLanguageSupported(lang: string): boolean;

  abstract getSupportedLanguages(): string[];
}
