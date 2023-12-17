import Image from 'next/image'
import React from 'react'
import { items } from "./data.js"
import { notFound } from 'next/navigation'


const getData = (categ) => {
  const data = items[categ]
  if(data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div className='container'>
      <h1 className='text-[38px] sm:text-6xl md:text-7xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-red-500 inline-block'>
        Nos réalisations
      </h1>
      <h2 className='text-2xl sm:text-3xl font-medium mb-8 text-gray-400'>
        {params.category}
      </h2>
      <div className='divide-y divide-gray-800 pb-4'>
        {data.map(item=>(
          <div key={item.id} className='item flex justify-between flex-col md:flex-row items-center md:gap-10 py-6'>
            <div className='flex-1'>
              <h1 className='text-2xl sm:text-3xl font-semibold mb-2'>
                {item.title}
              </h1>
              <p className='text-gray-400 mb-3 text-justify'>
                {item.desc}
              </p>
              <button className="bg-sky-600 text-gray-950 font-semibold text-sm px-4 py-2 rounded-sm">
                See More
              </button>
            </div>
            <div className='flex-1 order-first md:order-none mb-2 md:mb-0'>
              <Image src={item.image} priority={false} alt='portfolio' className='w-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category