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
                <p className="text-lg md:text-justify leading-relaxed">Nosso projeto nasce com um propósito claro: <span className="font-semibold">facilitar o descarte correto de resíduos recicláveis em Sete Lagoas</span> e promover uma mudança real na forma como a cidade lida com o lixo. Acreditamos que pequenas atitudes geram grandes transformações — e tudo começa com informação e acesso.</p>
                <p className="text-lg md:text-justify leading-relaxed">Queremos que a população tenha à disposição um sistema prático e confiável para descobrir onde descartar corretamente <span className="font-semibold">todos os tipos de resíduos recicláveis</span>, como plástico, papel, vidro, metal, óleo de cozinha, eletrônicos, pilhas, entre outros.</p>
                <p className="text-lg md:text-justify leading-relaxed">Nosso objetivo vai além do mapeamento. Buscamos <span className="font-semibold">criar uma cultura de responsabilidade ambiental</span>, conectando cidadãos, escolas, empresas e instituições públicas em torno de um compromisso comum: <span className="font-semibold">reduzir o impacto ambiental, incentivar a reciclagem e cuidar do futuro da nossa cidade</span>.</p>
                <p className="text-lg md:text-justify leading-relaxed">Ao reunir em um só lugar os pontos de coleta existentes, esclarecer dúvidas sobre o descarte e divulgar ações sustentáveis locais, queremos que Sete Lagoas se torne <span className="font-semibold">exemplo de consciência ecológica e inovação social.</span></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <FloatingCard
                        image={E_Waste2}
                        title="Promover a"
                        subtitle="Educação Ambiental"
                        description="Conscientizar a comunidade sobre a importância da separação correta do lixo e os impactos ambientais causados pelo descarte inadequado de resíduos como papel, vidro, plástico, metais, eletrônicos, óleo de cozinha, pilhas, entre outros."
                    />
                    <FloatingCard
                        image={E_Waste}
                        title="Mapear os"
                        subtitle="Pontos de Coleta"
                        description="Criar e manter um mapa digital interativo com todos os locais de coleta seletiva e reciclagem na cidade, incluindo cooperativas, ecopontos, supermercados, postos de gasolina e ações temporárias promovidas por escolas e ONGs."
                    />
                    <FloatingCard
                        image={LogoEmile}
                        title="Estimular "
                        subtitle="Parcerias Locais"
                        description="Estabelecer conexões com empresas, órgãos públicos, instituições de ensino e iniciativas comunitárias que já promovem ações de sustentabilidade, ampliando o alcance do projeto."
                    />
                </div>
            </div>
        </>
    )
}