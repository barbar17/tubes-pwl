import React from 'react'

function Potrait() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full h-screen flex gap-3 items-center justify-center'>
                <img className='w-1/3 h-full object-cover' src='potrait/potrait1.jpg' />
                <img className='w-1/3 h-full object-cover' src='potrait/potrait2.jpg' />
                <img className='w-1/3 h-full object-cover' src='potrait/potrait3.jpg' />
            </div>

            <div className='flex flex-col w-full h-screen py-10 px-20 items-center '>
                <h1 className='text-5xl text-gray-500 py-10'>The Potrait Photography Experience</h1>
                <div className='flex w-full h-4/5 gap-10'>
                    <img className='w-1/3 h-full object-cover' src='potrait/potrait4.jpg' />
                    <img className='w-1/3 h-full object-cover' src='potrait/potrait5.jpg' />
                    <div className='w-1/3 text-center p-10'>
                        <h1 className='text-5xl mb-5'>Lorem Ipsum</h1>
                        <span className='text-2xl text-gray-500'>Est laboris est aute incididunt est aute reprehenderit consectetur occaecat et.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Potrait