import React from 'react'
import { CheckIcon} from '@heroicons/react/solid'
function Pricing() {
  return (
    <div className='w-full my-24 text-white'>
        <div className='w-full h-[800px] bg-[#091029] absolute mix-blend-overlay'></div>

        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='py-8 text-center text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                
                <p className=' text-1xl text-white '>Now with all packages: $100 starting credit form the first month</p>
                
            </div>

            <div className='grid md:grid-cols-3'>
                <div className='bg-white m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-span-color text-white text-sm rounded-2xl'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold flex text-stone-900 py-4'>$12<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-1xl py-8 text-slate-500'>Easy start on the cloud</p>
                    <div className='text-xl'>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>RAM - 1GB</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Processor - 1 Core</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Storage - 25GB</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Bandwidth - 1TB</p>
                       
                       
                        <button className='w-full py-4 my-4'>Buy Now</button>
                    </div>
                </div>

                <div className='bg-white m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-span-color text-white text-sm rounded-2xl'>Enhanced</span>
                    <div>
                        <p className='text-6xl font-bold flex text-stone-900 py-4'>$24<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-1xl py-8 text-slate-500'>Extra hosting previledge</p>
                    <div className='text-xl'>
                    <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>RAM - 2GB</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Processor - 1 Core</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Storage - 50GB</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Bandwidth - 2TB</p>
                       
                        <button className='w-full py-4 my-4'>Buy Now</button>
                    </div>
                </div>
                
                <div className='bg-white m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-span-color text-white text-sm rounded-2xl'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold flex text-stone-900 py-4'>$65<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-1xl py-8 text-slate-500'>All round package</p>
                    <div className='text-xl'>
                    <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>RAM - 4GB</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Processor - 1 Core</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Storage - 80GB</p>
                        <p className='text-gray-500 flex'><CheckIcon className='w-5 mr-5 text-green-600'/>Bandwidth - 4TB</p>
                       
                        <button className='w-full py-4 my-4'>Buy Now</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Pricing