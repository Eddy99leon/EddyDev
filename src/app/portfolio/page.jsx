import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: 'EddyDev Portfolio',
  description: 'this is portfolio page of EddyDev',
}

const Portfolio = () => {
  return (
    <div className='container'>
      <h1 className='text-[38px] sm:text-6xl md:text-7xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-red-500 inline-block'>
        Nos réalisations
      </h1>
      <h2 className='text-xl sm:text-2xl font-medium mb-8 text-gray-400'>
        Choisissez une galerie
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-12 pb-4'>
        <Link 
          href="/portfolio/design"
          className="bg-[url('/design.jpg')] w-[280px] h-[350px] bg-cover rounded-sm border-4 border-gray-300"
        >
          <div className='bg-black/50 w-full h-full flex justify-center items-end pb-3 hover:bg-black/40'>
            <p className='text-lg sm:text-xl font-medium'>
              Design
            </p>
          </div>
        </Link>
        <Link 
          href="/portfolio/frontend"
          className="bg-[url('/website.jpg')] w-[280px] h-[350px] bg-cover rounded-sm border-4 border-gray-300"
        >
          <div className='bg-black/50 w-full h-full flex justify-center items-end pb-3 hover:bg-black/40'>
            <p className='text-lg sm:text-xl font-medium'>
              Frontend
            </p>
          </div>
        </Link>
        <Link 
          href="/portfolio/fullstack"
          className="bg-[url('/phone.jpg')] w-[280px] h-[350px] bg-cover rounded-sm border-4 border-gray-300"
        >
          <div className='bg-black/50 w-full h-full flex justify-center items-end pb-3 hover:bg-black/40'>
            <p className='text-lg sm:text-xl font-medium'>
              Fullstack
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio