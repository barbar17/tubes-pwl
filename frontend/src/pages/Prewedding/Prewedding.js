import React from 'react'

function Prewedding() {
    return (
        <div className='w-full flex flex-col items-center p-10'>
            <h1 className='text-7xl text-gray-500'>Pre Wedding Journal</h1>
            <div className='w-4/5 shadow-md flex border-2 border-gray-200 my-10 p-10 flex-col justify-center items-center'>
                <img src='grid2.jpg' alt='fotowedding' className='w-11/12 object-cover' />
                <div className='flex text-center w-full py-5'>
                    <div className='flex flex-col w-1/5 justify-center items-center'>
                        <span className='text-xl'>15</span>
                        <span className='text-base'>AUG</span>
                        <span className='text-sm'>2022</span>
                    </div>
                    <div className='flex flex-col w-4/5'>
                        <span className='text-2xl'>A SOULFUL RENDEZVOUZ</span>
                        <span className='text-lg text-gray-400'>ARUM & REZA WEDDING BY HELLO WEDDING</span>
                        <span className='text-xl py-5'>IT WASN'T ONLY THEIR HANDS THAT INTERTWINED, BUT HEARTS AND SOULS</span>
                        <span className='text-lg text-gray-400 pt-5'><i>READ MORE</i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prewedding