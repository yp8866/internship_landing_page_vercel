import React from 'react'

function AboutCard({info,src}) {
  return (
    <div className='bg-[#FF7724] flex gap-1 rounded-r-lg p-1 w-32'>
        <img src={src} alt="" />
        <p className='text-white'> {info}</p>
    </div>
  )
}

export default AboutCard