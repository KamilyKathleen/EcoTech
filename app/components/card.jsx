import { useIsMobile } from '@/app/hooks/useIsMobile';
import { FaPlus, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingCard({ image, description, title, subtitle, handleNavigation, link, contato }) {

    const isMobile = useIsMobile();

    return (
        <div className="rounded-lg shadow-lg max-w-[350px] mx-auto">
            {image && (
                <Image
                    src={image}
                    alt="Card Image"
                    className="w-full h-[230px] object-cover mb-2"
                />
            )}
            <div className='w-[90%] mx-auto p-4'>
                <h3 className="ml-2 text-xl ">{title}</h3>
                <h3 className="ml-2 text-xl text-green-700 font-bold uppercase">{subtitle}</h3>
                <hr className='my-4 text-gray-200' />
                <p className="">{description}</p>
                {(link || contato) && (
                    <div className="flex justify-between my-4">
                        {link && (
                            <button
                                onClick={() => handleNavigation(link)}
                                className="border-2 border-green-600 hover:bg-green-700 hover:border-none hover:text-white text-sm font-semibold py-2 px-3 rounded-md flex items-center"
                            >
                                <FaPlus className="size-3 mr-2" />
                                Saiba Mais
                            </button>
                        )}
                        {contato && (
                            <Link
                                href={`https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?phone=${contato}`}
                                target="_blank"
                                className="border-2 border-green-600 hover:bg-green-700 hover:border-none hover:text-white text-sm font-semibold py-2 px-3 rounded-md flex items-center"
                            >
                                <FaWhatsapp className="size-4 mr-2" />
                                <span>Atendimento</span>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
