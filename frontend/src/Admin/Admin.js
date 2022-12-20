import React from 'react'
import Sidenav from './Sidenav/Sidenav'
import { Outlet } from 'react-router-dom';

function Admin() {
    return (
        <div className='flex'>
            <Sidenav />

            <Outlet />
        </div>
    )
}

export default Admin