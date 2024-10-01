import React from 'react'

const Footer = () => {
  return (
    <div className='px-4 md:px-10 py-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-1'>
            <h1 className='text-[16px] font-bold'>COAL SLATE</h1>
            <p className='text-gray-600 text-sm lg:text-[16px]'>&copy; All rights reserved 2024</p>
        </div>
    </div>
  )
}

export default Footer