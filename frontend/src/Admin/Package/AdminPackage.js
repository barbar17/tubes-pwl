import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom'

function AdminPackage() {
    return (
        <div className='bg-slate-200 flex flex-col grow p-14'>
            <span className='text-3xl mb-10 font-bold'>Paket</span>
            <table className='text-center bg-white text-lg'>
                <thead className='h-14 text-xl border-b-2'>
                    <tr>
                        <th>ID</th>
                        <th>Jenis Paket</th>
                        <th>Paket Detail</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-14'>
                        <td>1</td>
                        <td>Wedding</td>
                        <td>Gold</td>
                        <td>100.000</td>
                        <td>
                            <Link to={"edit"}><button className='bg-blue-500 text-white p-1 rounded-md mr-2'><AiFillEdit className='text-2xl' /></button></Link>
                            <button className='bg-red-500 text-white p-1 rounded-md'><AiFillDelete className='text-2xl' /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminPackage