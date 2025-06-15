'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CollectionPointsForm({ selectedMaterial, setSelectedMaterial, cep, setCep }) {

    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const res = await fetch('/api/materials');
                const data = await res.json();
                setMaterials(data);
            } catch (error) {
                console.error("Erro ao buscar materiais:", error);
            }
        };
        fetchMaterials();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Material selecionado:", selectedMaterial);
        console.log("CEP:", cep);
    }

    return (
        <>
            <div className="w-full md:w-[50%] mx-auto shadow-xl rounded-lg my-10 py-2 bg-white">
                <form onSubmit={handleSubmit} className="py-4">
                    {/* Material */}
                    <div className="w-[80%] mx-auto py-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Material a ser descartado</label>
                        <select 
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                            value={selectedMaterial}
                            onChange={(e) => setSelectedMaterial(e.target.value)}
                        >
                            <option value="" hidden>Selecione</option>
                            <option value="">Todos</option>
                            {materials.map(material => (
                                <option key={material._id} value={material._id}>
                                    {material.material}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Address / Cep */}
                    <div className="w-[80%] mx-auto py-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 focus:border-transparent transition"
                            value={cep}
                            placeholder="35700-642"
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
                </form>
            </div>
        </>
    )
}