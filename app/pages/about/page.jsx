"use client";

import Breadcrumb from "@/app/components/breadcrumb";
import Banner from '@/app/img/banner.jpg';
import Emile from "@/app/img/emile.png";
import LogoEmile from "@/app/img/emile2.png";
import Placeholder from "@/app/img/placeholder.webp";
import Grupo from "@/app/img/foto_grupo.jpg";
import E_Waste from "@/app/img/e-waste1.webp";
import E_Waste2 from "@/app/img/e-waste2.png";
import FloatingCard from "@/app/components/card";
import Image from "next/image";
import { FaLightbulb, FaTrashAlt, FaHandshake } from 'react-icons/fa';
import Link from "next/link";

export default function About() {

    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Sobre a campanha"
                page="Sobre"
            />

            <div className="flex flex-col md:flex-row items-center my-8">
                <div className="md:w-1/2 p-4">
                    <div className="w-[90%] mx-auto space-y-8">
                        <h1 className="text-3xl font-bold text-center uppercase my-4">Sobre o projeto</h1>
                        <p className="text-lg text-justify">Somos um grupo de estudantes comprometidos com a sustentabilidade e o futuro do nosso planeta. Este site foi criado como parte de um projeto acadêmico com o objetivo de facilitar o acesso da população de Sete Lagoas aos <span className="font-semibold">pontos de coleta de resíduos recicláveis</span> da cidade.</p>
                        <p className="text-lg text-justify">Acreditamos que <span className="font-semibold">a mudança começa com a informação</span>. Muitas vezes, as pessoas querem fazer a coisa certa, mas não sabem onde ou como descartar seus resíduos de forma correta. Nosso papel é <span className="font-semibold">conectar quem quer cuidar do meio ambiente com quem realiza esse trabalho todos os dias</span>.</p>
                        <p className="text-lg text-justify">Mais do que um simples mapa, este projeto é um convite à <span className="font-semibold">conscientização ambiental</span>, ao <span className="font-semibold">consumo responsável</span> e à <span className="font-semibold">participação ativa da comunidade</span> na construção de uma cidade mais limpa, saudável e sustentável para todos.</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className='w-full'>
                        <Image src={Grupo} alt="Foto do grupo" className="bg-cover" />
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-10 my-4">
                <div className="w-[90%] mx-auto space-y-8 flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-semibold text-center mb-4">Quem é a E-mile?</h2>
                        <p className="text-lg md:text-justify leading-relaxed">A E-Mile atua na coleta gratuita, descaracterização e destinação final de resíduos eletroeletrônicos como celular, computador, televisão, máquina de lavar, ar-condicionado, eletroportáteis e muitos outros.</p>
                        <Link
                            href="https://emile.net.br/"
                            target="_blank"
                            className="mt-8 py-3 font-semibold bg-green-600 text-white rounded hover:bg-green-700 transition flex justify-center w-[150px] mx-auto"
                        >
                            Saiba Mais
                        </Link>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <Image src={Emile} alt="Empresa Emile" className="rounded-lg shadow-lg max-h-[500px] w-auto mx-auto" />
                    </div>
                </div>
            </div>

            <div className="w-[90%] mx-auto space-y-8 mb-8">
                <h2 className="text-2xl font-semibold text-center mb-4">Nossos Objetivos</h2>
                <p className="text-lg text-center leading-relaxed mb-8">Vale ressaltar que os equipamentos que serão recolhidos vão ser aqueles relacionados a informática, como: bilhas, baterias, cabos de carregadores, fones de ouvido, desktops, notebooks, mouse, controles, dentre outros.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <FloatingCard
                        image={E_Waste2}
                        title="Ampliar a"
                        subtitle="Conscientização"
                        description="Informar os alunos, professores e funcionários sobre os impactos negativos do descarte inadequado de eletrônicos de informática no meio ambiente e na saúde pública."
                    />
                    <FloatingCard
                        image={E_Waste}
                        title="Facilitação do"
                        subtitle="Descarte"
                        description="Disponibilizar um ponto fixo de coleta na faculdade para que a comunidade possa descartar corretamente dispositivos eletrônicos de informática que não são mais utilizados."
                    />
                    <FloatingCard
                        image={LogoEmile}
                        title="Parceria com a "
                        subtitle="E-Mile"
                        description="Ao final de cada semestre, a empresa Emile será responsável pelo recolhimento dos itens coletados para a reciclagem adequada."
                    />
                </div>
            </div>
        </>
    )
}