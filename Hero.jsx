import React from 'react'
import {CloudUploadIcon, DatabaseIcon,PaperAirplaneIcon,ServerIcon} from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png'
function Hero() {
  return (
    <div className='w-full h-screen bg-[#091029] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl text-span-color'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-6xl font-bold'>365 Bandwidth<span className='text-span-color'>.</span></h1>
                <p className='text-1xl'>Modernizing  and  managing your hosting services and mission-critical systems.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img src={bgImg} alt="/" className='w-full'/>
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
            bg-zinc-200 border border-zinc-200 rounded-xl text-center shadow-xl'>
                <p className='text-zinc-900 font-medium'>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-zinc-900'><PaperAirplaneIcon className='h-6 text-span-color'/> API</p>
                    <p className='flex px-4 py-2 text-zinc-900'><CloudUploadIcon className='h-6 text-span-color'/> App Security</p>
                    <p className='flex px-4 py-2 text-zinc-900'><ServerIcon className='h-6 text-span-color'/> Cloud Data</p>
                    <p className='flex px-4 py-2 text-zinc-900'><DatabaseIcon className='h-6 text-span-color'/> Database Design</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero