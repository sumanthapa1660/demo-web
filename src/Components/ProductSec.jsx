import React from 'react'

const ProductSec = () => {
    return (
        <div className='h-auto w-full flex flex-wrap flex-col items-center p-8'>
            <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                <p className='text-amber-50 font-bold text-3xl md:text-4xl flex text-center'>
                    Our Products
                </p>
                <div className='w-36 h-1 border-b-4 border-yellow-300 mt-2 rounded-2xl md:mt-4'>test</div>

                <div className='w-[90%] h-auto flex flex-wrap justify-around mt-20'>
                    <div className='w-64 flex flex-col items-center mb-12 p-2 cursor-pointer hover:border-b-2 hover:border-white'>
                        <img src='https://pwclonewebsite.vercel.app/assets/ourProdyuct/neurolab-icon.svg' />
                        <p className='text-2xl font-bold text-white'>PW Skills Lab</p>
                        <p className='text-xl font-bold text-gray-500 text-center'>Supercharge your project development with our robust lab.</p>
                    </div>

                    <div className='w-64 flex flex-col items-center mb-12  p-2 cursor-pointer hover:border-b-2 hover:border-white'>
                        <img src='https://pwclonewebsite.vercel.app/assets/ourProdyuct/jobPortal-icon.svg' />
                        <p className='text-2xl font-bold text-white'>Job Portal</p>
                        <p className='text-xl font-bold text-gray-500 text-center'>Use exceptional templates for a stand-out resume minus the sign up process.</p>
                    </div>

                    <div className='w-64 flex flex-col items-center mb-12 p-2 cursor-pointer hover:border-b-2 hover:border-white'>
                        <img src='https://pwclonewebsite.vercel.app/assets/ourProdyuct/Internship-icon.svg' />
                        <p className='text-2xl font-bold text-white'>Experienced Portal</p>
                        <p className='text-xl font-bold text-gray-500 text-center'>PW Skills self-paced experience portal prioritises hands-on training with 570+ intership projects.</p>
                    </div>

                    <div className='w-64 flex flex-col items-center mb-12 p-2 cursor-pointer hover:border-b-2 hover:border-white'>
                        <img src='https://pwclonewebsite.vercel.app/assets/ourProdyuct/affilitatePortal-icon.svg' />
                        <p className='text-2xl font-bold text-white'>Affiliate</p>
                        <p className='text-xl font-bold text-gray-500 text-center'>explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
                    </div>

                    <div className='w-64 flex flex-col items-center mb-12 p-2 cursor-pointer hover:border-b-2 hover:border-white'>
                        <img src='https://pwclonewebsite.vercel.app/assets/ourProdyuct/halloffame-icon.svg' />
                        <p className='text-2xl font-bold text-white'>Hall of fame</p>
                        <p className='text-xl font-bold text-gray-500 text-center'>Our Students placements and 100k+ career transitions speak volumes about our courses.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSec