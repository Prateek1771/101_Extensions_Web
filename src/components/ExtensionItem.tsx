'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { BASE_URL } from '../data/extensions';
import { Extension } from '../types';

interface ExtensionItemProps {
  ext: Extension;
  isOpen: boolean;
  onToggle: () => void;
  isStarred: boolean;
  onToggleStar: () => void;
}

export default function ExtensionItem({ ext, isOpen, onToggle, isStarred, onToggleStar }: ExtensionItemProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLButtonElement>(null);

  // GSAP — drawer open/close
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    if (isOpen) {
      gsap.fromTo(drawer,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.32, ease: 'power3.out', overflow: 'visible' }
      );
    } else {
      gsap.to(drawer,
        { height: 0, opacity: 0, duration: 0.22, ease: 'power2.in', overflow: 'hidden' }
      );
    }
  }, [isOpen]);

  // GSAP — color/padding flood on open
  useEffect(() => {
    const row = rowRef.current;
    const container = containerRef.current;
    if (!row || !container) return;

    if (isOpen) {
      gsap.to(container, { backgroundColor: ext.rc, duration: 0.2, ease: 'power2.out' });
      gsap.to(row, { color: ext.tc, paddingTop: 18, paddingBottom: 18, duration: 0.2, ease: 'power2.out' });
    } else {
      gsap.to(container, { backgroundColor: 'transparent', duration: 0.18, ease: 'power2.in' });
      gsap.to(row, { color: 'var(--text)', paddingTop: 16, paddingBottom: 16, duration: 0.18, ease: 'power2.in' });
    }
  }, [isOpen, ext.rc, ext.tc]);

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleStar();
    if (starRef.current) {
      gsap.fromTo(starRef.current,
        { scale: 1 },
        { scale: 1.5, duration: 0.12, ease: 'power2.out', yoyo: true, repeat: 1 }
      );
    }
  };

  const handleMouseEnter = () => {
    if (isOpen || !rowRef.current) return;
    gsap.to(rowRef.current, {
      backgroundColor: ext.rc,
      color: ext.tc,
      paddingTop: 18,
      paddingBottom: 18,
      duration: 0.18,
      ease: 'power2.in',
    });
  };

  const handleMouseLeave = () => {
    if (isOpen || !rowRef.current) return;
    gsap.to(rowRef.current, {
      backgroundColor: 'transparent',
      color: 'var(--text)',
      paddingTop: 16,
      paddingBottom: 16,
      duration: 0.22,
      ease: 'power2.out',
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`ext-item${isOpen ? ' open' : ''}`}
      style={isOpen ? { backgroundColor: ext.rc } : {}}
    >
      <div
        ref={rowRef}
        className="ext-row"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isOpen ? { color: ext.tc, paddingTop: 18, paddingBottom: 18 } : {}}
      >
        <span className="col-no">{ext.no}</span>
        <span className="col-name" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>{ext.name}</span>
        <span className="col-fn">{ext.fn}</span>
        <span className="col-cat">{ext.cat}</span>
        <button
          ref={starRef}
          className={`col-star${isStarred ? ' starred' : ''}`}
          style={isStarred ? { color: ext.rc } : {}}
          onClick={handleStarClick}
          aria-label={isStarred ? 'Unstar' : 'Star'}
        >
          {isStarred ? '★' : '☆'}
        </button>
        <span className="col-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      <div ref={drawerRef} className="ext-drawer" style={{ height: 0, overflow: 'hidden' }}>
        <div className="drawer-inner" style={{ backgroundColor: ext.rc, color: ext.tc }}>
          <p className="drawer-desc" style={{ color: ext.tc }}>{ext.desc}</p>
          <a
            className="drawer-gh-btn"
            style={{ color: ext.tc, borderColor: ext.tc }}
            href={`${BASE_URL}${ext.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ VIEW ON GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}
