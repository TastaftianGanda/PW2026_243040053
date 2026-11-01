
interface KartuProfilProps {
  nama: string;
  npm: string;
  kelas: string;
  status: string;
  fotoUrl: string;
}

function KartuProfil({
  nama,
  npm,
  kelas,
  status,
  fotoUrl
}: KartuProfilProps) {
  return (
    <div className="kartu-profil">
      <img
        src={fotoUrl}
        alt="Foto Profil"
        className="foto-profil"
      />

      <div>
        <h2>{nama}</h2>
        <p>NPM: {npm}</p>
        <p>Kelas: {kelas}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default KartuProfil;
