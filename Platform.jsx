import { CheckCircleIcon } from '@heroicons/react/outline'
import React from 'react'
function Platform() {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center text-stone-900'>All-In-One-Platform</h2>
            <p className='text-1xl py-8 text-gray-500 text-center'>365 Bandwidth innovates & facilitates digital experiences, so you stay focused on
              what you do best, win as an individual, & succeed as a business.
            </p>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'> 
              <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Provisioning, Automation & Orchestration</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Application migration, VM Images/instances, Configuration management.</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Security & Identity</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>IAM, Encryption, Mobile/endpoint security</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Cost Management</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Cloud instance right sizing, user chargerback and billing.</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Governance & Policy</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Risk assessment/threat analysis, Audits, Service and resources management.</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Monitoring & Metering</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Storage, Networks, Applications, Compute</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Service Request Management</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Initiation, Approval, Fulfilment, Management</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Service Level Management</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Establish, Implement, Review, Manage</p>
                  </div>
                </div>

                <div className='flex'>
                <div>
                <CheckCircleIcon className='w-7 mr-4 text-green-600'/> 
                </div>
             
                  <div>
                    <h3 className='font-bold text-lg text-stone-900'>Cloud Migration</h3>
                    <p className='text-lg pt-2 pb-4 text-gray-500'>Refactor, Replatform, Rehost, Repurchase</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Platform