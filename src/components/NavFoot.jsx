import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
function NavFoot() {
  return (
    <div className='ml-[43vw] h-[15%] w-[20%] mt-6 bg-zinc-50 rounded-full flex items-center justify-center gap-10'>
        <Link to={"/hostel"} className='font-semibold text-black uppercase flex items-center justify-center gap-1 text-lg tracking-tight hover:text-white hover:bg-zinc-700 px-4 py-2 rounded-full duration-[0.5s] '><FaBuilding />Hostel</Link>
        <Link to={"/pg"} className='font-semibold text-black uppercase flex items-center justify-center gap-1 text-lg tracking-tight hover:text-white hover:bg-zinc-700 px-4 py-2 rounded-full duration-[0.5s]'><FaHome />PG</Link>
    </div>
  )
}

export default NavFoot

