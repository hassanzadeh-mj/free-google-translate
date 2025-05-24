const { createTranslator } = require('../dist/index.js');

(async () => {
  const translateEnToFa = createTranslator({ from: 'en', to: 'fa' });
  const result = await translateEnToFa('hello');
  console.log('Test en→fa:', result === 'سلام' ? 'PASS' : 'FAIL', result);

  const translateFaToEn = createTranslator({ from: 'fa', to: 'en' });
  const result2 = await translateFaToEn('سلام');
  console.log('fa → en:', result2); // باید ترجمه فارسی به انگلیسی را چاپ کند

  // حالت بدون تغییر زبان
  const translateFaToFa = createTranslator({ from: 'fa', to: 'fa' });
  const result3 = await translateFaToFa('سلام');
  console.log('fa → fa:', result3); // باید همان متن را چاپ کند (بدون ترجمه)
})();