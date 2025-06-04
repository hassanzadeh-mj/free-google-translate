# React Google Translate MJ

A lightweight React package for automatic website translation using Google Translate API, with no API key required. This package makes it easy to add multi-language support to your React applications with minimal configuration.

![npm](https://img.shields.io/npm/v/react-google-translate-mj)
![license](https://img.shields.io/npm/l/react-google-translate-mj)

## Features

- 🌐 Free text translation between any languages
- 🔑 No API key required
- ⚡ Lightweight and performant
- 🎯 Easy-to-use components
- 🔄 Real-time language switching
- 📱 Automatic OS language detection
- 📝 Support for HTML and rich text
- 🌍 RTL languages support
- ⚛️ Built for React 18+

## Installation

```bash
# Using npm
npm install react-google-translate-mj

# Using yarn
yarn add react-google-translate-mj
```

## Quick Start

```jsx
import { TranslateProvider, TranslateText } from 'react-google-translate-mj';

function App() {
  return (
    <TranslateProvider defaultLanguage="en">
      <h1>
        <TranslateText>Hello World!</TranslateText>
      </h1>
    </TranslateProvider>
  );
}
```

## Components and Hooks

### TranslateProvider

The root component that provides translation context.

```jsx
<TranslateProvider 
  defaultLanguage="en"     // Required: Default language code
  targetLanguage="fr"      // Optional: Initial target language
>
  {/* Your app content */}
</TranslateProvider>
```

### TranslateText

Component to wrap any text that needs translation.

```jsx
<TranslateText>
  This text will be automatically translated
</TranslateText>

// With HTML content
<TranslateText>
  <p>This is a <strong>formatted</strong> text with <a href="#">link</a></p>
</TranslateText>
```

### useTranslator Hook

Access translation functions and state in your components.

```jsx
import { useTranslator } from 'react-google-translate-mj';

function LanguageSelector() {
  const { 
    currentLanguage,    // Current active language
    setLanguage,        // Function to change language
    defaultLanguage,    // Default language set in provider
    isTranslating      // Translation status
  } = useTranslator();

  return (
    <select 
      value={currentLanguage} 
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
    </select>
  );
}
```

### useAutoTranslate Hook

Hook for manual text translation.

```jsx
import { useAutoTranslate } from 'react-google-translate-mj';

function TranslatedText({ text }) {
  const translatedText = useAutoTranslate(text);
  return <p>{translatedText}</p>;
}
```

## Advanced Usage

### With React Router

```jsx
import { TranslateProvider, TranslateText, useTranslator } from 'react-google-translate-mj';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Layout() {
  const { setLanguage, currentLanguage } = useTranslator();

  return (
    <div>
      <nav>
        <Link to={`/${currentLanguage}/home`}>
          <TranslateText>Home</TranslateText>
        </Link>
      </nav>
      <select onChange={(e) => setLanguage(e.target.value)} value={currentLanguage}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TranslateProvider defaultLanguage="en">
        <Routes>
          <Route path="/:lang/*" element={<Layout />}>
            {/* Your routes */}
          </Route>
        </Routes>
      </TranslateProvider>
    </BrowserRouter>
  );
}
```

### RTL Language Support

The package automatically handles RTL languages. Just wrap your content with TranslateText:

```jsx
function Content() {
  const { currentLanguage } = useTranslator();
  
  return (
    <div dir={currentLanguage === 'ar' || currentLanguage === 'fa' ? 'rtl' : 'ltr'}>
      <TranslateText>
        This text will be properly aligned based on the language
      </TranslateText>
    </div>
  );
}
```

## Supported Languages

The package supports all languages available in Google Translate. Common language codes:

- English: 'en'
- French: 'fr'
- Spanish: 'es'
- German: 'de'
- Italian: 'it'
- Portuguese: 'pt'
- Russian: 'ru'
- Chinese: 'zh'
- Japanese: 'ja'
- Korean: 'ko'
- Arabic: 'ar'
- Persian: 'fa'

## Performance Optimization

The package includes built-in optimizations:
- Caches translations to minimize API calls
- Only translates text when language changes
- Batches translation requests
- Minimal re-renders using React.memo

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11 (with appropriate polyfills)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [MJ Hassanzadeh](https://github.com/hassanzadeh-mj)

## Support

If you find this package helpful, please consider:
- Starring the [GitHub repository](https://github.com/hassanzadeh-mj/free-google-translate)
- Creating an issue for any bugs or feature requests
- Contributing to the codebase 