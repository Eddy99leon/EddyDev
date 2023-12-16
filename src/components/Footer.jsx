import React from 'react'

const Footer = () => {
  return (
    <div className='container flex justify-center md:justify-between items-center py-4'>
      <div className='text-gray-100 text-xs sm:text-sm md:text-md'>
        © 2023, <span className='font-semibold'>Eddy Andriamisaina</span>. Tous droits réservés.
      </div>
      <div className='hidden md:block space-x-4'>
        <a 
          className='cursor-pointer text-blue-500 font-bold'
          href="https://web.facebook.com/profile.php?id=100094137014767" 
          target='_blank'
        >
          Facebook
        </a>
        <a 
          className='cursor-pointer text-blue-500 font-bold'
          href="https://www.linkedin.com/in/eddy-andriamisaina-863431299"
          target='_blank'
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Footer