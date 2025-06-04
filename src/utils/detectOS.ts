export const detectOS = (): string => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const userLanguages = navigator.languages || [navigator.language];
  const primaryLanguage = userLanguages[0];
  
  // Convert language tags like 'en-US' to 'en'
  return primaryLanguage.split('-')[0].toLowerCase();
}; 