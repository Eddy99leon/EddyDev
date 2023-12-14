"use client"
import React, { useEffect } from 'react'
import { mutate } from 'swr';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { LuLoader2 } from 'react-icons/lu';

const AddBlog = () => {
  const session = useSession()
  const router = useRouter()

  //ajouter un blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try{
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        })
      })
      mutate()
      e.target.reset()
      router?.push('/dashboard');
    }catch(err){
      console.log(err)
    }
  }

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


  if(session.status === "authenticated"){
    return (
        <div className='max-w-2xl mx-auto w-full'>
            <h1 className='text-3xl text-center font-medium mb-4'>
                Ajouter nouvelle blog,
            </h1>
            <form 
                onSubmit={handleSubmit}
                className='flex flex-col items-center gap-4 max-w-3xl w-full'
            >
                <input 
                    type="text" 
                    className='w-full p-3 outline-none border-none rounded-sm bg-gray-700 font-semibold'
                    placeholder='titre' 
                    required
                />
                <textarea  
                    className='w-full p-3 h-[120px] outline-none border-none rounded-sm bg-gray-700 font-semibold'
                    placeholder='description'
                    required
                />
                <input 
                    type="text" 
                    className='w-full p-3 outline-none border-none rounded-sm bg-gray-700 font-semibold'
                    placeholder='image-link' 
                    required
                />
                <textarea  
                    className='w-full p-3 h-[120px] outline-none border-none rounded-sm bg-gray-700 font-semibold'
                    placeholder='contenu'
                    required
                />
                <button 
                    className="bg-sky-600 text-gray-950 font-semibold text-sm px-20 py-3 rounded-sm"
                >
                    Publier
                </button>
            </form>
        </div>
    )
  }
}

export default AddBlog