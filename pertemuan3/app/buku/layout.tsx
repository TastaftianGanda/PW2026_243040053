import type { ReactNode } from "react";

export default function BukuLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-sky-200/80 bg-gradient-to-r from-white via-sky-50 to-indigo-50 px-5 py-4 shadow-xs">
        <p className="text-sm font-semibold text-slate-900">
          Info Peminjaman — Maksimal 3 buku selama 7 hari kerja dengan menunjukkan KTM aktif.
        </p>
        <p className="mt-1 text-xs text-slate-600">
          Banner ini berasal dari Nested Layout (app/buku/layout.js), sehingga
          tetap muncul di halaman katalog maupun halaman detail buku.
        </p>
      </div>

      <section>{children}</section>
    </div>
  );
}