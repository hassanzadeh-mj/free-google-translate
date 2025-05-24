import { createTranslator } from '../src/index.js';

(async () => {
  const translateEnToFa = createTranslator({ from: 'en', to: 'fa' });
  const result = await translateEnToFa('hello');
  console.log('Test en→fa:', result === 'سلام' ? 'PASS' : 'FAIL', result);
})(); 