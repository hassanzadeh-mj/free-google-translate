import { createTranslator } from '../dist/index.js';

const translateEnToFa = createTranslator({ from: 'en', to: 'fa' });

(async () => {
  const sentences = [
    'hello',
    'How are you?',
    'Good morning!',
    'I love programming.',
    'This package is awesome!',
    'Can you help me with my homework?'
  ];

  for (const sentence of sentences) {
    const result = await translateEnToFa(sentence);
    console.log(`en → fa: "${sentence}" → "${result}"`);
  }
})(); 