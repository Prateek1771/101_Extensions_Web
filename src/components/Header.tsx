'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { dark, toggle } = useTheme();
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline()
      .fromTo('.wordmark',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
      .fromTo('.header-sub',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.2'
      );
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="wordmark">101 EXTENSIONS</div>
        <div className="header-actions">
          <a
            className="header-gh"
            href="https://prateekhitli.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ portfolio
          </a>
          <a
            className="header-gh"
            href="https://github.com/Prateek1771/101_ChromeExtensions"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ github
          </a>
          <button className="theme-toggle" onClick={toggle}>
            {dark ? '[ LIGHT ]' : '[ DARK ]'}
          </button>
        </div>
      </div>
      <div className="header-sub">A directory of Chrome tools. &nbsp;— PRATEEK1771 · 2025 —</div>
    </header>
  );
}
