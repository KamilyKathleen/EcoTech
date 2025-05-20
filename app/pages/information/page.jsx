'use client'

import LoremIpsum from "@/app/components/loremIpsum";
import { FaAngleRight, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumb";
import Placeholder from "@/app/img/placeholder.webp";
import Banner from '@/app/img/banner.jpg';
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function Information() {

    const itemClasses = {
        title: "text-lg font-bold",
        trigger: "px-2 py-4 flex items-center justify-between",
        indicator: "text-green-600 text-2xl",
        content: "p-2",
    };

    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Informações Importantes"
                page="Informações"
            />
            <div className="w-full md:w-[90%] mx-auto p-6 text-lg leading-8 space-y-8">
                <h2 className="text-4xl text-green-600 text-center font-poppins font-semibold uppercase">Perguntas Frequentes</h2>

                <div className="w-full mx-auto">
                    <Accordion
                        variant="light"
                        className="w-full max-w-[800px] mx-auto space-y-4"
                        itemClasses={itemClasses}
                    >
                        <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            title="1. Quais equipamentos serão coletados?"
                            indicator={({ isOpen }) => (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
                        >
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Computadores de mesa (Desktops);</li>
                                <li>Notebooks;</li>
                                <li>Monitores;</li>
                                <li>Teclados e mouses;</li>
                                <li>Celulares e tablets;</li>
                                <li>Baterias de celular;</li>
                                <li>Fones de ouvido;</li>
                                <li>Carregadores de celular e notebooks;</li>
                                <li>Cabos e fios de conexão (USB, HDMI, etc.);</li>
                                <li>Placas-mãe, processadores, memórias RAM;</li>
                                <li>Impressoras;</li>
                                <li>Modems e roteadores;</li>
                                <li>Impressoras e scanners;</li>
                                <li>Controles remotos;</li>
                                <li>Pilhas e baterias recarregáveis.</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Accordion 2"
                            title="2. Quais equipamentos não serão coletados?"
                            indicator={({ isOpen }) => (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
                        >
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Eletrodomésticos grandes (geladeiras, fogões, máquinas de lavar);</li>
                                <li>Lâmpadas fluorescentes e de mercúrio;</li>
                                <li>Televisores de tubo (CRT);</li>
                                <li>Aparelhos de ar-condicionado;</li>
                                <li>Resíduos orgânicos ou recicláveis comuns (plásticos, papel, vidro);</li>
                                <li>Toners e cartuchos de tinta sem caixa ou vazando;</li>
                                <li>Equipamentos médicos que contenham substâncias tóxicas (ex: termômetros de mercúrio).</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label="Accordion 3"
                            title="3. Onde será feita a coleta?"
                            indicator={({ isOpen }) => (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
                        >
                            A coleta será feita na Una Sete Lagoas <br/>
                            Endereço: Av. Secretário Divino Padrão, 1411 - Santo Antônio
                        </AccordionItem>
                        <AccordionItem
                            key="4"
                            aria-label="Accordion 3"
                            title="4. Até quando vai a campanha?"
                            indicator={({ isOpen }) => (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
                        >
                            A coleta será realizada até 11/12/2024.
                        </AccordionItem>
                        {/* <AccordionItem
                            key="5"
                            aria-label="Accordion 3"
                            title="5. Lorem Ipsum?"
                            indicator={({ isOpen }) => (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
                        >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.
                        </AccordionItem> */}
                    </Accordion>
                </div>

                <p className="text-center text-renata-yellow font-poppins font-semibold uppercase">Se você tiver outras perguntas ou precisar de mais informações, não hesite em nos contatar. Estamos aqui para ajudar!</p>
            </div>
        </>
    )
}