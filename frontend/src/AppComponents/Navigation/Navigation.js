import React from 'react'
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { Link } from './NavLink'

function Navigation() {

    const navigation = Link()

    return (
        <nav className="flex py-3 px-14 w-full bg-white items-center justify-between sticky top-0 z-20 ">
            <NavLink to={''}>
                <h1 className='font-bold tracking-widest'>HELLOWEDDING</h1>
            </NavLink>

            <div className="flex items-center justify-center">
                <ul className="flex text-sm">
                    {
                        navigation.map((item, index) => {
                            return (
                                <NavLink key={index} to={item.path} className={({ isActive }) => isActive ? item.active : item.notActive}>
                                    <span>{item.title}</span>
                                </NavLink>
                            )
                        })
                    }
                </ul>

                <div className="bg-[#d9d9d9] px-5 py-1 w-52 rounded-md">
                    <span>search</span>
                </div>

                <div className="p-2 bg-[#d9d9d9] rounded-md ml-5">
                    <FiMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navigation