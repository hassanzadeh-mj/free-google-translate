# Free Google Translate

A free and powerful translation package that uses the unofficial Google Translate API. It automatically detects your system language and supports multiple translation providers.

## Features

- 🆓 Free to use - no API key required
- 🌐 Uses Google Translate API
- 🔍 Automatic language detection
- 💻 System language detection
- 🔌 Provider-based architecture
- 📦 TypeScript support
- ⚡ Simple and fast

## Installation

```bash
npm install react-google-translate-mj
```

## Usage

### Simple Usage

```typescript
import { createTranslator } from 'react-google-translate-mj';

// Creates a translator using your system's language as default
const translate = createTranslator();

// Translate to your system's language
const result1 = await translate('Hello');

// Translate to a specific language
const translate2 = createTranslator({ to: 'fa' });
const result2 = await translate2('Hello'); // Returns: سلام
```

### Advanced Usage

```typescript
import { Translator, GoogleProvider } from 'react-google-translate-mj';

// Create a translator instance
const translator = new Translator();

// Translate with language detection
const result1 = await translator.translate('Hello', 'fa');
console.log(result1); // سلام

// Translate with explicit source language
const result2 = await translator.translate('سلام', 'en', 'fa');
console.log(result2); // Hello

// Get supported languages
const languages = translator.getSupportedLanguages();
console.log(languages); // ['en', 'fa', 'ar', ...]

// Get system default language
const defaultLang = translator.getDefaultLanguage();
console.log(defaultLang); // 'en' or your system language
```

### Custom Provider

You can create your own translation provider by implementing the `BaseProvider` interface:

```typescript
import { BaseProvider } from 'react-google-translate-mj';

class MyCustomProvider extends BaseProvider {
  name = 'custom';
  
  async translate(text: string, from: string, to: string): Promise<string> {
    // Your translation implementation
  }
  
  async detect(text: string): Promise<string> {
    // Your language detection implementation
  }
  
  isLanguageSupported(lang: string): boolean {
    // Your language support check
  }
  
  getSupportedLanguages(): string[] {
    // Return supported languages
  }
}

// Use your custom provider
const translator = new Translator(new MyCustomProvider());
```

## Supported Languages

The default Google provider supports many languages including:
- English (en)
- Persian (fa)
- Arabic (ar)
- French (fr)
- German (de)
- Spanish (es)
- Turkish (tr)
- Russian (ru)
- Japanese (ja)
- Korean (ko)
- Chinese (zh)
And many more...

## Notes

- This package uses an unofficial Google Translate API
- Suitable for personal and testing projects
- For production or commercial use, consider using official translation APIs

## License

MIT

## Author

Moji (mj.hassanzadeh1995@gmail.com)

## Project Structure
```
chandzabengi/
├── package.json
├── test.js
├── src/
│   ├── index.js
│   ├── adapters/
│   │   └── googleTranslateAdapter.js
│   └── core/
│       └── translationService.js
```

## Important Notes
- This package uses an **unofficial** Google Translate endpoint and may be limited by Google in the future.
- Suitable for personal and testing projects.
- Not recommended for commercial or sensitive projects.
 