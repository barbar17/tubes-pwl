import React from 'react'

function Pesanan() {
    return (
        <div className='bg-slate-200 flex flex-col grow p-14'>
            <span className='text-3xl mb-10 font-bold'>Laporan Pesanan Masuk</span>
            <table className='text-center bg-white text-lg'>
                <thead className='h-14 text-xl border-b-2'>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>HP</th>
                        <th>Package</th>
                        <th>Package Detail</th>
                        <th>Adds On</th>
                        <th>Waktu</th>
                        <th>Lokasi</th>
                        <th>Bukti Pembayaran</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-14'>
                        <td>1</td>
                        <td>Widodo</td>
                        <td>081234567890</td>
                        <td>Wedding</td>
                        <td>Gold</td>
                        <td>Photo</td>
                        <td>12-12-2022 07:00</td>
                        <td>Pantai Indah Kapuk</td>
                        <td>Lihat</td>
                    </tr>
                    <tr className='h-14'>
                        <td>1</td>
                        <td>Widodo</td>
                        <td>081234567890</td>
                        <td>Wedding</td>
                        <td>Gold</td>
                        <td>Photo</td>
                        <td>12-12-2022 07:00</td>
                        <td>Pantai Indah Kapuk</td>
                        <td>Lihat</td>
                    </tr>
                    <tr className='h-14'>
                        <td>1</td>
                        <td>Widodo</td>
                        <td>081234567890</td>
                        <td>Wedding</td>
                        <td>Gold</td>
                        <td>Photo</td>
                        <td>12-12-2022 07:00</td>
                        <td>Pantai Indah Kapuk</td>
                        <td>Lihat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Pesanan