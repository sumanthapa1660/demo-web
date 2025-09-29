import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-950 px-4 text-white pt-8 flex flex-col items-center md:flex-row flex-wrap justify-between md:px-12 py-5'>
      <div className='flex flex-col items-center'>
        <img className='w-40 h-16 text-white' src="https://jobs.pwskills.com/images/PWSkills-white.png" alt="" />
        <p className='my-4' >Email Us: support@pwskills.com</p>
        <img className='w-35 h-35' src="https://pwclonewebsite.vercel.app/assets/iso-9001-2015.svg" alt="" />
      </div>

      <div className='flex flex-col items-center md:block' >
        <h2 className='font-bold text-xl mt-4' >PW Skills</h2>
        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2' ></div>
        <div className='flex flex-col items-center md:block' >
          <p className='text-gray-500 hover:text-white cursor-default' >About Us</p>
          <p className='text-gray-500 hover:text-white cursor-default'>FAQs</p>
          <p className='text-gray-500 hover:text-white cursor-default' >Privacy Policy</p>
        </div>
      </div>

      <div className='flex flex-col items-center md:block' >
        <h2 className='font-bold text-xl mt-4' >Products</h2>
        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2' ></div>
        <div className='flex flex-col items-center md:block' >
          <p className='text-gray-500 hover:text-white cursor-default' >PW Skills Lab</p>
          <p className='text-gray-500 hover:text-white cursor-default' >Job Portal</p>
          <p className='text-gray-500 hover:text-white cursor-default' >Experience Portal</p>
          <p className='text-gray-500 hover:text-white cursor-default' >Become an affiliate</p>
          <p className='text-gray-500 hover:text-white cursor-default' >Hall of fame</p>
        </div>
      </div>

      <div className='flex flex-col items-center md:block' >
        <h2 className='font-bold text-xl mt-4' >Links</h2>
        <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2' ></div>
        <div className='flex flex-col items-center md:block' >
          <p className='text-gray-500 hover:text-white cursor-default' >Discord Channel</p>
          <p className='text-gray-500 hover:text-white cursor-default' >PW Youtube</p>
          <p className='text-gray-500 hover:text-white cursor-default' >Careers</p>
        </div>
      </div>
    </div>
  )
}

export default Footer