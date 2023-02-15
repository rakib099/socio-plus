import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li className='font-semibold text-accent text-lg'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-accent text-lg'><Link to='/about'>About</Link></li>
        <li className='font-semibold text-accent text-lg'><Link to='/messages'>Messages</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl border-3 border-accent text-accent">Socio Plus</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className='menu menu-horizontal px-1'>
                    <li className='font-semibold text-accent text-lg'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold text-accent text-lg'><Link to='/signup'>Sign Up</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;