"use client"
import React from 'react'
import illustration from 'public/illustration.jpg'
import Image from 'next/image'
import useSWR from 'swr'
// import { notFound } from 'next/navigation';


// async function getData(id) {
//   const res = await fetch(process.env.URL + `/api/posts/${id}`, {
//     cache: "no-store",
//   });
//   if(!res.ok){
//     return notFound()
//   }
//   return res.json();
// }


// export async function generateMetadata({ params }) {
//   const post = await getData(params.id)
//   return {
//     title: post?.title,
//     description: post?.desc,
//   }
// }

const BlogPost = ({params}) => {

  //recuperation des blogs
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, isLoading } = useSWR(
    `/api/posts/${params.id}`,
    fetcher
  );

  return (
    <div className='container'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6'>
        <div className='space-y-2 sm:space-y-4'>
          <h1 className='text-lg sm:text-xl text-gray-200 font-semibold'>
            {data?.title}
          </h1>
          <p className='text-gray-400 font-medium text-justify text-sm sm:text-base'>
            {data?.desc}
          </p>
          <div className='flex items-center'>
            <Image src={illustration} priority={true} alt='portfolio' className='w-8 h-8 overflow-hidden rounded-full mr-2' />
            <h1 className='text-gray-300 font-semibold text-base sm:text-lg'>
              {data?.username}
            </h1>
          </div>
        </div>
        <div className=''>
          <Image src={data?.img} priority={true} width={800} height={250} alt='portfolio' className='w-full h-[200px] md:h-[250px] object-cover' />
        </div>
      </div>

      <div className='text-gray-400 font-medium text-justify text-sm sm:text-base pb-10'>
        {data?.content}
      </div>

    </div>
  )
}

export default BlogPost