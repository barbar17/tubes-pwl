import React from 'react'

function EditAdditional() {
    return (
        <div className='bg-slate-200 flex flex-col grow p-14'>
            <span className='text-3xl mb-10 font-bold'>Laporan Pesanan Masuk</span>
            <div className=' grid grid-cols-2 gap-4 text-lg'>
                <div className='flex flex-col'>
                    <label>Jenis Paket</label>
                    <select className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white'>
                        <option>Engagment</option>
                        <option>Wedding</option>
                        <option>Pre Wedding</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label>Paket Detail</label>
                    <select className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white'>
                        <option>Bronze</option>
                        <option>Silver</option>
                        <option>Gold</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label>Framed Photo</label>
                    <input
                        className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white placeholder:text-gray-200'
                        type={'text'}
                        placeholder={'100000'}
                    />
                </div>

                <div className='flex flex-col'>
                    <label>Hardcover Album</label>
                    <input
                        className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white placeholder:text-gray-200'
                        type={'text'}
                        placeholder={'100000'}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Cinematic Video</label>
                    <input
                        className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white placeholder:text-gray-200'
                        type={'text'}
                        placeholder={'100000'}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Non-Edited File in USB</label>
                    <input
                        className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white placeholder:text-gray-200'
                        type={'text'}
                        placeholder={'100000'}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditAdditional