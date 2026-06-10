import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-neutral-900 dark:text-white">
        404
      </h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        Halaman tidak ditemukan
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
