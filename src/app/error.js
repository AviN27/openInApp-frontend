"use client"

import { React } from 'react';

const error = () => {
  return (
    <main >
        <img src="/subtract.svg" alt="error" className='mt-48 mb-5 ml-10'/>
        <div className='font-montserrat text-white bg-regal-blue p-7 rounded-xl border border-black text-3xl lg:text-5xl w-full h-full text-center items-center'>
            <p >
                Please reload the page and try again!
            </p>
        </div>
        <p className='font-montserrat text-regal-blue text-sm lg:text-md text-center items-center py-4'>
            Contact the support team/ developer for more help.
        </p>
    </main>
  )
}

export default error