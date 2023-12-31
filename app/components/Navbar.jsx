'use client'

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const { status, date: session } = useSession

  return (
    <nav className="flex justify-between items-center bg-green-900 px-8 py-3">
      <Link className="text-white text-lg font-bold" href="/">
        Goranie
      </Link>

      <div>
        <Link
          className="bg-green-200 text-lg font-bold m-2 px-4 py-2 rounded-md"
          href="/Home"
        >
          Home
        </Link>
        <Link
          className="bg-green-200 text-lg font-bold m-2 px-4 py-2 rounded-md"
          href="/Team"
        >
          Team
        </Link>
        <Link
          className="bg-green-200 text-lg font-bold m-2 px-4 py-2 rounded-md"
          href="/Project"
        >
          Project
        </Link>
        <Link
          className="bg-green-200 text-lg font-bold m-2 px-4 py-2 rounded-md"
          href="/QnA"
        >
          Q&A
        </Link>

        {status === 'authenticated' ? (
          <>
            <button
              onClick={() => signOut()}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-lg font-bold"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              <span className="text-white font-bold">
                {session?.user?.name}
              </span>
            </div>
          </>
        ) : (
          <Link
            href="/signIn"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-lg font-bold"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
