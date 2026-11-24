import Link from "next/link";
import { daftarBuku } from "./data/Buku";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white via-sky-50 to-indigo-100/80 p-8 text-slate-900 shadow-xs sm:p-10">
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3.5 py-1 text-xs font-semibold text-indigo-700">
          Perpustakaan Mini Teknik Informatika
        </span>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Selamat Datang di BacaKampus
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Cari koleksi buku pemrograman, web development, UI/UX, dan sistem
          komputer. Cek ketersediaan rak langsung sebelum berkunjung ke
          perpustakaan.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/buku"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-indigo-700"
          >
            Lihat Katalog Buku
          </Link>
          <Link
            href="/tentang"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Info Layanan
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Buku Rekomendasi
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Pilihan bacaan menarik yang tersedia di ruang baca
            </p>
          </div>

          <Link
            href="/buku"
            className="rounded-lg bg-white px-3.5 py-1.5 text-sm font-semibold text-indigo-600 ring-1 ring-slate-200 transition hover:bg-indigo-50"
          >
            Semua Koleksi &rarr;
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {daftarBuku.map((buku) => (
            <Link
              key={String(buku.id)}
              href={`/buku/${buku.id}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl transition group-hover:scale-105 group-hover:bg-indigo-100">
                  {buku.ikon}
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900 transition group-hover:text-indigo-600">
                  {buku.judul}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  {buku.penulis}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                  {buku.kategori}
                </span>
                <span className="text-xs font-semibold text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-600">
                  Detail &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}