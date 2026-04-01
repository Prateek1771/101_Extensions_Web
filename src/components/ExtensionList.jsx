import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { EXTENSIONS, PER_PAGE } from '../data/extensions';
import ExtensionItem from './ExtensionItem';
import Controls from './Controls';
import TableHeader from './TableHeader';
import Pagination from './Pagination';
import { useStars } from '../hooks/useStars';

function getFiltered(query, tag) {
  const q = query.toLowerCase().trim();
  return EXTENSIONS.filter(ext => {
    const matchTag = !tag || ext.tags.includes(tag);
    const matchQuery = !q ||
      ext.name.toLowerCase().includes(q) ||
      ext.fn.toLowerCase().includes(q) ||
      ext.cat.toLowerCase().includes(q);
    return matchTag && matchQuery;
  });
}

export default function ExtensionList() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState(null);
  const [page, setPage] = useState(1);
  const [openHref, setOpenHref] = useState(null);
  const listRef = useRef(null);
  const { stars, toggle: toggleStar } = useStars();

  const filtered = getFiltered(query, tag);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const slice = filtered.slice(start, start + PER_PAGE);

  // GSAP stagger on list render / filter / page change
  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.ext-item');
    if (!items || items.length === 0) return;
    gsap.fromTo(items,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
    );
  }, [page, tag, query]);

  const handleQueryChange = (val) => {
    setQuery(val);
    setPage(1);
    setOpenHref(null);
  };

  const handleTagChange = (val) => {
    setTag(val);
    setPage(1);
    setOpenHref(null);
  };

  const handleToggle = (href) => {
    setOpenHref(prev => prev === href ? null : href);
  };

  const handlePrev = () => {
    if (safePage > 1) { setPage(p => p - 1); setOpenHref(null); }
  };

  const handleNext = () => {
    if (safePage < totalPages) { setPage(p => p + 1); setOpenHref(null); }
  };

  return (
    <main className="ext-section">
      <Controls
        query={query}
        tag={tag}
        onQueryChange={handleQueryChange}
        onTagChange={handleTagChange}
      />
      <TableHeader />
      <div ref={listRef} id="ext-list">
        {slice.length === 0 ? (
          <div className="empty-state">NO RESULTS · ADJUST YOUR SEARCH</div>
        ) : (
          slice.map(ext => (
            <ExtensionItem
              key={ext.href}
              ext={ext}
              isOpen={openHref === ext.href}
              onToggle={() => handleToggle(ext.href)}
              isStarred={!!stars[ext.href]}
              onToggleStar={() => toggleStar(ext.href)}
            />
          ))
        )}
      </div>
      <Pagination
        page={safePage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
}
