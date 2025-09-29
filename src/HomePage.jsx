import React from 'react'
import NavHeader from './Components/Navbar/NavHeader';
import HeroSec from './Components/HeroSec';
import StudentSec from './Components/StudentSec';
import ProductSec from './Components/ProductSec';
import Footer from './Components/Footer';

function HomePage() {
   
  return (
    <div className='bg-slate-900 h-full w-full'>
      <NavHeader />
      <HeroSec/>
      <StudentSec/>
      <ProductSec/>
      <Footer/>
    </div>
  )
}

export default HomePage