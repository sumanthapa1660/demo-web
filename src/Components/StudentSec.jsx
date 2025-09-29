import React from 'react'

const StudentSec = () => {
  return (
    <div className='h-auto w-full flex flex-wrap flex-col items-center p-8'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center'>
            <p className='text-amber-50 font-bold text-3xl md:text-4xl flex text-center'>
               Pure Hardwork, No Shortcuts!
            </p>
            <div className='w-36 h-1 border-b-4 border-yellow-300 mt-2 rounded-2xl md:mt-4'></div>

            <div className='w-full flex flex-wrap justify-evenly mt-20'>
                <div className='w-60 flex flex-col items-center mb-12'>
                    <img src='https://static.vecteezy.com/system/resources/previews/015/145/825/non_2x/exercise-book-icon-color-outline-vector.jpg' alt='' className='rounded-full w-44 h-44'/>
                    <p className='text-3xl font-bold text-white mt-5'>600+</p>
                    <p className='text-2xl font-bold text-gray-600'>Different Courses</p>
                </div>

                <div className='w-60 flex flex-col items-center mb-12'>
                    <img src='https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Student-3-512.png' alt='' className='rounded-full w-44 h-44'/>
                    <p className='text-3xl font-bold text-white mt-5'>700,000+</p>
                    <p className='text-2xl font-bold text-gray-600'>Student Enrolled</p>
                </div>

                <div className='w-65 flex flex-col items-center mb-12'>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/000/357/048/small_2x/3__2821_29.jpg' alt='' className='rounded-full w-44 h-44'/>
                    <p className='text-3xl font-bold text-white mt-5'>10,000+</p>
                    <p className='text-2xl font-bold text-gray-600'>Successfull Transition </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentSec