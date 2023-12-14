import React from 'react'


export const metadata = {
  title: 'EddyDev About',
  description: 'this is about page of EddyDev',
}

const About = () => {
  return (
    <div className='container'>
      <div className="bg-[url('/about.jpg')] bg-cover w-full h-[300px] mb-12">
        <div className='bg-black/50 w-full h-full flex justify-start items-end p-4'>
          <div>
            <h1 className='font-bold text-xl text-gray-300'>
              Conteurs numériques
            </h1>
            <p className='font-medium text-gray-300'>
              Conception méticuleuse d'expériences numériques de qualité.
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-10 mb-10 text-gray-400'>
        <div className='flex-1 space-y-8'>
          <h1 className='text-2xl font-semibold text-blue-500'>
            Qui sommes-nous ?
          </h1>
          <p>
            Lorem ipsum dolor sit amet.
            ipsum dolor sit amet consectetur.
              sit amet consectetur adipisicing.
            Lorem ipsum dolor sit amet.
            ipsum dolor sit amet consectetur.
              sit amet consectetur adipisicing.
          </p>
          <p>
            Lorem ipsum dolor sit amet.
            ipsum dolor sit amet consectetur.
              sit amet consectetur adipisicing.
            Lorem ipsum dolor sit amet.
            ipsum dolor sit amet consectetur.
              sit amet consectetur adipisicing.
          </p>
        </div>
        <div className='flex-1 space-y-8'>
          <h1 className='text-2xl font-semibold text-blue-500'>
            Qu'est-ce que nous faisons ?
          </h1>
          <p>
            Lorem ipsum dolor sit amet.
            ipsum dolor sit amet consectetur.
              sit amet consectetur adipisicing.
            Lorem ipsum dolor sit amet.
            ipsum dolor sit amet consectetur.
              sit amet consectetur adipisicing.
          </p>
          <ul className=''>
            <li>- Design</li>
            <li>- Static websites</li>
            <li>- Dynamic websites</li>
          </ul>
          <button className="bg-blue-600 text-gray-950 font-semibold text-sm px-4 py-2 rounded-sm">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default About