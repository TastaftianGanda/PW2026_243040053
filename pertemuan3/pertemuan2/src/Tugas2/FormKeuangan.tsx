import { useState } from 'react';

interface FormKeuanganProps {
  onTambah: (
    keterangan: string,
    nominal: number,
    jenis: 'Pemasukan' | 'Pengeluaran'
  ) => void;
}

function FormKeuangan({ onTambah }: FormKeuanganProps) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState<'Pemasukan' | 'Pengeluaran'>(
    'Pemasukan'
  );

  const tanganiKirim = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const angka = Number(nominal);

    if (!keterangan.trim() || angka <= 0 || !Number.isFinite(angka)) {
      return;
    }

    onTambah(keterangan.trim(), angka, jenis);

    setKeterangan('');
    setNominal('');
    setJenis('Pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <label>Keterangan Transaksi</label>

      <input
        className="input"
        type="text"
        placeholder="Contoh: Uang saku"
        value={keterangan}
        onChange={(e) => setKeterangan(e.target.value)}
        required
      />

      <label>Nominal (Rp)</label>

      <input
        className="input"
        type="number"
        placeholder="Masukkan nominal"
        min="1"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
        required
      />

      <label>Jenis Transaksi</label>

      <select
        className="input"
        value={jenis}
        onChange={(e) =>
          setJenis(e.target.value as 'Pemasukan' | 'Pengeluaran')
        }
      >
        <option value="Pemasukan">Pemasukan</option>
        <option value="Pengeluaran">Pengeluaran</option>
      </select>

      <button className="tombol" type="submit">
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormKeuangan;