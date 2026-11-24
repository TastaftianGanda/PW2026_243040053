"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItem {
  label: string;
  href: string;
}

const daftarLink: NavbarItem[] = [
  { label: "Home", href: "/" },
  { label: "Daftar Buku", href: "/buku" },
  { label: "About", href: "/tentang" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/90 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-base text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
            📚
          </span>
          <span>
            Baca<span className="text-indigo-600">Kampus</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
          {daftarLink.map((item) => {
            const aktif =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    aktif
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}