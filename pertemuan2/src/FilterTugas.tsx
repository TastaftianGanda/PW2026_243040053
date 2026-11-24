type Filter = 'semua' | 'belum' | 'selesai';

interface FilterTugasProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function FilterTugas({ filter, onFilterChange }: FilterTugasProps) {
  return (
    <div className="filter-container">
      <button
        className={filter === 'semua' ? 'tombol filter-aktif' : 'tombol'}
        onClick={() => onFilterChange('semua')}
      >
        Semua
      </button>

      <button
        className={filter === 'belum' ? 'tombol filter-aktif' : 'tombol'}
        onClick={() => onFilterChange('belum')}
      >
        Belum Selesai
      </button>

      <button
        className={filter === 'selesai' ? 'tombol filter-aktif' : 'tombol'}
        onClick={() => onFilterChange('selesai')}
      >
        Selesai
      </button>
    </div>
  );
}

export default FilterTugas;