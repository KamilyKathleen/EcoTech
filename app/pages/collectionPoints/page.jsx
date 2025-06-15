'use client';

import { useState } from "react";
import Breadcrumb from "@/app/components/breadcrumb";
import Banner from '@/app/img/banner.jpg';
import CollectionPointsForm from "@/app/components/collectionPointsForm";
import MapContainer from "@/app/components/mapContainer";

export default function CollectionPoints() {
    const [selectedMaterial, setSelectedMaterial] = useState("");
    const [cep, setCep] = useState("");

    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Pontos de Coleta"
                page="Coleta"
            />
            <div className="w-[90%] mx-auto space-y-4">
                <h1 className="text-3xl font-bold text-center uppercase my-4">Descubra onde descartar seus resíduos</h1>
                <p className="text-lg text-justify">Você sabia que o descarte incorreto de equipamentos eletrônicos pode causar sérios danos ao meio ambiente? Pensando nisso, desenvolvemos uma ferramenta prática que ajuda você a encontrar o ponto de coleta mais próximo de acordo com o tipo de material eletrônico que deseja descartar.</p>
                <p className="text-lg text-justify">Basta selecionar o tipo de resíduo, digitar seu CEP e clicar em Enviar. O sistema irá filtrar automaticamente os pontos de coleta mais próximos e adequados para receber o seu material.</p>
                <p className="text-lg text-justify">Com apenas alguns cliques, você contribui para um futuro mais sustentável e ajuda a dar o destino certo para aquilo que já não tem mais utilidade, mas ainda tem valor para o planeta.</p>
                <div>
                    <CollectionPointsForm
                        selectedMaterial={selectedMaterial}
                        setSelectedMaterial={setSelectedMaterial}
                        cep={cep}
                        setCep={setCep}
                    />
                </div>
                <div className="mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4">Pontos de Coleta em Sete Lagoas</h2>
                    {/* <iframe src="https://www.google.com/maps/d/embed?mid=1dj-iG8QZga19Ix7QuVh39cPTZrhsxYo&ehbc=2E312F&noprof=1" width="100%" height="500"></iframe> */}
                    <MapContainer selectedMaterial={selectedMaterial} cep={cep} />
                </div>
            </div>
        </>
    )
}