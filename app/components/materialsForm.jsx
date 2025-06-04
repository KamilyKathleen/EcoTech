'use client';

import { useState } from "react";

export default function MaterialsForm() {
    const [material, setMaterial] = useState("");
    const [electronic, setElectronic] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            material,
            electronic
        };

        try {
            const response = await fetch('/api/materials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const resData = await response.json();

            if (response.ok) {
                alert(resData.message);
                setMaterial("");
                setElectronic(false);
            } else {
                alert(resData.message);
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao enviar os dados.");
        }
    };

    return (
        <div className="bg-white w-[90%] md:w-[70%] mx-auto shadow-2xl p-8 rounded-lg">
            <h1 className='text-3xl font-bold text-center text-green-600 uppercase mb-8'>Cadastrar Material</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block mb-1">Nome do Material</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                            required
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        />
                    </div>
                    <div className="my-8 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={electronic}
                            onChange={(e) => setElectronic(e.target.checked)}
                            className="w-5 h-5"
                        />
                        <label>É eletrônico?</label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}
