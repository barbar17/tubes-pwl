import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { BsWhatsapp, BsInstagram, BsYoutube, BsLine } from 'react-icons/bs'

function About() {
    return (
        <div className='w-full min-h-screen flex flex-col py-10 px-20'>
            <h1 className='text-5xl text-gray-400 tracking-wider'>About</h1>
            <div className='flex h-[700px] w-full justify-between mb-5'>
                <div className='h-full flex flex-col py-10'>
                    <b className='text-5xl py-5 font-normal tracking-widest'>HELLO</b>
                    <p className='text-xl'>
                        In HelloWedding, we believe that wedding should be intimate and personal.<br />
                        Every artwork that we created is imbued by the dreams and values of the couple that we worked with.<br />
                        Let us help you painting your perfect moment into a piece that will always be remembered.
                    </p>
                </div>
                <div className='h-[700px] w-[600px] bg-red-500'>
                    <img src='grid1.jpg' alt='aboutfoto' className='h-full w-full object-bottom object-cover' />
                </div>
            </div>

            <h1 className='text-5xl text-gray-400 tracking-wider'>Our Studio</h1>
            <div className='flex justify-between min-h-screen'>
                <div className='flex flex-col'>
                    <p className='text-4xl mt-10 mb-5'>
                        “We believe that wedding should be intimate and personal”
                    </p>

                    <p className='text-3xl mb-20'>
                        -   HelloWedding Studio Lab
                    </p>

                    <div className='flex space-x-2 my-5'>
                        <MdLocationOn className='text-2xl' />
                        <p className='text-xl'>
                            Jl. Melati No.1, Rw. Laut, Kec. Tanjungkarang Timur<br />
                            Kota Bandar Lampung, Lampung 35213
                        </p>
                    </div>

                    <div className='flex flex-col my-10 space-y-5'>
                        <div className='flex items-center space-x-2 text-lg'>
                            <BsWhatsapp className='text-2xl' />
                            <span>0812-3456-7890</span>
                        </div>
                        <div className='flex items-center space-x-2 text-lg'>
                            <BsInstagram className='text-2xl' />
                            <span>@hello.world</span>
                        </div >
                        <div className='flex items-center space-x-2 text-lg'>
                            <BsLine className='text-2xl' />
                            <span>@hello.world</span>
                        </div >
                        <div className='flex items-center space-x-2 text-lg'>
                            <BsYoutube className='text-2xl' />
                            <span>hello world</span>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 items-center justify-center flex'>
                    <img src='map1.png' alt='map' className='h-[400px] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default About