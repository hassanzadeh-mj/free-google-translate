import { createTranslator } from "./src/index.js";

(async () => {
  const translateEnToFa = createTranslator({ from: 'en', to: 'fa' });
  const result1 = await translateEnToFa('hello');
  console.log('en → fa:', result1); // باید ترجمه انگلیسی به فارسی را چاپ کند

  const translateFaToEn = createTranslator({ from: 'fa', to: 'en' });
  const result2 = await translateFaToEn('سلام');
  console.log('fa → en:', result2); // باید ترجمه فارسی به انگلیسی را چاپ کند

  // حالت بدون تغییر زبان
  const translateFaToFa = createTranslator({ from: 'fa', to: 'fa' });
  const result3 = await translateFaToFa('سلام');
  console.log('fa → fa:', result3); // باید همان متن را چاپ کند (بدون ترجمه)
})();