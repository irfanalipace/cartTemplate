import React, { useState, useEffect } from 'react';
import { NAVLOGO } from '../assets';
import Button from '../component/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#Discover", label: "Discover" },
        { href: "#Special", label: "Special Deals" },
        { href: "#contact", label: "Contact Us" },
    ];

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src={NAVLOGO} alt="Logo" className='w-full h-10 object-cover' />
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-navColor px-3 py-2 rounded-md text-md font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="hidden md:flex">
                        <Button
                            type="button"
                            className="bg-tapc text-white px-8 py-4 rounded-lg w-32 h-12 flex items-center justify-center text-center font-semibold"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6 text-navColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 bg-formColor z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <button className="absolute top-4 right-4" onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6 text-navColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="flex flex-col items-center justify-center h-[50vh]">
                    {navLinks.map((link) => (
                        <a

                            key={link.href}
                            href={link.href}
                            className="text-navColor px-3 py-2 rounded-md text-lg font-bold my-2"
                            onClick={toggleMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        type="button"
                        className="bg-tapc text-white px-8 py-4 rounded-lg w-32 h-12 flex items-center justify-center text-center font-semibold mt-4"
                        onClick={toggleMenu}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
