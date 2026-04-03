import React from 'react';

const pad = (n: number) => String(n).padStart(2, '0');

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({ page, totalPages, onPrev, onNext }: PaginationProps) {
  return (
    <div className="pagination">
      <button
        className={page <= 1 ? 'disabled' : ''}
        onClick={onPrev}
        disabled={page <= 1}
      >
        ← PREV
      </button>
      <span id="page-label">PAGE {pad(page)} OF {pad(totalPages)}</span>
      <button
        className={page >= totalPages ? 'disabled' : ''}
        onClick={onNext}
        disabled={page >= totalPages}
      >
        NEXT →
      </button>
    </div>
  );
}
