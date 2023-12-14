import React from 'react'
import { LuLoader2 } from "react-icons/lu";

const loading = () => {
  return (
    <div className='container w-full h-full text-4xl justify-center items-center'>
      <LuLoader2 className='animate-spin mx-auto' />
    </div>
  )
}

export default loading