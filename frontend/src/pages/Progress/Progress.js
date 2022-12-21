import React from 'react'

function Progress() {
    return (
        <div className='flex m-20 space-x-10'>
            <div className='w-1/2'>
                <div className='w-full flex items-center justify-center text-4xl tracking-wider text-[#6A6A6A]'>
                    <h1>Progress</h1>
                </div>

                <div className='flex flex-col my-4'>
                    <span className='text-3xl tracking-widest'>HELLO</span>
                    <span className='text-xl'>Thank You for Trusting Us</span>
                </div>

                <div className='border-2 p-4'>
                    <div className='grid grid-cols-[repeat(2,100px)]'>
                        <span className='text-[#bdbdbd]'>Name</span>
                        <div className='flex flex-col'>
                            <span>widodo@gmail.com</span>
                            <span>081234567890</span>
                        </div>
                    </div>

                    <hr className='h-1 border-0 bg-[#dadada] rounded-lg my-2' />

                    <div className='grid grid-cols-[repeat(3,100px)]'>
                        <span className='text-[#bdbdbd]'>Details</span>
                        <div className='flex flex-col col-span-2'>
                            <span>Widodo - 081234567890</span>
                            <span>Pantai Indah Kapuk</span>
                            <span>Senin, 18 Agustus 2022 - 10.00</span>
                        </div>
                    </div>

                    <hr className='h-1 border-0 bg-[#dadada] rounded-lg my-2' />

                    <div className='grid grid-cols-[repeat(5,100px)] grid-rows-2'>
                        <span className='text-[#bdbdbd]'>Package</span>
                        <div className='flex flex-col col-span-2'>
                            <span>Pre Wedding</span>
                            <span>Gold</span>
                            <span>Video Documentation</span>
                        </div>
                        <div className='flex flex-col col-span-2 justify-end'>
                            <span>IDR 3,500,000</span>
                            <span>IDR 2,000,000</span>
                        </div>

                        <span className='text-[#bdbdbd]'>Total</span>
                        <div className='flex flex-col col-span-4 items-end'>
                            <span>IDR 5,500,000</span>
                        </div>
                    </div>

                    <hr className='h-1 border-0 bg-[#dadada] rounded-lg my-2' />

                    <div className='grid grid-cols-[repeat(5,100px)]'>
                        <span className='text-[#bdbdbd]'>Progress</span>
                        <div className='flex flex-col col-span-2'>
                            <span>Payment</span>
                            <span>Team Verification</span>
                            <span>Sneak Peak Edited Photos</span>
                            <span>Softfile Photos</span>
                            <span>Cinematic Videos</span>
                            <span>Adss On</span>
                            <span>Printed Photos</span>
                        </div>
                        <div className='flex flex-col col-span-2'>
                            <span>Almost Done</span>
                            <span>Waiting for Verification</span>
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img src="photo2.jpg" alt='foto' className='object-cover h-[700px] w-[550px] flex' />
            </div>
        </div>
    )
}

export default Progress