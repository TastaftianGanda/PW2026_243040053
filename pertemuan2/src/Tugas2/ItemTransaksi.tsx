interface Transaksi {
  id: number;
  keterangan: string;
  nominal: number;
  jenis: 'Pemasukan' | 'Pengeluaran';
}

interface ItemTransaksiProps {
  transaksi: Transaksi;
  onHapus: (id: number) => void;
}

function ItemTransaksi({
  transaksi,
  onHapus
}: ItemTransaksiProps) {
  return (
    <li className="item">
      <div className="info-transaksi">
        <strong>{transaksi.keterangan}</strong>

        <small>{transaksi.jenis}</small>
      </div>

      <span
        className={
          transaksi.jenis === 'Pemasukan'
            ? 'nominal-masuk'
            : 'nominal-keluar'
        }
      >
        {transaksi.jenis === 'Pemasukan' ? '+' : '-'}
        Rp {transaksi.nominal.toLocaleString('id-ID')}
      </span>

      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;