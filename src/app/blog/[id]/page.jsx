import React from 'react'
import illustration from 'public/illustration.jpg'
import Image from 'next/image'
import { notFound } from 'next/navigation';


async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if(!res.ok){
    return notFound()
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post?.title,
    description: post?.desc,
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className='container'>

      <div className='grid grid-cols-2 gap-8 mb-6'>
        <div className='space-y-4'>
          <h1 className='text-xl text-gray-200 font-semibold'>
            {data?.title}
          </h1>
          <p className='text-gray-400 font-medium text-justify'>
            {data?.desc}
          </p>
          <div className='flex items-center'>
            <Image src={illustration} alt='portfolio' className='w-8 h-8 overflow-hidden rounded-full mr-2' />
            <h1 className='text-gray-300 font-semibold text-lg'>
              {data?.username}
            </h1>
          </div>
        </div>
        <div className=''>
          <Image src={illustration} alt='portfolio' className='w-full' />
        </div>
      </div>

      <div className='space-y-4 text-gray-400 font-medium text-justify'>
        {data?.content}
      </div>

    </div>
  )
}

export default BlogPost