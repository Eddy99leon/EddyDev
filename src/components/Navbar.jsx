"use client"
import { SidebarContext } from '@/contexts/SidebarContext';
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { FcBarChart } from "react-icons/fc";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const links = [
  {
    id: 1,
    title: "Accueil",
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
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const session = useSession()

  return (
    <div className='container flex justify-between items-center py-6'>
      <div 
        className='text-2xl mr-4 md:hidden cursor-pointer'
        onClick={()=> { setIsOpen(!isOpen), document.body.style.overflow = "hidden" }}
      >
        <HiOutlineMenuAlt2 />
      </div>
      <Link href="/" className='flex items-center text-lg font-bold text-gray-100'>
        <FcBarChart className='text-blue-600 text-2xl' />
        <div>
          Eddy<span className='text-blue-600'>Dev</span>
        </div>
      </Link>
      <div className='space-x-4 flex items-center'>
        <div className='space-x-4 hidden md:block'>
          {links.map(link=>(
            <Link key={link.id} href={link.url} className='hover:text-blue-500 font-medium text-gray-200'>
              {link.title}
            </Link>
          ))}
        </div>
        {session.status === "authenticated" && (
          <button 
            className="bg-blue-500 text-gray-950 font-semibold text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-sm"
            onClick={signOut}
          >
            Logout
          </button>
        )}
        {session.status === "unauthenticated" && (
          <Link 
            className="bg-blue-500 text-gray-950 font-semibold text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-sm"
            href="/dashboard/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar