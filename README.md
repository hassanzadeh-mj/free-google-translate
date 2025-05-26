# react-google-translate-mj

A React package for automatic website translation using Google Translate. This package makes it easy to add multi-language support to your React applications with minimal configuration.

## Features

- 🌐 Easy integration with React applications
- 🔄 Automatic translation using Google Translate
- 📍 URL-based language routing
- 🎯 Component-based translation
- 💾 Language persistence
- ⚡ Lightweight and performant

## Installation

```bash
npm install react-google-translate-mj
# or
yarn add react-google-translate-mj
```

## Basic Usage

```jsx
import { TranslatorProvider, TranslatableText } from 'react-google-translate-mj';

function App() {
  return (
    <TranslatorProvider defaultLanguage="en">
      <h1>
        <TranslatableText>Hello World!</TranslatableText>
      </h1>
    </TranslatorProvider>
  );
}
```

## Advanced Usage with React Router

```jsx
import { TranslatorProvider, TranslatableText, useTranslator } from 'react-google-translate-mj';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Layout() {
  const { setLanguage, currentLanguage } = useTranslator();
  const { lang } = useParams();

  // Sync URL language with translator
  useEffect(() => {
    if (lang && lang !== currentLanguage) {
      setLanguage(lang);
    }
  }, [lang, currentLanguage]);

  return (
    <div>
      <nav>
        <Link to={`/${currentLanguage}/home`}>
          <TranslatableText>Home</TranslatableText>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TranslatorProvider defaultLanguage="en">
        <Routes>
          <Route path="/:lang/*" element={<Layout />}>
            {/* Your routes here */}
          </Route>
        </Routes>
      </TranslatorProvider>
    </BrowserRouter>
  );
}
```

## Components

### TranslatorProvider

The root component that provides translation context.

```jsx
<TranslatorProvider 
  defaultLanguage="en"     // Required: Default language code
  targetLanguage="fr"      // Optional: Initial target language
>
  {/* Your app content */}
</TranslatorProvider>
```

### TranslatableText

Wrap any text content that needs translation.

```jsx
<TranslatableText>
  This text will be automatically translated
</TranslatableText>
```

### useTranslator Hook

Access translation functions and state in your components.

```jsx
const { 
  currentLanguage,    // Current active language
  setLanguage,        // Function to change language
  defaultLanguage,    // Default language set in provider
  isTranslating      // Translation status
} = useTranslator();
```

## API Reference

### TranslatorProvider Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| defaultLanguage | string | Yes | The default language code (e.g., 'en') |
| targetLanguage | string | No | Initial target language for translation |
| children | ReactNode | Yes | Child components |

### useTranslator Hook Returns

| Property | Type | Description |
|----------|------|-------------|
| currentLanguage | string | Current active language code |
| defaultLanguage | string | Default language code from provider |
| setLanguage | (lang: string) => void | Function to change current language |
| isTranslating | boolean | Whether translation is in progress |

## Supported Languages

The package supports all languages available in Google Translate. Common language codes:

- English: 'en'
- Persian: 'fa'
- Arabic: 'ar'
- French: 'fr'
- German: 'de'
- Spanish: 'es'
- Chinese: 'zh'
- And many more...

## Example Projects

Check out our [test-translator](https://github.com/hassanzadeh-mj/free-google-translate/tree/main/test-translator) demo for a complete example including:

- URL-based language routing
- Multiple page navigation
- Language selector implementation
- Persistent translations across routes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

MJ Hassanzadeh
