import Image from 'next/image'
import React from 'react'
import illustration from 'public/illustration.jpg'
import Link from 'next/link'


export const metadata = {
  title: 'EddyDev Blog',
  description: 'this is blog page of EddyDev',
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className='container space-y-10 py-8'>
      {data.map((item) => (
         <div key={item._id}>
            <Link  href={`/blog/${item._id}`} as={`/blog/${item._id}`} className='grid grid-cols-5 gap-6'>
              <div className=' col-span-2'>
                <Image src={illustration} alt='portfolio' className='w-full' />
              </div>
              <div className='col-span-3 space-y-2'>
                <h1 className='text-xl text-gray-200 font-semibold'>
                  {item.title}
                </h1>
                <p className='text-gray-400 font-medium text-justify'>
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