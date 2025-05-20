'use client'

import { FaRegEnvelopeOpen, FaInstagram, FaGlobe, FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";
import Logo from '@/public/logo.png';
import LogoWhite from "@/public/logo-white.png";

export default function Footer() {

    return (
        <footer className="bg-green-700 text-center py-6 mt-8 w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto justify-center items-center py-3">
                    <div className="w-full text-center mb-4 md:mb-0">
                        <Link href="/" className="no-underline">
                            <Image
                                src={LogoWhite}
                                alt="Logo"
                                className="mx-auto size-32"
                            />
                        </Link>
                    </div>
                    <div className="w-full items-center py-6">
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/"
                                className="text-xl text-white hover:underline"
                            >
                                Home
                            </Link>
                            <Link
                                href='/pages/about'
                                className="text-xl text-white hover:underline"
                            >
                                Sobre
                            </Link>
                            {/* <Link
                                href='/pages/information'
                                className="text-xl text-white no-underline hover:underline transition-colors duration-200"
                            >
                                Informações
                            </Link> */}
                            <Link
                                href='/pages/collectionPoints'
                                className="text-xl text-white hover:underline"
                            >
                                Pontos de Coleta
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="flex gap-8">
                            {/* <a href="https://emile.net.br/" target={"_blank"} className="text-white hover:text-blue-500 hover:bg-white hover:rounded-xl">
                                <FaGlobe size={32} />
                            </a>
                            <a href="https://www.instagram.com/emilereciclagem?igsh=MWdpOTd3cGlkcXM4YQ==" target={"_blank"} className="text-white hover:text-pink-500 hover:bg-white hover:rounded-xl">
                                <FaInstagram size={32} />
                            </a> */}
                            <Link
                                href='/pages/collectionPoints'
                                className="text-xl text-white border-2 p-2 rounded hover:bg-white hover:text-green-600"
                            >
                                <FaRegTrashAlt size={24} className="inline"/> &nbsp;
                                Onde Descartar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4 text-gray-500 pt-4">
                    <p className="text-white">&copy; {new Date().getFullYear()} EcoTech Una. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
