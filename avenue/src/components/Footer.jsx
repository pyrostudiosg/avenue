import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
import PyroLogo from '../assets/Logo White.svg'

const Footer = () => {
  return (
    <div className='w-full mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black'>
        <div>
            <div className='flex'>
              <a href="/">
              <img className='h-8 pl-0' src={PyroLogo} alt="" />
              </a>
              
            </div> 
            <div className='mt-10'>
              <p className='font-FuturaLight text-[#989898]'>© 2021 - 2024 Pyro Studio Pte Ltd.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer