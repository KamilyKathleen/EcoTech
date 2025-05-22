"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaPhone, FaGlobe, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function CollectionPoint({
    title,
    description = [],
    image,
    contacts = {},
    materials = [],
    mapUrl,
    mapEmbedUrl,
}) {

    const isMobile = useIsMobile();

    return (
        <>

            {/* Section 1 - Description and Image */}
            <div className="py-8 my-4">
                <div className="w-[90%] mx-auto space-y-4 flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 p-4 space-y-4">
                        <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
                        {description.map((desc, i) => (
                            <p key={i} className="text-lg md:text-justify leading-relaxed">{desc}</p>
                        ))}
                    </div>
                    {image && (
                        <div className="md:w-1/2 p-4">
                            <Image src={image} alt={`Imagem de ${title}`} className="rounded-lg shadow-lg max-h-[500px] w-auto" />
                        </div>
                    )}
                </div>
            </div>

            {/* Section 2 - Contacts and materials */}
            {(Object.keys(contacts).length > 0 || materials.length > 0) && (
                <div className="my-8 p-4">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center shadow-2xl p-8">
                        {/* Contacts */}
                        {Object.keys(contacts).length > 0 && (
                            <div className="w-[95%] mx-auto text-xl mb-8 md:mb-0 md:border-r-2 border-gray-100">
                                <h2 className="uppercase text-2xl">Informações e</h2>
                                <h3 className="uppercase text-3xl text-green-600 font-bold mb-8">Contatos</h3>
                                <div className="space-y-8 mr-0 md:mr-4">
                                    {contacts.phone && (
                                        <p className="text-sm md:text-lg">
                                            <Link href={`tel:+${contacts.phone}`} target="_blank" className="group inline-flex items-center">
                                                <FaPhone className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                                <span className="group-hover:underline transition duration-200">{contacts.phoneFormatted || contacts.phone}</span>
                                            </Link>
                                        </p>
                                    )}
                                    {contacts.website && (
                                        <p className="text-sm md:text-lg">
                                            <Link href={contacts.website} target="_blank" className="group inline-flex items-center">
                                                <FaGlobe className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                                <span className="group-hover:underline transition duration-200">{contacts.website}</span>
                                            </Link>
                                        </p>
                                    )}
                                    {contacts.email && (
                                        <p className="text-sm md:text-lg">
                                            <Link href={`mailto:${contacts.email}`} target="_blank" className="group inline-flex items-center">
                                                <FaEnvelopeOpen className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                                <span className="group-hover:underline transition duration-200">{contacts.email}</span>
                                            </Link>
                                        </p>
                                    )}
                                    {contacts.addresses && contacts.addresses.length > 0 && (
                                        <div className="space-y-4">
                                            {contacts.addresses.map((item, index) => (
                                                <p key={index} className="text-sm md:text-lg">
                                                    <Link href={item.mapLink || "#"} target="_blank" className="group inline-flex items-center">
                                                        <FaMapMarkerAlt className="size-8 inline mr-2 bg-green-600 text-white p-2 rounded-full group-hover:bg-green-700" />
                                                        <span className="group-hover:underline transition duration-200">
                                                            {item.address}
                                                        </span>
                                                    </Link>
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                    {(contacts.instagram || contacts.whatsapp) && (
                                        <div className="flex items-center justify-center gap-2">
                                            {contacts.instagram && (
                                                <Link href={contacts.instagram} target="_blank" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700">
                                                    <FaInstagram className="size-6" />
                                                </Link>
                                            )}
                                            {contacts.whatsapp && (
                                                <Link
                                                    href={`https://${isMobile ? "api" : "web"}.whatsapp.com/send?phone=${contacts.whatsapp}`}
                                                    target="_blank"
                                                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                                >
                                                    <FaWhatsapp className="size-6" />
                                                </Link>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Materials */}
                        {materials.length > 0 && (
                            <div className="w-[90%] mx-auto text-xl border-t-2 border-gray-100 md:border-t-transparent">
                                <h2 className="uppercase text-2xl mt-8 md:mt-0">Materiais</h2>
                                <h3 className="uppercase text-3xl text-green-600 font-bold mb-8">Descartados</h3>
                                <ul className="list-disc text-sm md:text-lg space-y-1">
                                    {materials.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Section 3 - Map */}
            {mapEmbedUrl && (
                <div className="w-[90%] mx-auto space-y-8 mb-8">
                    <h2 className="text-2xl font-semibold text-center mb-4">Localização</h2>
                    <div>
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}
