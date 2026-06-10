'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-neutral-900 dark:text-white">
          Fery Irawan
        </Link>
        <nav className="flex gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              isActive('/') 
                ? 'text-neutral-900 dark:text-white' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`text-sm transition-colors ${
              isActive('/projects') 
                ? 'text-neutral-900 dark:text-white' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              isActive('/about') 
                ? 'text-neutral-900 dark:text-white' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm transition-colors ${
              isActive('/contact') 
                ? 'text-neutral-900 dark:text-white' 
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
