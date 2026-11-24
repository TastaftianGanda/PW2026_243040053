export interface Buku {
  id: String;
  judul: string;
  penulis: string;
  kategori: string;
  tahunTerbit: number;
  status: "Tersedia" | "Dipinjam";
  ikon: string;
  ringkasan: string;
  lokasi: string;
}

export const daftarBuku: Buku[] = [
    {
        id: "A1",
        judul: "The Great Gatsby",
        penulis: "F. Scott Fitzgerald",
        kategori: "Fiksi",
        tahunTerbit: 1925,
        status: "Tersedia",
        ikon: "📚",
        ringkasan: "Novel tentang kehidupan mewah dan keserakahan di Amerika Serikat pada tahun 1920-an.",
        lokasi: "Rak A1"
    },
    {
        id: "A2",
        judul: "To Kill a Mockingbird",
        penulis: "Harper Lee",
        kategori: "Fiksi",
        tahunTerbit: 1960,
        status: "Tersedia",
        ikon: "📚",
        ringkasan: "Novel tentang kehidupan di sebuah kota kecil di Alabama pada tahun 1930-an.",
        lokasi: "Rak A2"
    },
    {
        id: "A3",
        judul: "1984",
        penulis: "George Orwell",
        kategori: "Fiksi",
        tahunTerbit: 1949,
        status: "Dipinjam",
        ikon: "📚",
        ringkasan: "Novel distopia tentang pemerintahan totaliter dan pengawasan massal.",
        lokasi: "Rak A3"
    },
    {
        id: "A4",
        judul: "Pride and Prejudice",
        penulis: "Jane Austen",
        kategori: "Fiksi",
        tahunTerbit: 1813,
        status: "Tersedia",
        ikon: "📚",
        ringkasan: "Novel tentang kehidupan sosial dan percintaan di Inggris pada abad ke-19.",
        lokasi: "Rak A4"
    },
    {
        id: "A5",
        judul: "The Catcher in the Rye",
        penulis: "J.D. Salinger",
        kategori: "Fiksi",
        tahunTerbit: 1951,
        status: "Dipinjam",
        ikon: "📚",
        ringkasan: "Novel tentang kehidupan remaja dan pencarian identitas di Amerika Serikat pada tahun 1950-an.",
        lokasi: "Rak A5"
    },
    {
        id: "A6",
        judul: "The Hobbit",
        penulis: "J.R.R. Tolkien",
        kategori: "Fantasi",
        tahunTerbit: 1937,
        status: "Tersedia",
        ikon: "📚",
        ringkasan: "Novel fantasi tentang petualangan seorang hobbit bernama Bilbo Baggins di dunia Middle-earth.",
        lokasi: "Rak A6"
    }
]