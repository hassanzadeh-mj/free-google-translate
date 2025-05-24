# Chandzabengi

A free translation package using the unofficial Google Translate API.

## Installation

```bash
npm install
```

## Features
- Free text translation between any two languages (no API key required)
- Very simple and user-friendly usage
- Only sends a translation request when actually needed

## Usage

### Quick usage with a simple function
```js
import { createTranslator } from './src';

const translate = createTranslator({ from: 'en', to: 'fa' });

const result = await translate('hello');
console.log(result); // سلام
```

### Change source and target language
```js
const translateFaToEn = createTranslator({ from: 'fa', to: 'en' });
const result = await translateFaToEn('سلام');
console.log(result); // Hi
```

### If source and target language are the same
```js
const translateFaToFa = createTranslator({ from: 'fa', to: 'fa' });
const result = await translateFaToFa('سلام');
console.log(result); // سلام (no request sent)
```

### Advanced usage (modular structure)
```js
import { translator } from './src';

const t = translator('en', 'fa');
const result = await t.translate('hello');
console.log(result); // سلام
```

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
 