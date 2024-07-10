import logo from "../assets/sOCVfKv.png"
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const data = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Community',
        link: '/Community',
    },
    {
        title: 'EntryGame',
        link: '/EntryGame',
    },
    {
        title: 'IndieGame',
        link: '/IndieGame',
    }
];
const Header = () => {
    const [navs]=useState(data);
    return (
        <header className="header">
            <div className="wrapper">
                <div className="boxHeader">
                    <div className="headerLeft">
                        <div className="logo">
                            <img src={logo} alt="Sammy Image" width={88} height={20}/>
                        </div>
                        <p>Hieu Tran</p>
                    </div>
                    <div className="headerRight">
                        <ul>
                            {navs.map((nav, index) => (
                                <li key={index} className='li'>
                                    <NavLink
                                        to={nav.link}
                                        className='navs'>
                                        {nav.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    )
}
export default Header
