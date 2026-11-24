import { useState } from 'react';

import Kartu from './component/Kartu';
import FormTugas from './component/FormTugas';
import ItemTugas from './component/ItemTugas';
import FilterTugas from './FilterTugas';

interface Tugas {
  id: number;
  judul: string;
  selesai: boolean;
}

type Filter = 'semua' | 'belum' | 'selesai';

function DaftarTugas() {
  const [daftarTugas, setDaftarTugas] = useState<Tugas[]>([
    { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
    { id: 2, judul: 'Pelajari useState', selesai: false },
  ]);

  const [filter, setFilter] = useState<Filter>('semua');

  const tambahTugas = (judul: string) => {
    setDaftarTugas([
      ...daftarTugas,
      { id: Date.now(), judul, selesai: false },
    ]);
  };

  const ubahStatus = (id: number) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id
          ? { ...tugas, selesai: !tugas.selesai }
          : tugas
      )
    );
  };

  const hapusTugas = (id: number) => {
    setDaftarTugas(
      daftarTugas.filter((tugas) => tugas.id !== id)
    );
  };

  const hapusSemuaSelesai = () => {
    setDaftarTugas(
      daftarTugas.filter((tugas) => !tugas.selesai)
    );
  };

  const tugasDitampilkan = daftarTugas.filter((tugas) => {
    if (filter === 'belum') return !tugas.selesai;
    if (filter === 'selesai') return tugas.selesai;
    return true;
  });

  const jumlahSelesai = daftarTugas.filter(
    (tugas) => tugas.selesai
  ).length;

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>

      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        <FilterTugas
          filter={filter}
          onFilterChange={setFilter}
        />

        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah"
            onClick={hapusSemuaSelesai}
          >
            Hapus Semua yang Selesai
          </button>
        )}

        {tugasDitampilkan.length === 0 ? (
          <p className="kosong">
            Tidak ada tugas pada kategori ini.
          </p>
        ) : (
          <ul className="daftar">
            {tugasDitampilkan.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default DaftarTugas;