import { useState } from 'react';
import './App.css';
import Keuangan from './Tugas2/Keuangan';
import DaftarTugas from './Daftartugas';

function App() {
  const [halaman, setHalaman] = useState<'tugas' | 'keuangan'>('tugas');

  return (
    <>
      <nav className="navigasi">
        <button
          className={halaman === 'tugas' ? 'nav-aktif' : ''}
          onClick={() => setHalaman('tugas')}
        >
          Daftar Tugas
        </button>

        <button
          className={halaman === 'keuangan' ? 'nav-aktif' : ''}
          onClick={() => setHalaman('keuangan')}
        >
          Catatan Keuangan
        </button>
      </nav>

      {halaman === 'tugas' ? <DaftarTugas /> : <Keuangan />}
    </>
  );
}

export default App;