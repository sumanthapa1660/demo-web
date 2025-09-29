import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavHeader = () => {

  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
  }

  const gotoAbout = () => {
    navigate('/AboutUS');
  }  

  const gotoContact = () => {
    navigate('/ContactUs');
  } 

  return (
    <nav className='w-full h-14 bg-slate-700 flex justify-between items-center px-4 md:px-4'>
      <div className='font-bold text-2xl text-white cursor-pointer' onClick={gotoHome}>
        PW Skills
      </div>
      <ul className='md:flex md:gap-4 md:font-medium hidden'>
        <li className='cursor-pointer hover:underline underline-offset-6 text-white md:text-rose-500' onClick={gotoHome}>Home</li>
        <li className='cursor-pointer hover:underline underline-offset-6 text-white' onClick={gotoAbout}>About Us</li>
        <li className='cursor-pointer hover:underline underline-offset-6 text-white' onClick={gotoContact}>Contact Us</li>
      </ul>
      <div className='bg-amber-500 px-2.5 py-1 rounded-sm font-medium text-white cursor-pointer md:block hidden'>
        Login/Sign Up
      </div>
      <div className='md:hidden'>
        <a className='text-4xl font-bold' href='#'>&#8801;</a>
      </div>
    </nav>
  )
}

export default NavHeader