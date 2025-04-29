'use client'

import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="relative z-50 flex justify-between items-center px-8 py-4 bg-primary sticky top-0">
      <Link href="/">
        <h1 className="text-xl font-semibold text-accent cursor-pointer">NextBet</h1>
      </Link>
      <div className="flex gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-accent transition">Home</Link>
        <Link href="/about" className="hover:text-accent transition">About</Link>
        <Link href="/picks" className="hover:text-accent transition">Picks</Link>
        <Link href="/community" className="hover:text-accent transition">Community</Link>
        <Link href="/admin" className="hover:text-accent transition opacity-60 hover:opacity-100">
          Admin
        </Link>
      </div>

    </nav>
  )
}
