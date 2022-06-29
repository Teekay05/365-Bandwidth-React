import React from 'react'
// import {
//   FaFacebook,
//   FaGithub,
//   FaInstagram,
//   FaTwitter,
//   FaTwitch,
// } from 'react-icons/fa'
function About() {
  return (
    <div className='w-full my-32' >
        <div className='max-w-[1240px] mx-auto text-stone-900'> 
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-1xl py-6 text-gray-500'>As a focused, independent company, we're building  on our foundation of excellence by creating
                        systems in new ways. Bringing  in the right partners, investing in our business, and working 
                        side-by-side with our customers to unlock potential.
                 </p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className=' bg-span-color py-8 rounded-xl shadow-xl'>
                   <p className='text-white font-bold text-5xl'>100%</p>
                   <p className='text-white'>Completion</p>
                </div>
                <div className='bg-span-color py-8 rounded-xl shadow-xl'>
                   <p className='text-white font-bold text-5xl'>24/7</p>
                   <p className='text-white'>Hosting Service</p> 
                </div>
                <div className='bg-span-color py-8 rounded-xl shadow-xl'>
                   <p className='text-white font-bold text-5xl'>20K</p>
                   <p className='text-white'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About