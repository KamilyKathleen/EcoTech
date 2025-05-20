'use client';

import { useState } from "react";
import Link from "next/link";

export default function CollectionPointsForm() {

    const [material, setMaterial] = useState("");
    const [cep, setCep] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS
        const serviceId = 'service_zoaykaw';
        const templateId = 'template_qlnp87r';
        const publicKey = 'Vk48iuuKTe65SLA5O';

        const templateParams = {
            to_name: 'Coleta de Lixo Eletrônico',
            from_name: material,
            from_email: cep,
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email enviado com sucesso!', response);
                alert('Email enviado com sucesso!');
                setMaterial('');
                setCep('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Erro ao enviar o email: ', error);
            });
    }


    return (
        <>
            <div className="w-full md:w-[50%] mx-auto shadow-xl rounded-lg my-10 py-8 bg-white">
                <form onSubmit={handleSubmit} className="py-4">
                    {/* Material */}
                    <div className="w-[80%] mx-auto py-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Material a ser descartado</label>
                        <select 
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                        required
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                        >
                            <option value="" hidden>Selecione</option>
                            <option value="Lixo Eletrônico">Lixo Eletrônico</option>
                            <option value="Metal">Metal</option>
                            <option value="Vidro">Vidro</option>
                            <option value="Papel">Papel</option>
                            <option value="Plástico">Plástico</option>
                        </select>
                    </div>
                    {/* Address / Cep */}
                    <div className="w-[80%] mx-auto py-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Local onde deseja descartar</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                            required
                            value={cep}
                            placeholder=""
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <Link
                            href='https://buscacepinter.correios.com.br/app/endereco/index.php'
                            target="_blank"
                            className="text-sm text-green-600 hover:underline mt-1 inline-block"
                        >
                            Não sabe seu CEP?
                        </Link>
                    </div>
                    {/* <div className="w-[80%] mx-auto py-3">
                        <label>Mensagem</label>
                        <textarea
                            className="w-full py-1 pl-2 bg-white rounded"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div> */}
                    <div className="w-[80%] mx-auto py-3">
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