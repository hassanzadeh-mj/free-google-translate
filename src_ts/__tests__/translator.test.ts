import { Translator } from "../Translator";
import { BaseProvider } from "../providers/BaseProvider";
import { GoogleProvider } from "../providers/GoogleProvider";

describe("Translator", () => {
  it("should create an instance", () => {
    const translator = new Translator();
    expect(translator).toBeInstanceOf(Translator);
  });

  it("should use GoogleProvider by default", () => {
    const translator = new Translator();
    expect(translator.getProvider()).toBeInstanceOf(GoogleProvider);
  });

  it("should allow setting a custom provider", () => {
    class CustomProvider extends BaseProvider {
      name = 'custom';
      
      async translate(text: string, from: string, to: string): Promise<string> {
        return `${text} translated from ${from} to ${to}`;
      }
      async detect(): Promise<string> {
        return "en";
      }
      getSupportedLanguages(): string[] {
        return ["en", "es"];
      }
      isLanguageSupported(lang: string): boolean {
        return ["en", "es"].includes(lang);
      }
    }

    const translator = new Translator();
    const customProvider = new CustomProvider();
    translator.setProvider(customProvider);
    expect(translator.getProvider()).toBe(customProvider);
  });

  it("should return supported languages", () => {
    const translator = new Translator();
    const languages = translator.getSupportedLanguages();
    expect(Array.isArray(languages)).toBe(true);
    expect(languages.length).toBeGreaterThan(0);
  });

  it("should have a default language", () => {
    const translator = new Translator();
    const defaultLang = translator.getDefaultLanguage();
    expect(typeof defaultLang).toBe("string");
    expect(defaultLang.length).toBeGreaterThan(0);
  });

  it("should translate text using the provider", async () => {
    class MockProvider extends BaseProvider {
      async translate(text: string, from: string, to: string): Promise<string> {
        return `${text} translated from ${from} to ${to}`;
      }
      async detect(): Promise<string> {
        return "en";
      }
      getSupportedLanguages(): string[] {
        return ["en", "es"];
      }
      isLanguageSupported(lang: string): boolean {
        return ["en", "es"].includes(lang);
      }
    }

    const translator = new Translator(new MockProvider());
    const result = await translator.translate("Hello", "es");
    expect(result).toBe("Hello translated from en to es");
  });

  it("should throw error for unsupported language", async () => {
    const translator = new Translator();
    await expect(translator.translate("Hello", "xx")).rejects.toThrow(
      "Language xx is not supported",
    );
  });
});
