'use client';

import Breadcrumb from "@/app/components/breadcrumb";
import Banner from '@/app/img/banner.jpg';
import { useState } from "react";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaPhone, FaGlobe, FaEnvelopeOpen, FaMapMarkerAlt } from 'react-icons/fa';
import Placeholder from "@/app/img/placeholder.webp";
import { useUnits } from '@/app/context/Units';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function Admin() {

    const whatsappContacts = useUnits();
    const whatsappNumber = whatsappContacts.find(contact => contact.ponto === 'Reciclagem Santa Maria Fixo');
    const isMobile = useIsMobile();

    const [name, setName] = useState("");
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [website, setwebsite] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [mobilePhone, setMobilePhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [materials, setMaterials] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Cadastro de Pontos"
                page="Admin"
            />
            
            <div className="bg-white w-[90%] mx-auto shadow-2xl my-8 p-8 rounded-lg">
                <h1 className='w-[90%] mx-auto text-3xl font-bold text-center text-green-600 uppercase mb-8'>Cadastrar Pontos de coleta</h1>
                <form
                    onSubmit={handleSubmit}
                    className=""
                >
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-0.5">
                        <div className="w-[90%] mx-auto text-xl">
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Ponto</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    required
                                    value={name}
                                    placeholder=""
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    required
                                    value={cep}
                                    placeholder=""
                                    onChange={(e) => setCep(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    required
                                    value={address}
                                    placeholder=""
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Site</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    value={website}
                                    placeholder=""
                                    onChange={(e) => setwebsite(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    value={email}
                                    placeholder=""
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="border-t-2 border-gray-200 my-8 md:border-t-0 md:border-l-2 md:my-0 md:h-full">
                            {/* Div adicional para centralizar a borda */}
                        </div>

                        <div className="w-[90%] mx-auto text-xl">
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone Fixo</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    value={phone}
                                    placeholder=""
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    value={mobilePhone}
                                    placeholder=""
                                    onChange={(e) => setMobilePhone(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    value={instagram}
                                    placeholder=""
                                    onChange={(e) => setInstagram(e.target.value)}
                                />
                            </div>
                            <div className="w-[90%] mx-auto py-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Materias Descartados</label>
                                <textarea
                                    type="text"
                                    className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                                    value={materials}
                                    placeholder=""
                                    onChange={(e) => setMaterials(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto py-3">
                        <button
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md text-lg shadow-md transition duration-300 ease-in-out"
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}