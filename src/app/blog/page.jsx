import Image from 'next/image'
import React from 'react'
import illustration from 'public/illustration.jpg'
import Link from 'next/link'


export const metadata = {
  title: 'EddyDev Blog',
  description: 'this is blog page of EddyDev',
}

const Blog = async () => {
  
  async function getData() {
    const res = await fetch(process.env.URL +"/api/posts", {
      cache: "no-store",
    });
    if(!res.ok){
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  const data = await getData();

  return (
    <div className='container py-8 divide-y divide-gray-800'>
      {data.map((item) => (
         <div key={item._id} className='py-6'>
            <Link  href={`/blog/${item._id}`} className='grid grid-cols-1 md:grid-cols-5 gap-6'>
              <div className=' md:col-span-2'>
                <Image src={illustration} priority={true} alt='portfolio' className='max-w-[800px] w-full h-[250px] object-cover' />
              </div>
              <div className='md:col-span-3 space-y-2'>
                <h1 className='text-base md:text-xl text-gray-200 font-semibold'>
                  {item.title}
                </h1>
                <p className='text-gray-400 text-sm md:text-base font-medium text-justify'>
                  {item.desc}
                </p>
              </div>
            </Link>
         </div>
      ))}
    </div>
  )
}

export default Blog