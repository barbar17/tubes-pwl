import React from 'react'
import { TbClipboardText } from 'react-icons/tb'
import { FaBoxes } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

function Sidenav() {
    return (
        <div className='flex flex-col h-screen bg-[#283342] text-white w-1/6 items-center justify-between'>
            <h1 className='h-14 w-full px-4 py-8 bg-black tracking-wider flex items-center justify-start text-2xl'>HELLO WEDDING</h1>
            <nav className='flex flex-col text-lg grow w-full py-8'>
                <NavLink to={'pesanan'} className={({ isActive }) => isActive ? 'bg-[#009099] cursor-pointer p-6 text-xl flex items-center' : 'hover:bg-[#009099] cursor-pointer p-6 text-xl flex items-center'}><TbClipboardText className='text-2xl mr-2' />Pesanan</NavLink>
                <NavLink to={'paket'} className={({ isActive }) => isActive ? 'bg-[#009099] cursor-pointer p-6 text-xl flex items-center' : 'hover:bg-[#009099] cursor-pointer p-6 text-xl flex items-center'}><GoPackage className='text-2xl mr-2' /> Daftar Paket</NavLink>
                <NavLink to={'additional'} className={({ isActive }) => isActive ? 'bg-[#009099] cursor-pointer p-6 text-xl flex items-center' : 'hover:bg-[#009099] cursor-pointer p-6 text-xl flex items-center'}><FaBoxes className='text-2xl mr-2' />Additional</NavLink>
            </nav>
            <div className='h-14'>
                <button className='bg-red-500 py-2 px-3 rounded-md hover:bg-red-700'>Log Out</button>
            </div>
        </div>
    )
}

export default Sidenav