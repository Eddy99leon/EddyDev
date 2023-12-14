"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import illustration from 'public/illustration.jpg'
import { LuLoader2 } from 'react-icons/lu'
import Image from 'next/image'
import { MdDelete, MdRemoveRedEye } from "react-icons/md";


const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  //recuperation des blogs
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  //loading fonctionalite
  if(session.status === "loadind"){
    return (
      <div className='container w-full h-full text-4xl justify-center items-center'>
        <LuLoader2 className='animate-spin mx-auto' />
      </div>
    )
  }

  //redirection vers login page
  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router?.push('/dashboard/login');
    }
  }, [session.status, router]);

  //supprimer un blog
  const handleDelete = async (id) => {
    try{
      await fetch(`/api/posts/${id}`,{
        method: "DELETE",
      })
      mutate()
    }catch(err){
      console.log(err);
    }
  }


  if(session.status === "authenticated"){
    return (
      <div className='max-w-3xl w-full mx-auto px-4 py-4'>

        <div className='flex items-center justify-between py-4 border-b border-gray-800'>
          <div className='flex items-center'>
            <div className='rounded-full overflow-hidden mr-4'>
              <Image src={illustration} alt='portfolio' className='w-12 h-12' />
            </div>
            <div>
              <h1 className='font-medium text-gray-100'>
                {session.data.user.name}
              </h1>
              <p className='text-gray-400 text-sm'>
                {session.data.user.email}
              </p>
            </div>
          </div>
          <Link 
            href="/dashboard/addBlog"
          >
            <button 
              className="bg-sky-600 text-gray-950 font-semibold text-sm py-2 px-4 rounded-sm"
            >
              Ajouter
            </button>
          </Link>
        </div>

        <div className='space-y-8 pt-8 min-h-[400px]'>
          {isLoading? 
            <div className='w-full h-full text-3xl flex justify-center items-center'>
              <LuLoader2 className='animate-spin' />
            </div>
            :
            data?.map((item) => (
              <div key={item._id} className='relative group overflow-hidden'>
                <div className='grid grid-cols-5 gap-6'>
                  <div
                    className='col-span-2 overflow-hidden'
                  >
                    <Image src={illustration} alt='portfolio' className='w-full h-[230px] object-cover' />
                  </div>
                  <div 
                    className='col-span-3'
                  >
                    <h1 className='flex justify-between text-lg text-gray-200 font-semibold'>
                      {item.title}
                    </h1>
                    <p className='text-justify text-gray-400 font-medium'>
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className='absolute -left-12 group-hover:left-2 inset-y-0 flex flex-col justify-center gap-3 transition-all duration-200'>
                  <Link 
                    href={`/blog/${item._id}`} as={`/blog/${item._id}`}
                    className='bg-blue-600 shadow-lg p-3'
                  >
                    <MdRemoveRedEye className='text-xl text-black' />
                  </Link>
                  <button 
                    onClick={() => handleDelete(item._id)}
                    className='bg-blue-600 shadow-lg p-3'
                  >
                    <MdDelete className='text-xl text-black' />
                  </button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    )
  }
}

export default Dashboard