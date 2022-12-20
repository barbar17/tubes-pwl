import React from 'react'

function EditPackage() {
    return (
        <div className='bg-slate-200 flex flex-col grow p-14'>
            <span className='text-3xl mb-10 font-bold'>Laporan Pesanan Masuk</span>
            <div className='flex flex-col w-80'>
                <label>Jenis Paket</label>
                <select className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white'>
                    <option>Engagment</option>
                    <option>Wedding</option>
                    <option>Pre Wedding</option>
                </select>

                <label>Paket Detail</label>
                <select className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white'>
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                </select>

                <label>harga</label>
                <input
                    className='border ml-2 border-slate-200 rounded-md text-lg p-2 bg-slate-400 text-white placeholder:text-gray-200'
                    type={'text'}
                    placeholder={'100000'}
                />
            </div>
        </div>
    )
}

export default EditPackage