"use client";

import Image from 'next/image';
import Banner from '@/app/img/banner.jpg'
import RNS from '@/app/img/reciclagem_norte_sul.png';
import RSM from '@/app/img/reciclagem_santa_maria.png';
import PEV from '@/app/img/pev1.jpg';
import FloatingCard from './components/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUnits } from './context/Units';
import { useIsMobile } from './hooks/useIsMobile';

function WhyUsCard({ title, description }) {
  return (
    <div className="m-4 p-6 text-center flex flex-col h-full max-w-[400px] mx-auto">
      <h3 className="text-lg text-green-700 font-semibold pb-6 uppercase">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}

export default function Home() {

  const router = useRouter();
  const whatsappContacts = useUnits();
  const isMobile = useIsMobile();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <>
      <div>
        {/* Banner */}
        <div className="relative w-full h-[100vh]">
          <Image src={Banner} alt="Banner" className='object-cover' fill priority />
          <div className="absolute inset-0 bg-gray-800/60 z-10">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-white text-4xl md:text-5xl py-4 font-bold uppercase mb-4">Descarte de Lixo Eletrônico Consciente!</h1>
              <p className="text-white text-2xl py-4">Contribua para um mundo mais limpo e sustentável, descartando corretamente seus eletrônicos.</p>
              <p className="text-lg text-white italic py-4">&quot;A reciclagem de hoje, é o futuro de amanhã.&quot;</p>
              <Link
                href='/pages/collectionPoints'
                className="mt-6 px-12 py-3 font-semibold bg-green-600 text-white rounded hover:bg-green-700 transition flex items-center justify-center"
              >Saiba Mais
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-6 mt-4">
          <h1 className="w-[90%] mx-auto text-3xl font-bold text-center uppercase my-2">De uma campanha para um projeto permanente</h1>

          {/* Section 1 */}
          <div className="w-[90%] mx-auto my-5 flex flex-col md:flex-row items-center">
            <div className="p-4 space-y-4">
              <p className="text-lg md:text-justify leading-relaxed">No semestre anterior, realizamos uma campanha de conscientização sobre o descarte correto de lixo eletrônico em parceria com a empresa E-Mile – Reciclagem de Lixo Eletrônico. A ação aconteceu dentro da faculdade e contou com um ponto de coleta temporário para que alunos, professores e colaboradores pudessem descartar seus equipamentos inutilizados de forma segura e sustentável.</p>
              <p className="text-lg md:text-justify leading-relaxed">A grande adesão à campanha e o interesse da comunidade acadêmica despertaram em nós uma nova ideia: criar uma plataforma digital para mapear os pontos de coleta de resíduos recicláveis em Sete Lagoas — não apenas lixo eletrônico, mas também plásticos, papel, vidro e outros materiais que muitas vezes são descartados incorretamente por falta de informação.</p>
              <p className="text-lg md:text-justify leading-relaxed">Neste novo site, você poderá encontrar os locais de descarte, saber quais materiais são aceitos e aprender mais sobre o impacto ambiental das suas escolhas.</p>
              <p className="text-lg md:text-justify leading-relaxed">
                E se você precisa se desfazer de equipamentos eletrônicos, a boa notícia é que a E-Mile segue como nossa parceira e realiza a coleta gratuita desses itens. Para agendar a retirada, basta entrar em contato com eles diretamente pelo WhatsApp: &nbsp;
                <Link
                  href={`https://${isMobile ? 'api' : 'web'}.whatsapp.com/send?phone=5531995449937`}
                  target='_blank'
                  className='underline text-green-600 hover:text-green-700'
                >
                  (31) 99544-9937
                </Link>.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-100 my-10 flex flex-col md:flex-row-reverse items-center">
            <div className="w-[90%] mx-auto p-4 space-y-4 my-8">
              <h2 className="text-2xl font-semibold text-center mb-4">Encontre o ponto de coleta ideal para você </h2>
              <p className="text-lg md:text-justify leading-relaxed">Descartar corretamente seus resíduos nunca foi tão fácil! Com apenas alguns cliques, você pode descobrir onde descartar o material que deseja reciclar em Sete Lagoas.</p>
              <p className="text-lg md:text-justify leading-relaxed">Basta acessar a opção “Onde Descartar”, selecionar o tipo de resíduo — como papel, plástico, óleo usado, lixo eletrônico, entre outros — e digitar o seu CEP. O sistema mostrará automaticamente o ponto de coleta mais próximo da sua localização.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto justify-center items-center py-3">
                <div>
                  <WhyUsCard
                    title="Rápido"
                    description="Encontre o ponto de coleta mais próximo em poucos segundos, digitando apenas seu CEP."
                  />
                </div>
                <div className="md:border-x md:border-y-transparent border-y border-green-600">
                  <WhyUsCard
                    title="Prático"
                    description="Descubra onde descartar diferentes tipos de resíduos com facilidade e comodidade."
                  />
                </div>
                <div>
                  <WhyUsCard
                    title="Consciente"
                    description="Contribua para um futuro sustentável dando o destino certo aos seus resíduos."
                  />
                </div>
              </div>
              <p className="text-lg text-center italic py-4">&quot;Comece agora e faça parte da mudança!&quot;</p>
              <Link
                href='/pages/collectionPoints'
                className="py-3 font-semibold bg-green-600 text-white rounded hover:bg-green-700 transition flex justify-center max-w-[200px] mx-auto"
              >
                Onde Descartar
              </Link>
            </div>
          </div>


          {/* Section 3 */}
          <div className="w-[90%] mx-auto my-10 space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Principais pontos de coleta em Sete Lagoas</h2>
            <p className="text-lg text-center leading-relaxed">Para facilitar ainda mais o descarte consciente, abaixo listamos alguns dos principais pontos de coleta em Sete Lagoas.</p>
            <p className="text-lg text-center leading-relaxed">Aqui você pode ver rapidamente onde levar seus resíduos, os tipos de materiais que cada local aceita e seus horários de funcionamento.</p>
            <p className="text-lg text-center leading-relaxed mb-8">Explore, escolha o local mais conveniente para você e ajude a transformar nossa cidade em um lugar mais sustentável!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <FloatingCard
                image={RSM}
                title="Reciclagem"
                subtitle="Santa Maria"
                description="Referência em reciclagem desde os anos 60, atua em Sete Lagoas com soluções completas para o descarte de diversos materiais, como papel, vidro, metais e plásticos."
                handleNavigation={handleNavigation}
                link="/pages/point1"
                contato={whatsappContacts.find(contact => contact.ponto === "Reciclagem Santa Maria")?.contato}
              />
              <FloatingCard
                image={RNS}
                title="Reciclagem"
                subtitle="Norte Sul"
                description="Atuando desde 2020, coleta papel, plásticos e metais. Comprometida com a sustentabilidade e a reciclagem eficiente em Sete Lagoas."
                handleNavigation={handleNavigation}
                link="/pages/point2"
                contato={whatsappContacts.find(contact => contact.ponto === "Reciclagem Norte Sul")?.contato}
              />
              <FloatingCard
                image={PEV}
                title="Entrega Voluntária de"
                subtitle="Resíduos Sólidos (PEVs)"
                description="Iniciativa da Prefeitura que oferece pontos fixos para o descarte gratuito de resíduos como entulho, móveis, metais e galhos em diversos bairros da cidade."
                handleNavigation={handleNavigation}
                link="/pages/point1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
