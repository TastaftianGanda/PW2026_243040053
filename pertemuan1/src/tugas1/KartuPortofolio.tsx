
interface KartuPortofolioProps {
  judul: string;
  deskripsi: string;
  teknologi: string[];
  github: string;
}

function KartuPortofolio({
  judul,
  deskripsi,
  teknologi,
  github
}: KartuPortofolioProps) {
  return (
    <div className="kartu-portofolio">
      <h3>{judul}</h3>

      <p>{deskripsi}</p>

      <div className="teknologi">
        {teknologi.map((tech, index) => (
          <span key={index} className="badge-teknologi">
            {tech}
          </span>
        ))}
      </div>

      <a href={github} target="_blank" rel="noreferrer">
        Lihat GitHub
      </a>
    </div>
  );
}

export default KartuPortofolio;
