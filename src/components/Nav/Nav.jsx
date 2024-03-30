import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-5 bg-gray-400 w-[1024px] mx-auto py-3 justify-center items-center rounded-lg text-white text-2xl'>
      <Link className='hover:text-blue-300 hover:underline' to={"/"}>Home</Link>
      <Link className='hover:text-blue-300 hover:underline' to={"/login"}>Login</Link>
    </div>
  )
}

export default Nav
