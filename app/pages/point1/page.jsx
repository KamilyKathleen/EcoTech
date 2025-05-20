"use client";

import Breadcrumb from "@/app/components/breadcrumb";
import Banner from '@/app/img/banner.jpg';
import RSM from '@/app/img/reciclagem_santa_maria2.png';
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaPhone, FaGlobe, FaEnvelopeOpen, FaMapMarkerAlt } from 'react-icons/fa';
import Link from "next/link";
import Placeholder from "@/app/img/placeholder.webp";
import { useUnits } from '@/app/context/Units';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function About() {

    const whatsappContacts = useUnits();
    const whatsappNumber = whatsappContacts.find(contact => contact.ponto === 'Reciclagem Santa Maria Fixo');
    const isMobile = useIsMobile();

    return (
        <>
            {/* Banner */}
            <Breadcrumb
                image={Banner}
                title="Reciclagem Santa Maria"
                page="Reciclagem Santa Maria"
            />

            {/* Section 1 */}
            <div className="py-8 my-4">
                <div className="w-[90%] mx-auto space-y-4 flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 p-4 space-y-4">
                        <h2 className="text-2xl font-semibold text-center mb-4">Reciclagem Santa Maria</h2>
                        <p className="text-lg md:text-justify leading-relaxed">Uma empresa mineira, fundada nos anos 60, formada por laços de familiaridade e sólida estrutura profissional. Assim é o grupo Reciclagem Santa Maria, responsável pelo atendimento das principais indústrias do estado de Minas Gerais e atuante também nos estados de São Paulo e Rio de Janeiro.</p>
                        <p className="text-lg md:text-justify leading-relaxed">Para melhor atender seus clientes a Reciclagem Santa Maria possui 10 Unidades localizadas nos municípios de Varginha (Sede), Belo Horizonte, Contagem, Sete Lagoas, Pouso Alegre, Lavras, Extrema e Guaxupé.</p>
                        <p className="text-lg md:text-justify leading-relaxed">Especializada em gerenciamento de resíduos industriais e transformar os mesmos em matéria prima, a Santa Maria evolui constantemente seu processo de gestão, segregação, transformação, destinação final e formação de novos recursos de matéria e fontes de energia.</p>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <Image src={RSM} alt="Empresa Emile" className="rounded-lg shadow-lg max-h-[500px] w-auto" />
                    </div>
                </div>
            </div>

            {/* Section 2 / Card */}
            <div className="my-8 p-4">
                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center shadow-2xl p-8">
                    <div className="w-[95%] mx-auto text-xl mb-8 md:mb-0 md:border-r-2 border-gray-100">
                        <h2 className="uppercase text-2xl">Informações e</h2>
                        <h3 className='uppercase text-3xl text-green-600 font-bold mb-8'>Contatos</h3>
                        <div className="space-y-8 mr-0 md:mr-4">
                            <p className="text-sm md:text-lg">
                                <Link
                                    href={`tel:+${whatsappNumber.contato}`}
                                    target="_blank"
                                    className="group inline-flex items-center"
                                >
                                    <FaPhone className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                    <span className="group-hover:underline transition duration-200">{whatsappNumber.formatado}</span>
                                </Link>
                            </p>
                            <p className="text-sm md:text-lg">
                                <Link
                                    href='https://www.reciclagemsantamaria.com.br'
                                    target="_blank"
                                    className="group inline-flex items-center"
                                >
                                    <FaGlobe className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                    <span className="group-hover:underline transition duration-200">www.reciclagemsantamaria.com.br</span>
                                </Link>
                            </p>
                            <p className="text-sm md:text-lg">
                                <Link
                                    href='mailto:contato@reciclagemstamaria.com.br'
                                    target="_blank"
                                    className="group inline-flex items-center"
                                >
                                    <FaEnvelopeOpen className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                    <span className="group-hover:underline transition duration-200">contato@reciclagemstamaria.com.br</span>
                                </Link>
                            </p>
                            <p className="text-sm md:text-lg">
                                <Link
                                    href='https://maps.app.goo.gl/25Esw7ceVScCy7Dg7'
                                    target="_blank"
                                    className="group inline-flex items-center"
                                >
                                    <FaMapMarkerAlt className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                    <span className="group-hover:underline transition duration-200">Rua Otávio Campelo Ribeiro, 2800 lote B.Bairro Eldorado, Sete Lagoas 35702153</span>
                                </Link>
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                <Link
                                    href="https://www.instagram.com/reciclagemstmaria7lagoas/"
                                    target="_blank"
                                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                >
                                    <FaInstagram className="size-6" />
                                </Link>
                                <Link
                                    href={`https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?phone=${whatsappContacts.find(contact => contact.ponto === 'Reciclagem Santa Maria')?.contato}`}
                                    target="_blank"
                                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                >
                                    <FaWhatsapp className="size-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto text-xl border-t-2 border-gray-100 md:border-t-transparent">
                        <h2 className="uppercase text-2xl mt-8 md:mt-0">Materiais</h2>
                        <h3 className='uppercase text-3xl text-green-600 font-bold mb-8'>Descartados</h3>
                        <div className="space-y-8 mr-0 md:mr-4">
                            <ul className="list-disc text-sm md:text-lg">
                                <li>Biomassa (Cavaco de madeira);</li>
                                <li>Lâmpadas fluorescentes;</li>
                                <li>Papel e Papelão;</li>
                                <li>Vidro;</li>
                                <li>Borracha e Pneus;</li>
                                <li>Metais (alumínio, cobre e ferro);</li>
                                <li>Plásticos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="w-[90%] mx-auto space-y-8 mb-8">
                <h2 className="text-2xl font-semibold text-center mb-4">Localização</h2>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.6233318261993!2d-44.27322422448005!3d-19.471800281815927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa650f5ec6e0a9b%3A0x20cd0c38acbd8f82!2sAv.%20Ot%C3%A1vio%20Campelo%20Ribeiro%2C%202800a%20-%20b%20-%20Eldorado%2C%20Sete%20Lagoas%20-%20MG%2C%2035702-153!5e0!3m2!1spt-BR!2sbr!4v1747608697456!5m2!1spt-BR!2sbr" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}