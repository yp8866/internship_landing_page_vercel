import React from 'react'
import Button1 from '../buttons/Button1'
function Card2() {
  return (
    <div className='flex flex-col p-4 gap-3 justify-center m-4 items-center'>
        <img className='size-1/2' src="/img.jpg" alt="here"/>
        <div className='flex gap-2'>
            <p className='bg-[#F2F4F7] py-1 px-2 text-[#074786] rounded-md'>20% Off</p>
            <p className='bg-[#F2F4F7] py-1 px-2 text-[#074786] rounded-md'>Limited time </p>
        </div>
        <h1 className='text-semibold text-[#626E79]'>Webbuilder 1</h1>
        <p className='text-[#626E79
]'>Computer  Modern clasic with wix support</p>
        <div className='flex gap-2 items-baseline '>
            <p className='text-[#5C6874] text-lg '>$39.96</p>
            <p className='text-[#9FA9B3] text-sm '>$49.96</p>
            <p className='text-[#EF4C5D] text-sm '>(20% Off)</p>
        </div>
        <Button1 className='text-white bg-blue-500 w-full py-2 rounded-md hover:bg-blue-600'>View Deal</Button1>

    </div>
  )
}

export default Card2