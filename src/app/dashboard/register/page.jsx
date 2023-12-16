"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {

  const [ err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try{
      const res = await fetch("/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      })
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    }catch(err){
      setErr(true)
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center font-semibold mb-12 text-2xl sm:text-3xl'>
        S'inscrire,
      </h1>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col items-center'
      >
        <input 
          type="text" 
          className='p-3 w-[310px] sm:w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold mb-3'
          placeholder='Prenom' 
          required
        />
        <input 
          type="email"
          className='p-3 w-[310px] sm:w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold mb-3'
          placeholder='email' 
          required
        />
        <input 
          type="password" 
          className='p-3 w-[310px] sm:w-[360px] outline-none border-none rounded-sm bg-gray-700 font-semibold mb-3'
          placeholder='Mot de passe' 
          required
        />
        {err && "Something went wrong!"}
        <div className='flex text-sm sm:text-base'> 
          <h1 className='mr-1'>
            Vous avez deja un compte?
          </h1>
          <Link href="/dashboard/login" className='font-semibold mb-3'>
             Se connecter.
          </Link>
        </div>
        <button 
          className="bg-sky-600 text-gray-950 font-semibold text-sm w-[310px] sm:w-[360px] py-2 rounded-sm"
        >
          S'inscrire
        </button>
      </form>
    </div>
  )
}

export default Register