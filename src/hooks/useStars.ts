'use client';

import { useState, useCallback } from 'react';

const KEY = '101ext_stars';

const load = (): Record<string, boolean> => {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export function useStars() {
  const [stars, setStars] = useState<Record<string, boolean>>(load);

  const toggle = useCallback((href: string) => {
    setStars(prev => {
      const next = { ...prev, [href]: !prev[href] };
      if (typeof window !== 'undefined') {
        localStorage.setItem(KEY, JSON.stringify(next));
      }
      return next;
    });
  }, []);

  return { stars, toggle };
}
