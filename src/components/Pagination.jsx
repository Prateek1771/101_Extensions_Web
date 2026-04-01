const pad = n => String(n).padStart(2, '0');

export default function Pagination({ page, totalPages, onPrev, onNext }) {
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
