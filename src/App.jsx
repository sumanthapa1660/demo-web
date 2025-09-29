// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className='bg-slate-800 grid place-content-center h-screen'>
//       <div >
//         <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
//           <div>
//             <img className='h-12 w-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-t-VNtmupnUxPR9EsDY5klIQYGTthnZNqPQ&s' alt='' />
//           </div>

//           <div>
//             <div className='font-medium text-xl'>
//               Tailwind Css
//               <p className='text-slate-400 text-sm'>By Suman Thapa</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className='bg-sky-400 rounded-md text-white mt-3 text-base p-1.5 cursor-pointer hover:bg-sky-600 active:bg-sky-400'>
//         Click me
//       </button>


//       <div className='text-center my-4'>
//         <p className='text-white md:text-yellow-400 sm:text-red-500' >
//           Hello World this is Suman here
//         </p>
//       </div>



//       {/* Responsive cart */}
//       <div className='mt-4'>
//         <div className='max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl'>
//           <div className='md:flex'>
//             <div>
//               <img src='https://images.pexels.com/photos/8346206/pexels-photo-8346206.jpeg?_gl=1*1kz9dux*_ga*OTk5MzAzNTIzLjE3NTgzODEzMzM.*_ga_8JE65Q40S6*czE3NTg5ODQ5MTIkbzUkZzEkdDE3NTg5ODUyMzAkajU5JGwwJGgw' alt='' className='h-48 w-full object-cover md:h-full md:w-7xl' />
//             </div>
//             <div className='p-8 '>
//               <p className='font-bold text-blue-500 md:text-red-500'>Hellow! here it is my responsive cart !</p>
//               <a href='#' className='block mt-2 font-bold text-black' >Tailwind CSS is amazing once you understand the <span className=' md:bg-yellow-400 md:p-[2.5px] md:px-[20px] bg-orange-400 p-[2.5px] px-[20px]'>power</span> of it.</a>
//               <p className='text-gray-700 font-medium'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus officiis architecto perferendis veritatis, recusandae nisi quod aut error quis pariatur, aspernatur voluptates incidunt commodi necessitatibus saepe! Inventore, unde commodi.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import NavAbout from './Components/Navbar/NavAbout'
import NavCont from './Components/Navbar/NavCont'

function App() {
  return (
    <Router basename="/demo-web">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutUS' element={<NavAbout />} />
        <Route path='/ContactUs' element={<NavCont />} />
      </Routes>
    </Router>
  )
}

export default App
