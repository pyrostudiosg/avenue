import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Space = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>Data analytics</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Ana</h1>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates quia animi natus earum, sint, saepe doloremque dolores autem laboriosam molestias dolor nobis asperiores, ad nulla officia pariatur beatae possimus.
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Space