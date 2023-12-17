import Image from 'next/image'
import React from 'react'
import contact from 'public/contact.png'


export const metadata = {
  title: 'EddyDev Contact Information',
  description: 'this is contact page of EddyDev',
}

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='text-center text-3xl sm:text-4xl text-gray-300 font-semibold mb-6'>
        Restons en contact,
      </h1>
      <div className='flex items-center justify-between gap-10'>
        <div className='flex-1 hidden md:block'>
          <Image src={contact} alt='contact' priority={false} className='w-full' />
        </div>
        <div className='flex-1 flex justify-center'>
          <div className='flex flex-col gap-y-4'>
            <input 
              type="text" 
              className='p-3 w-[310px] sm:w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold'
              placeholder='Nom' 
            />
            <input 
              type="email" 
              className='p-3 w-[310px] sm:w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold'
              placeholder='Email' 
            />
            <textarea  
              className='p-3 w-[310px] sm:w-[360px] h-40 outline-none border-none rounded-sm bg-gray-700 font-semibold'
              placeholder='message' 
            />
            <button className="bg-sky-600 text-gray-950 font-semibold text-sm px-4 py-2 rounded-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact