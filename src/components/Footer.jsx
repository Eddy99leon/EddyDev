import React from 'react'

const Footer = () => {
  return (
    <div className='container flex justify-between items-center py-4'>
      <div className='text-gray-100'>
        © 2023, <span className='font-semibold'>Eddy Andriamisaina</span>. Tous droits réservés.
      </div>
      <div className='space-x-4'>
        <span className='cursor-pointer text-blue-500 font-bold'>
          Facebook
        </span>
        <span className='cursor-pointer text-blue-500 font-bold'>
          LinkedIn
        </span>
      </div>
    </div>
  )
}

export default Footer