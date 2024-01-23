import React from 'react'

const Steps = () => {
  return (
    <div className='max-w-5xl mx-auto px-6'>
       
        <div className=' my-20'>
            <div className="grid my-8 md:grid-cols-2 md:gap-x-4 justify-center items-center">
                <div className='md:order-2'>
                    <img src="/img.svg" alt="" srcset="" />
                </div>
                <div className='md:order-1'>
                   <p className="md:text-4xl text-3xl font-semibold">Our Vision</p>
                   <img src="/line.svg" className='my-4' alt="" srcset="" />
                   <p className="text-gray-500 md:text-lg text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
            <div className="grid my-8 md:grid-cols-2 md:gap-x-4 justify-center items-center">
                <div className=''>
                    <img src="/img.svg" alt="" srcset="" />
                </div>
                <div className=''>
                   <p className="md:text-4xl text-3xl font-semibold">Our Mission</p>
                   <img src="/line.svg" className='my-4' alt="" srcset="" />
                   <p className="text-gray-500 md:text-lg text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Steps