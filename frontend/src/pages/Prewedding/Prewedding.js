import React from 'react'

function Prewedding() {
    return (
        <div className='flex flex-col items-center p-10'>
            <h1 className='text-7xl text-gray-500'>Prewedding Journal</h1>
            <div className='w-4/5 shadow-md flex border-2 border-gray-200 my-10 p-10 flex-col justify-center items-center'>
                <img src='AGZ_1411.png' alt='fotowedding' className='w-11/12 object-cover' />
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

            <div className='w-4/5'>
                <div className='flex flex-col w-full items-center my-5'>
                    <span className='text-2xl'>A SOULFUL RENDEZVOUZ</span>
                    <hr className='w-3/5 border-2 my-2' />
                    <span className='text-lg text-gray-400'>ARUM & REZA WEDDING BY HELLO WEDDING</span>
                </div>

                <div className='w-full mb-10'>
                    <img src='AGZ_1411.png' alt='wedding2' className='h-[650px] w-full object-cover mb-10' />
                    <span className='text-xl'><i>Story about this wedding</i></span>
                </div>
            </div>

            <div className='w-full px-10 my-10'>
                <img src='photo3.jpg' alt='wedding4' className='w-full h-screen object-cover' />
            </div>

            <div className='w-full px-10 space-x-4 flex my-10'>
                <img src='grid7.jpg' alt='wedding4' className='w-1/2 h-screen object-cover' />
                <img src='grid6.jpg' alt='wedding4' className='w-1/2 h-screen object-cover' />
            </div>
        </div>
    )
}

export default Prewedding