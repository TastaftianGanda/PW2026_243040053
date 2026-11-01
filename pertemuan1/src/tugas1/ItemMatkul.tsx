
interface ItemMatkulProps {
  kode: string;
  nama: string;
  sks: number;
  hari: string;
}

function ItemMatkul({
  kode,
  nama,
  sks,
  hari
}: ItemMatkulProps) {
  return (
    <div className="item-matkul">
      <h3>{nama}</h3>
      <p>Kode: {kode}</p>
      <p>SKS: {sks}</p>
      <p>Hari: {hari}</p>
    </div>
  );
}

export default ItemMatkul;
