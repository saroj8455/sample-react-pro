import { useEffect, useState } from 'react';

export const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, delay]);
  return debouncedText;
};
