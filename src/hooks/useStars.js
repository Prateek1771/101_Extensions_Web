import { useState, useCallback } from 'react';

const KEY = '101ext_stars';

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch {
    return {};
  }
};

export function useStars() {
  const [stars, setStars] = useState(load);

  const toggle = useCallback((href) => {
    setStars(prev => {
      const next = { ...prev, [href]: !prev[href] };
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { stars, toggle };
}
