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
  if(session.status === "loading"){
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
            <div className='rounded-full overflow-hidden mr-2 sm:mr-4'>
              <Image 
                src={illustration} 
                priority={false} 
                placeholder = 'blur'
                alt='portfolio' 
                className='w-8 sm:w-12 h-8 sm:h-12' 
              />
            </div>
            <div>
              <h1 className='font-medium text-sm sm:text-base text-gray-100'>
                {session.data.user.name}
              </h1>
              <p className='text-gray-400 text-xs sm:text-sm'>
                {session.data.user.email}
              </p>
            </div>
          </div>
          <Link 
            href="/dashboard/addBlog"
          >
            <button 
              className="bg-sky-600 text-gray-950 font-semibold text-sm py-1 sm:py-2 px-2 sm:px-4 rounded-sm"
            >
              Ajouter
            </button>
          </Link>
        </div>

        <div className='pt-8 min-h-[400px] divide-y divide-gray-800'>
          {isLoading? 
            <div className='w-full h-full text-3xl flex justify-center items-center'>
              <LuLoader2 className='animate-spin' />
            </div>
            :
            data?.map((item) => (
              <div key={item._id} className='group overflow-hidden py-6'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                  <div
                    className='md:col-span-2 overflow-hidden relative'
                  >
                    <Image 
                      src={illustration} 
                      priority={false} 
                      placeholder = 'blur' 
                      alt='portfolio' 
                      className='w-full h-[230px] object-cover' 
                    />
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
                  <div 
                    className='md:col-span-3'
                  >
                    <h1 className='flex justify-between text-base sm:text-lg text-gray-200 font-semibold'>
                      {item.title}
                    </h1>
                    <p className='text-justify text-sm sm:text-base text-gray-400 font-medium'>
                      {item.desc}
                    </p>
                  </div>
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