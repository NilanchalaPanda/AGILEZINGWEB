'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className='flex h-[10vh] items-center justify-between lg:mx-16 pt-4 '>
      <h1 className='text-white text-2xl font-bold tracking-tight'>AgileZingWeb</h1>
      <ul className=' items-center gap-4 text-white hidden lg:flex'>
        <a className='hover:text-gray-400' >About</a>
        <a className='hover:text-gray-400'>Projects</a>
        <a className='hover:text-gray-400'>Contact us</a>
      </ul>
      <button onClick={()=> setOpen(!open)} className='lg:hidden'><GiHamburgerMenu size={25}/></button>
      <Drawer open={open}/>
    </nav>
  )
}

function Drawer({open}){
  if(open)
  return(
    <div className='fixed backdrop-blur-md border top-16 border-white w-full'>
        <ul className='flex flex-col items-center justify-center gap-4'>
            <a >About</a>
            <a >Projects</a>
            <a >Conract us </a>
        </ul>
    </div>
  )
}


export default NavBar