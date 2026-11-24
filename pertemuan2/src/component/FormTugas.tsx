import { useState } from 'react';

interface FormTugasProps {
  onTambah: (judul: string) => void;
}

function FormTugas({ onTambah }: FormTugasProps) {
  const [teks, setTeks] = useState('');

  const terlaluPanjang = teks.length > 50;
  const tidakValid = teks.trim() === '' || terlaluPanjang;

  const tanganiKirim = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (tidakValid) return;

    onTambah(teks.trim());
    setTeks('');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Masukkan tugas baru..."
          value={teks}
          onChange={(event) => setTeks(event.target.value)}
        />

        <button
          className="tombol"
          type="submit"
          disabled={tidakValid}
        >
          Tambah
        </button>
      </div>

      {terlaluPanjang && (
        <p className="galat">
          Judul tugas maksimal 50 karakter.
        </p>
      )}
    </form>
  );
}

export default FormTugas;