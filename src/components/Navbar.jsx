"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { FcBarChart } from "react-icons/fc";

const links = [
  {
    id: 1,
    title: "Accuiel",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Apropos",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
]

const Navbar = () => {
  const session = useSession()

  return (
    <div className='container flex justify-between items-center py-6'>
      <Link href="/" className='flex items-center text-lg font-bold text-gray-100'>
        <FcBarChart className='text-blue-600 text-2xl mr-1' />
        <div>
          Eddy<span className='text-blue-600'>Dev</span>
        </div>
      </Link>
      <div className='space-x-4'>
        {links.map(link=>(
          <Link key={link.id} href={link.url} className='hover:text-blue-500 font-medium text-gray-200'>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button 
            className="bg-blue-500 text-gray-950 font-semibold text-sm px-4 py-2 rounded-sm"
            onClick={signOut}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar