import React from 'react'
import { Rating,Button1,AboutCard } from '../index'
function Card({info,infosrc,number="1",name='builder',btext="",text1,text2,src='/img.jpg',value='9.9',rating='Excellent', stars='',div}) {
  return (
    <div className='my-10'>
    {
      info&&<AboutCard info={info} src={infosrc}/>
    }
    <section className='flex p-4 gap-10'>
    <div className='absolute rounded-full px-4 border py-2'>{number}</div>

    <div className='flex flex-col justify-center items-center'>
        <img className='w-4/5 h-2/4 ' src={src} alt="here" />
        <span className='text-gray-400 text-center'>{name}</span>
    </div>
    <div className='text-[#4B5665] w-1/2 text-justify'>
        <p><span className='font-semibold'>{btext}</span>{text1}</p>
        {div && <p className='text-blue-500 bg-[#F2F4F7] px-2 rounded-md max-w-20'>26% Off</p>
}
        <h1 className='font-semibold text-black mt-5'>Main highlights</h1>
        {div&& <div className='flex flex-col items-start'>

        <div className='bg-[#FFF4ED] p-4 rounded-md ml-4 w-full'>
          <p><span className='text-[#074786] bg-white px-2'>9.9</span>building responsive</p>
          <p><span className='text-blue-500 bg-white px-2'>9.9</span>building responsive</p>
          <p><span className='text-blue-500 bg-white px-2'>9.9</span>building responsive</p>
        </div>
        <div>
        <p className='mt-3 font-semibold text-black '>Why we love it</p>
        <p ><img src="/img4.png" className=' inline' alt="here" />Documentation</p>
        <p><img src="/img4.png" className=' inline' alt="here" />Easy Use</p>
        <p><img src="/img4.png" className=' inline' alt="here" />Out of box</p>
        </div>

        </div>
        }
        <p className='ml-6'>{text2}</p>
        <Button1 className='text-blue-400 text-sm hover:underline'>Show more ▿</Button1>
    </div>
    <div className='flex flex-col justify-between  items-center'>
    <div className='bg-[#F3F9FF] rounded-xl py-2 flex flex-col items-center gap-2 px-4' > 
    <p className='text-2xl text-[#074786]'>{value}</p>
    <p className='text-sm text-[#074786]'>{rating}</p>
    <div className='mb-2'>
      <Rating stars={stars}/>
    </div>
    </div>
    <Button1 className='px-16 py-2 bg-blue-500 rounded-lg  text-white hover:bg-blue-600'>View</Button1>
    </div>
    </section>
    </div>
  )
}

export default Card