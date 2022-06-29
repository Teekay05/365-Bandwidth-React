import React,{useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar =() =>{

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-[#091029] fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <a href='/' className='text-3xl font-bold mr-4 sm:text-4xl'>365<span className='text-span-color'>.</span></a>
                <ul className='hidden md:flex'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Support</a>
                    </li>
                    <li>
                        <a href="/">Platforms</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-white mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ?  <MenuIcon className='w-5 cursor-pointer mr-4'/> : <XIcon className='w-5 cursor-pointer mr-4'/> }
               
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-[#091029] w-full h-screen px-8 '}>
            <li className='border-b-2 border-zinc-50 w-full'>
                <a href="/">Home</a>
            </li>
            <li className='border-b-2 border-zinc-50 w-full'>
                <a href="/">About</a>
            </li>
            <li className='border-b-2 border-zinc-50 w-full'>
                <a href="/">Support</a>
            </li>
            <li className='border-b-2 border-zinc-50 w-full'>
                <a href="/">Platforms</a>
            </li>
            <li className='border-b-2 border-zinc-50 w-full'>
                <a href="/">Pricing</a>
            </li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-white px-8 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar