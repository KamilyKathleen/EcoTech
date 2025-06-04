'use client';

import { useEffect, useState } from "react";

export default function CollectionForm() {
    const [name, setName] = useState("");
    const [emails, setEmails] = useState("");
    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");

    const [addresses, setAddresses] = useState([""]);
    const [zipCodes, setZipCodes] = useState([""]);
    const [phones, setPhones] = useState([""]);

    const [materials, setMaterials] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);

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
    }, []);

    const handleMaterialChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedMaterials(prev => [...prev, value]);
        } else {
            setSelectedMaterials(prev => prev.filter(item => item !== value));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            email: emails,
            website,
            instagram,
            address: addresses.filter(item => item.trim() !== ""),
            zipCode: zipCodes.filter(item => item.trim() !== ""),
            phoneNumber: phones.filter(item => item.trim() !== ""),
            discardedMaterials: selectedMaterials
        };

        console.log(data)

        try {
            const response = await fetch('/api/collection', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const resData = await response.json();

            if (response.ok) {
                alert(resData.message);
                window.location.reload();
            } else {
                alert(resData.message);
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao enviar os dados.");
        }
    };

    const handleDynamicInput = (index, setter, state) => (e) => {
        const values = [...state];
        values[index] = e.target.value;
        setter(values);
    };

    const addField = (setter, state) => {
        setter([...state, ""]);
    };

    const removeField = (index, setter, state) => {
        const values = [...state];
        values.splice(index, 1);
        setter(values);
    };

    const renderDynamicFields = (label, state, setter) => (
        <div className="py-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            {state.map((value, index) => (
                <div key={index} className="flex gap-2 mb-2">
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        value={value}
                        onChange={handleDynamicInput(index, setter, state)}
                    />
                    <button
                        type="button"
                        className="px-4 bg-red-400 hover:bg-red-600 text-white rounded"
                        onClick={() => removeField(index, setter, state)}
                    >-</button>
                    <button
                        type="button"
                        className="px-4 bg-blue-400 hover:bg-blue-600 text-white rounded"
                        onClick={() => addField(setter, state)}
                    >+</button>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-white w-[90%] md:w-[70%] mx-auto shadow-2xl p-8 rounded-lg">
            <h1 className='text-3xl font-bold text-center text-green-600 uppercase mb-8'>Cadastrar Ponto de Coleta</h1>
            <form onSubmit={handleSubmit}>
                <div className="w-[90%] mx-auto">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Ponto</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {renderDynamicFields("CEP", zipCodes, setZipCodes)}
                    {renderDynamicFields("Endereço", addresses, setAddresses)}
                    <label className="block text-sm font-medium text-gray-700 mb-1">Site</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 mb-3"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    {renderDynamicFields("Telefone/WhatsApp", phones, setPhones)}
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600 mb-3"
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                    <div className="py-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Materiais Aceitos
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {materials.map(material => (
                                <label key={material._id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value={material._id}
                                        checked={selectedMaterials.includes(material._id)}
                                        onChange={handleMaterialChange}
                                        className="mr-2"
                                    />
                                    {material.material}
                                </label>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="w-[90%] mx-auto py-3">
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
