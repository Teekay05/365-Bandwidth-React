import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import supImg from '../assets/support.jpg'

function Support() {
  return (
    <div className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img src={supImg} alt="/" className='w-full h-full object-cover mix-blend-overlay'/>
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='pt-8 text-slate-300 uppercase text-center text-3xl'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='text-2xl text-gray-200 py-4'>Our global base of customers - including 75 of the Fortune 100 - our support
                    team wants you to partner with us for expertise, value, creation, speed and agility.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-stone-900'>
                <div className='bg-white shadow-2xl rounded-xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-12 bg-span-color rounded-lg mt-[-4rem] text-white'/>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 '>Make  a purchase on our good hosting discounts from month-to-month basis and our discounts.
                        Enjoy up to 20% discount on your first hosting service with us.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-span-color'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white shadow-2xl rounded-xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-12 bg-span-color rounded-lg mt-[-4rem] text-white'/>
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 '>Providing you with top-tier technical and user support for all devices and system troubleshooting.
                        Ensuring productivity and management of cloud-based systems.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-span-color'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white shadow-2xl rounded-xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-12 bg-span-color rounded-lg mt-[-4rem] text-white'/>
                        <h3 className='font-bold text-2xl my-6'>Media Inqueries</h3>
                        <p className='text-gray-600 '>Contact us on anything if you need assistance with the provision of systems or services that we can provide full informative 
                        details and information about our services.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-span-color'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support