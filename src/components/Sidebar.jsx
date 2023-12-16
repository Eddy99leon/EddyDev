"use client"
import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io"
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';
import { SidebarContext } from '@/contexts/SidebarContext';
import Link from 'next/link';
import { FcBarChart } from 'react-icons/fc';

const Sidebar = () => {

  const {isOpen, setIsOpen, handleClose} = useContext(SidebarContext)

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


  return (
    <div 
      className={`
        ${isOpen ? "opacity-100" : "opacity-0"}
         fixed z-40 top-0 w-full h-full bg-black/70 transition-all pointer-events-none
      `}
    >

      <div 
        className={`
        ${isOpen ? "left-0" : "-left-full"}
         fixed top-0 h-full w-full sm:w-[50vw] lg:w-[30vw] px-3 bg-black transition-all duration-400 pointer-events-auto
      `}
      >

        <div className=''>

          {/* Close navbar */}
          <div className='py-8'>
            <IoMdClose 
              onClick={()=> { setIsOpen(false), document.body.style.overflow = "auto" }}
              className="text-2xl cursor-pointer" 
            />
          </div>

          <div className='flex justify-center items-center'>
            <div>
              {/* logo */}
              <Link 
                href="/" 
                onClick={handleClose}
                className='flex items-center text-xl sm:text-2xl font-bold text-gray-100 my-4'
              >
                <FcBarChart className='text-blue-600 text-3xl sm:text-4xl' />
                <div>
                  Eddy<span className='text-blue-600'>Dev</span>
                </div>
              </Link>
              {/* Navlink */}
              <div className='flex flex-col space-y-2 pl-8'>
                {links.map(link=>(
                  <Link
                    key={link.id} 
                    href={link.url} 
                    onClick={handleClose}
                    className='hover:text-blue-500 font-semibold text-md sm:text-lg text-gray-200'
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              {/* Contact information */}
              <div>
                <h1 className='flex items-center text-xl sm:text-2xl font-bold text-gray-100 my-4'>
                  Contact:
                </h1>
                <div className='text-md sm:text-lg space-y-2 pl-8'>
                  <div>
                    <a 
                      className=" hover:transform hover:scale-95 text-blue-500 font-semibold"  
                      href="https://web.facebook.com/profile.php?id=100094137014767" 
                      target='_blank'
                    >
                      Facebook
                    </a>
                  </div>
                  <div>
                    <a 
                      className=" hover:transform hover:scale-95 text-blue-500 font-semibold" 
                      href="https://www.linkedin.com/in/eddy-andriamisaina-863431299"
                      target='_blank'
                    >
                      Linkedln
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar