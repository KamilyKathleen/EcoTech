import Link from "next/link";
import Image from "next/image";

export default function Breadcrumb(props) {
    return (
        <>
            <div className="relative w-full h-[75vh] mb-4">
                <Image src={props.image} alt="Banner" className='object-cover' fill priority />
                <div className="absolute inset-0 bg-gray-800/60 z-10">
                    <div className="absolute inset-0 flex flex-col justify-center">
                        <div className="w-[90%] mx-auto text-center">
                            <h1 className="text-white text-4xl md:text-5xl py-4 font-bold uppercase mb-4">{props.title}</h1>
                            <ul className="text-white text-2xl font-semibold py-4">
                                <li className="inline hover:underline">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="inline"> / {props.page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}