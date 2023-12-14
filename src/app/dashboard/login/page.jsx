"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoDuotone } from "react-icons/pi";


const Login = () => {
  const session = useSession();
  const router = useRouter();

  if(session.status === "loadind"){
    return (
      <div className='container w-full h-full text-4xl justify-center items-center'>
        <LuLoader2 className='animate-spin mx-auto' />
      </div>
    )
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      router?.push('/dashboard');
    }
  }, [session.status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", { email, password })
  }

  return (
    <div className='container'>
      <h1 className='text-center font-semibold mb-12 text-3xl'>
        Connecte ton compte,
      </h1>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col items-center'
      >
        <input 
          type="email"
          className='p-3 w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold mb-3'
          placeholder='email' 
          required
        />
        <input 
          type="password" 
          className='p-3 w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold mb-2'
          placeholder='Mot de passe'
          required
        />
        <div className='flex'> 
          <h1 className='mr-1'>
            Vous n'avez pas de compte ?
          </h1>
          <Link href="/dashboard/register" className='font-semibold mb-3'>
             S'inscrire.
          </Link>
        </div>
        <button 
          className="bg-sky-600 text-gray-950 font-semibold text-sm w-[360px] py-2 rounded-sm"
        >
          Se connecte
        </button>
      </form>
      <p className='text-xl font-medium text-center mt-3'>
        ou
      </p>
      <div className='flex items-center justify-center mt-3 gap-6'>
        <button
          onClick={() => signIn("google")}
          className='flex items-center py-4 px-8 border border-gray-800 rounded-md'
        >
          <FcGoogle className='text-2xl mr-2' />
          Google
        </button>
        <button
          onClick={() => signIn("github")}
          className='flex items-center py-4 px-8 border border-gray-800 rounded-md'
        >
          <PiGithubLogoDuotone className='text-2xl mr-2 text-blue-600' />
          Github
        </button>
      </div>
    </div>
  )
}

export default Login