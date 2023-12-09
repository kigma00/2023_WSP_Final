import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-900 px-8 py-3">
      <Link className="text-white text-lg font-bold" href="/">
        Goranie's
      </Link>
      <Link
        className="bg-green-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/Home"
      >
        Home
      </Link>
      <Link
        className="bg-green-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/Team"
      >
        Team
      </Link>
      <Link
        className="bg-green-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/Project"
      >
        Project
      </Link>
      <Link
        className="bg-green-200 text-lg font-bold px-4 py-2 rounded-md"
        href="/QnA"
      >
        Q&A
      </Link>
    </nav>
  )
}
