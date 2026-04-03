import React from 'react';
import { ALL_TAGS } from '../data/extensions';

interface ControlsProps {
  query: string;
  tag: string | null;
  onQueryChange: (val: string) => void;
  onTagChange: (val: string | null) => void;
}

export default function Controls({ query, tag, onQueryChange, onTagChange }: ControlsProps) {
  return (
    <div className="controls">
      <input
        className="search-input"
        type="text"
        placeholder="SEARCH EXTENSIONS..."
        autoComplete="off"
        spellCheck="false"
        value={query}
        onChange={e => onQueryChange(e.target.value)}
      />
      <div className="tag-filters">
        <button
          className={`tag-btn${tag === null ? ' active' : ''}`}
          onClick={() => onTagChange(null)}
        >
          [ ALL ]
        </button>
        {ALL_TAGS.map(t => (
          <button
            key={t}
            className={`tag-btn${tag === t ? ' active' : ''}`}
            onClick={() => onTagChange(tag === t ? null : t)}
          >
            [ {t} ]
          </button>
        ))}
      </div>
    </div>
  );
}
