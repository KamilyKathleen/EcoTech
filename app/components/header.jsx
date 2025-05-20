"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaInstagram, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/public/logo.png";
import LogoWhite from "@/public/logo-white.png";
import Link from "next/link";

export default function Header() {

    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [color, setColor] = useState(false);

    // Checks if the screen is large or small 
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Opens and closes the hamburguer menu on small screens
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Changes header color depending on y axis of the screen
    const changeColor = () => {
        if (window.scrollY >= 150) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    // Checks the user's scrolling of the window
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, []);

    // Large screen's header
    const HeaderLarge = () => (
        <nav className={color ? 'fixed z-20 w-full bg-white shadow-md' : 'fixed z-20 w-full text-white'}>
            <div className="mx-auto flex items-center justify-between py-4 w-[90%]">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex flex-col items-center"
                    >
                        <Image
                            src={color ? Logo : LogoWhite}
                            className="size-20"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <ul className="flex gap-4 mx-auto font-bold text-xl">
                    <li className="hover:border-b-2 hover:border-green-700">
                        <Link
                            href="/"
                            className="px-3 py-2"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="hover:border-b-2 hover:border-green-700">
                        <Link
                            href='/pages/about'
                            className="px-3 py-2"
                        >
                            Sobre
                        </Link>
                    </li>
                    {/* <li className="hover:border-b-2 hover:border-green-700">
                        <Link
                            href='/pages/information'
                            className="px-3 py-2"
                        >
                            Informações
                        </Link>
                    </li> */}
                    <li className="hover:border-b-2 hover:border-green-700">
                        <Link
                            href='/pages/collectionPoints'
                            className="px-3 py-2"
                        >
                            Pontos de Coleta
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    {/* <Link
                        href="https://www.instagram.com/emilereciclagem?igsh=MWdpOTd3cGlkcXM4YQ=="
                        target="_blank"
                        className="bg-casal-yellow p-2 rounded-full hover:bg-pink-700 hover:text-white"
                    >
                        <FaInstagram className="size-7" />
                    </Link>
                    <Link
                        href="https://emile.net.br/"
                        target="_blank"
                        className="p-2 rounded-full hover:bg-green-700 hover:text-white"
                    >
                        <FaGlobe className="size-7" />
                    </Link> */}
                    <Link
                        href='/pages/collectionPoints'
                        className="px-4 py-2 font-semibold bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center justify-center"
                    >
                        Onde Descartar
                    </Link>
                </div>
            </div>
        </nav>
    );

    // Small screen's header
    const HeaderSmall = () => (
        <nav className={`fixed z-20 w-full ${menuOpen ? 'bg-white' : color ? 'bg-white shadow-md' : 'text-white'}`}>
            <div className="container mx-auto flex items-center justify-between py-4 w-[90%]">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex flex-col items-center"
                    >
                        <Image
                            src={menuOpen || color ? Logo : LogoWhite}
                            className="size-20"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <button onClick={toggleMenu} className="text-2xl hover:bg-green-700 rounded-full p-2">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {menuOpen && (
                <div className="bg-white flex flex-col w-full h-screen mt-10">
                    <ul className="flex flex-col space-y-8 font-bold text-xl text-center">
                        <li>
                            <Link
                                href="/"
                                className="px-3 py-2 hover:border-b-2 hover:border-green-700"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <hr className="w-[60%] mx-auto" />
                        <li>
                            <Link
                                href='/pages/about'
                                className="px-3 py-2 hover:border-b-2 hover:border-green-700"
                                onClick={toggleMenu}
                            >
                                Sobre
                            </Link>
                        </li>
                        <hr className="w-[60%] mx-auto" />
                        {/* <li>
                            <Link
                                href='/pages/information'
                                className="px-3 py-2 hover:border-b-2 hover:border-green-700"
                                onClick={toggleMenu}
                            >
                                Informações
                            </Link>
                        </li>
                        <hr className="w-[60%] mx-auto" /> */}
                        <li>
                            <Link
                                href='/pages/collectionPoints'
                                className="px-3 py-2 hover:border-b-2 hover:border-green-700"
                                onClick={toggleMenu}
                            >
                                Pontos de Coleta
                            </Link>
                        </li>
                        <hr className="w-[60%] mx-auto" />
                    </ul>
                    <div className="flex items-center gap-2 justify-center mt-8 mr-2">
                        {/* <Link
                            href="https://www.instagram.com/emilereciclagem?igsh=MWdpOTd3cGlkcXM4YQ=="
                            target="_blank"
                            className="p-2 rounded-full hover:bg-pink-700 hover:text-white"
                        >
                            <FaInstagram className="size-6" />
                        </Link>
                        <Link
                            href="https://emile.net.br/"
                            target="_blank"
                            className="p-2 rounded-full hover:bg-green-700 hover:text-white"
                        >
                            <FaGlobe className="size-6" />
                        </Link> */}
                        <Link
                            href='/pages/collectionPoints'
                            className="px-4 py-2 font-semibold bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center justify-center"
                            onClick={toggleMenu}
                        >
                            Onde Descartar
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );

    // Returns correct header depending on screen size
    return (
        <>
            {isLargeScreen ? <HeaderLarge /> : <HeaderSmall />}
        </>
    );
}
