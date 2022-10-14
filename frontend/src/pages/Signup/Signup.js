import React from 'react'

function Signup() {
    return (
        <div className='flex w-full h-screen relative'>
            <img src='grid3.jpg' alt='fotologin' className='w-full h-full object-cover object-center' />
            <div className='w-[400px] h-full absolute right-0 z-10 bg-white opacity-95 flex flex-col justify-center items-center p-10   '>
                <h1 className='text-3xl font-bold my-5'>Sign Up</h1>
                <form className='flex flex-col w-full' >
                    <span className='font-bold my-3'>Username</span>
                    <input
                        type={'email'}
                        placeholder="Ex: Jhon Doe"
                        className='w-full p-3 box-border bg-transparent rounded border-2 text-sm'
                        required
                    />
                    <span className='font-bold my-3'>Email</span>
                    <input
                        type={'email'}
                        placeholder="Ex: myemail@mail.com"
                        className='w-full p-3 box-border bg-transparent rounded border-2 text-sm'
                        required
                    />
                    <span className='font-bold my-3'>Password</span>
                    <input
                        type={'password'}
                        placeholder="Enter Password"
                        className='w-full p-3 box-border bg-transparent rounded border-2 text-sm'
                        required
                    />
                    <button className='w-full bg-[#646464] my-8 p-2 text-white rounded-md text-sm font-bold'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup