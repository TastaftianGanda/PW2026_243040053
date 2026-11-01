
import './App.css';

import KartuProfil from './tugas1/kartuprofil';
import BadgeSkill from './tugas1/BadgeSkill';
import ItemMatkul from './tugas1/ItemMatkul';
import KartuPortofolio from './tugas1/KartuPortofolio';

function App() {

  // Data mata kuliah praktikum
  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF211',
      nama: 'Pemrograman Web (React & Laravel)',
      sks: 3,
      hari: 'Senin'
    },
    {
      id: 102,
      kode: 'IF212',
      nama: 'Basis Data',
      sks: 3,
      hari: 'Selasa'
    },
    {
      id: 103,
      kode: 'IF213',
      nama: 'Algoritma dan Pemrograman',
      sks: 3,
      hari: 'Rabu'
    },
    {
      id: 104,
      kode: 'IF214',
      nama: 'Infrastruktur Teknologi Informasi',
      sks: 2,
      hari: 'Kamis'
    }
  ];

  // Data portofolio
  const daftarPortofolio = [
    {
      id: 1,
      judul: 'Sistem Inventaris Gudang',
      deskripsi: 'Aplikasi untuk mengelola data barang dan stok inventaris.',
      teknologi: ['Java', 'NetBeans'],
      github: 'https://github.com/TastaftianGanda/PW2026_243040053'
    },
    {
      id: 2,
      judul: 'Sistem Bimbel Online',
      deskripsi: 'Aplikasi sederhana untuk mengelola pengguna dan admin bimbel.',
      teknologi: ['Java', 'OOP'],
      github: 'https://github.com/TastaftianGanda/PW2026_243040053'
    },
    {
      id: 3,
      judul: 'Sistem Informasi Produksi Donat',
      deskripsi: 'Sistem untuk mengelola proses produksi dan pengiriman donat.',
      teknologi: ['Analisis Sistem', 'UML'],
      github: 'https://github.com/TastaftianGanda/PW2026_243040053'
    },
    {
      id: 4,
      judul: 'Website Profil Mahasiswa',
      deskripsi: 'Website untuk menampilkan profil, keterampilan, dan portofolio.',
      teknologi: ['React', 'TypeScript'],
      github: 'https://github.com/TastaftianGanda/PW2026_243040053'
    }
  ];

  return (
    <div className="container">

      <h1>Praktikum Pemrograman Web</h1>

      {/* KARTU PROFIL */}
      <section>
        <h2>Profil Mahasiswa</h2>

        <KartuProfil
          nama="Tastaftian Ganda"
          npm="243040053"
          kelas="F"
          status="Mahasiswa Aktif"
          fotoUrl="https://placehold.co/150x150"
        />
      </section>

      {/* BADGE SKILL */}
      <section>
        <h2>Keahlian</h2>

        <div className="daftar-skill">
          <BadgeSkill namaSkill="HTML" level="Mahir" />
          <BadgeSkill namaSkill="CSS" level="Menengah" />
          <BadgeSkill namaSkill="JavaScript" level="Menengah" />
          <BadgeSkill namaSkill="React" level="Pemula" />
          <BadgeSkill namaSkill="Java" level="Menengah" />
        </div>
      </section>

      {/* DAFTAR MATA KULIAH */}
      <section>
        <h2>Daftar Mata Kuliah Praktikum</h2>

        <div className="daftar-matkul">
          {daftarPraktikum.map((matkul) => (
            <ItemMatkul
              key={matkul.id}
              kode={matkul.kode}
              nama={matkul.nama}
              sks={matkul.sks}
              hari={matkul.hari}
            />
          ))}
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section>
        <h2>Portofolio Proyek</h2>

        <div className="daftar-portofolio">
          {daftarPortofolio.map((proyek) => (
            <KartuPortofolio
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              github={proyek.github}
            />
          ))}
        </div>
      </section>

      {/* TOMBOL INTERAKSI */}
      <section>
        <h2>Interaksi</h2>

        <button
          onClick={() => alert('Halo! Selamat datang di profil mahasiswa.')}
        >
          Klik Saya
        </button>
      </section>

    </div>
  );
}

export default App;
