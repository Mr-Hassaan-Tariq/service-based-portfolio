import React, { useState, useEffect, useRef } from 'react'
import Router from 'next/router';
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from 'next/router'
export default function Navbar() {
    const router = useRouter()
    const [scrollColor, setScrollColor] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };


    return (
        <div >
            <header id="header" className={`fixed-top`} style={{ backgroundColor: "rgba(40, 58, 90, 0.9)" }}>
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a onClick={() => router.asPath('/')}><img src='/images/Binary-Burst-logo-white.png' /></a></h1>
                    <nav id="navbar" className={`navbar ${showMenu && 'navbar-mobile'}`}>
                        <ul>
                            <li><a className={`nav-link scrollto ${router.asPath == '/' ? 'active' : ''}`} onClick={() => { setShowMenu(false); router.push('/') }} role='button'>Home</a></li>
                            <li><a className={`nav-link scrollto ${router.asPath.includes('/services') ? 'active' : ''}`} onClick={() => { setShowMenu(false); router.push('/services') }} role='button'>Services</a></li>
                            <li><a className={`nav-link scrollto ${router.asPath.includes('/project') ? 'active' : ''}`} onClick={() => { setShowMenu(false); router.push('/project') }} role='button'>Projects</a></li>
                            <li><a className={`nav-link scrollto ${router.asPath == '/about' ? 'active' : ''}`} onClick={() => { setShowMenu(false); router.push('/about') }} role='button'>About Us</a></li>
                            <li><a className={`nav-link scrollto ${router.asPath == '/contact' ? 'active' : ''}`} onClick={() => { setShowMenu(false); router.push('/contact') }} role='button'>Contact Us</a></li>
                        </ul>
                        {!showMenu ? <HiBars3BottomRight className='mobile-nav-toggle' onClick={() => setShowMenu(true)} /> : <RxCross1 className='mobile-nav-toggle' onClick={() => setShowMenu(false)} />}
                    </nav>
                </div>
            </header>


        </div>
    )
}

