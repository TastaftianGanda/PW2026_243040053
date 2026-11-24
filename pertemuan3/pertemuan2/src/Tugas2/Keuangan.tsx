import { useEffect, useState } from 'react';
import Kartu from '../component/Kartu';
import FormKeuangan from './FormKeuangan';
import ItemTransaksi from './ItemTransaksi';

interface Transaksi {
    id: number;
    keterangan: string;
    nominal: number;
    jenis: 'Pemasukan' | 'Pengeluaran';
}

function Keuangan() {
    // Mengambil data dari localStorage
    const [transaksi, setTransaksi] = useState<Transaksi[]>(() => {
        try {
            const data = localStorage.getItem('data-keuangan');
            return data ? JSON.parse(data) as Transaksi[] : [];
        } catch {
            return [];
        }
    });

    // Menyimpan data setiap terjadi perubahan
    useEffect(() => {
        localStorage.setItem(
            'data-keuangan',
            JSON.stringify(transaksi)
        );
    }, [transaksi]);

    // Menambahkan transaksi
    const tambahTransaksi = (
        keterangan: string,
        nominal: number,
        jenis: 'Pemasukan' | 'Pengeluaran'
    ) => {
        const transaksiBaru: Transaksi = {
            id: Date.now(),
            keterangan,
            nominal,
            jenis,
        };

        setTransaksi([...transaksi, transaksiBaru]);
    };

    // Menghapus transaksi
    const hapusTransaksi = (id: number) => {
        setTransaksi(
            transaksi.filter((item) => item.id !== id)
        );
    };

    // Menghitung total pemasukan
    const pemasukan = transaksi
        .filter((item) => item.jenis === 'Pemasukan')
        .reduce((total, item) => total + item.nominal, 0);

    // Menghitung total pengeluaran
    const pengeluaran = transaksi
        .filter((item) => item.jenis === 'Pengeluaran')
        .reduce((total, item) => total + item.nominal, 0);

    // Menghitung saldo
    const saldo = pemasukan - pengeluaran;

    return (
        <div className="wadah">
            <h1 className="judul">Catatan Keuangan Mini</h1>

            <p className="subjudul">
                Aplikasi Pencatatan Pemasukan dan Pengeluaran
            </p>

            <Kartu judul="Ringkasan Keuangan">
                <div className="ringkasan-keuangan">
                    <div>
                        <p>Total Pemasukan</p>
                        <h3 className="nominal-masuk">
                            Rp {pemasukan.toLocaleString('id-ID')}
                        </h3>
                    </div>

                    <div>
                        <p>Total Pengeluaran</p>
                        <h3 className="nominal-keluar">
                            Rp {pengeluaran.toLocaleString('id-ID')}
                        </h3>
                    </div>

                    <div>
                        <p>Total Saldo</p>
                        <h2>
                            Rp {saldo.toLocaleString('id-ID')}
                        </h2>
                    </div>
                </div>
            </Kartu>

            <Kartu judul="Tambah Transaksi">
                <FormKeuangan onTambah={tambahTransaksi} />
            </Kartu>

            <Kartu judul="Daftar Transaksi">
                {transaksi.length === 0 ? (
                    <p className="kosong">
                        Belum ada transaksi. Silakan tambahkan transaksi pertama.
                    </p>
                ) : (
                    <ul className="daftar">
                        {transaksi.map((item) => (
                            <ItemTransaksi
                                key={item.id}
                                transaksi={item}
                                onHapus={hapusTransaksi}
                            />
                        ))}
                    </ul>
                )}
            </Kartu>
        </div>
    );
}

export default Keuangan;