import React, { useState, useEffect } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div class="navbar">
        <div className='h-24 max-w-[1240px] mx-auto text-white mt-4'>
            <ul className='sticky:top-10 flex justify-center items-center hidden md:flex'>
                <li className='p-12'><a href="#Home">Home</a></li>
                <li className='p-12'><a href="#Projects">Projects</a></li>
                <li className='p-12'><a href="#About">About Me</a></li>
                <li className='p-12'><a href="#Contact">Contact</a></li>
            </ul>
            <div onClick={handleNav} className='sticky:top-20 mt-10 mr-10 flex justify-end items-end block md:hidden'>
                {!nav ? <FiAlignJustify size={20}/> : <FiChevronUp size={30} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900' : 'fixed hidden'} > 
                <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'><a href="#Home">Home</a></li>
                <li className='p-4 border-b border-gray-600'><a href="#Projects">Projects</a></li>
                <li className='p-4 border-b border-gray-600'><a href="#About">About Me</a></li>
                <li className='p-4 border-b border-gray-600'><a href="#Contact">Contact</a></li>
            </ul>
            </div>
        </div>
        </div>
    )
}

export default Header;