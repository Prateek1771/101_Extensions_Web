import { ALL_TAGS } from '../data/extensions';

export default function Controls({ query, tag, onQueryChange, onTagChange }) {
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
