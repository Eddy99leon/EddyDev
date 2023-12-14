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
      <h1 className='text-7xl font-bold my-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-red-500 inline-block'>
        Nos réalisations
      </h1>
      <h2 className='text-3xl font-medium mb-8 text-gray-400'>
        {params.category}
      </h2>
      <div className='space-y-8'>
        {data.map(item=>(
          <div key={item.id} className='item flex justify-between items-center gap-10'>
            <div className='flex-1'>
              <h1 className='text-3xl font-semibold mb-2'>
                {item.title}
              </h1>
              <p className='text-gray-400 mb-3'>
                {item.desc}
              </p>
              <button className="bg-sky-600 text-gray-950 font-semibold text-sm px-4 py-2 rounded-sm">
                See More
              </button>
            </div>
            <div className='flex-1'>
              <Image src={item.image} alt='portfolio' className='w-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category