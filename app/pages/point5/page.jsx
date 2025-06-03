import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import Placeholder from '@/app/img/placeholder.webp';
import Bretas1 from '@/app/img/bretas1.jpg';
import Bretas2 from '@/app/img/bretas2.jpeg';
import Bretas3 from '@/app/img/bretas3.jpg';
import Bretas4 from '@/app/img/bretas4.png';
import Bretas5 from '@/app/img/bretas5.webp';

export default function CasasBahia() {
    return (
        <>
            <Breadcrumb
                image={Bretas5}
                title="Supermercado Bretas – Ponto de Coleta de Lixo Eletrônico"
                page="Supermercado Bretas"
            />
            <CollectionPoint
                title="Supermercado Bretas"
                description={[
                    "O Supermercado Bretas, reconhecido por seu compromisso com a responsabilidade socioambiental, oferece à comunidade de Sete Lagoas um ponto de coleta para o descarte adequado de resíduos eletrônicos. Essa iniciativa visa facilitar o acesso da população a locais seguros para o descarte de equipamentos eletrônicos obsoletos ou fora de uso, contribuindo para a preservação do meio ambiente e a promoção da sustentabilidade.",
                    "O ponto de coleta está localizado na unidade do Bretas em Sete Lagoas, onde os consumidores podem depositar gratuitamente pequenos dispositivos eletrônicos. Os materiais coletados são encaminhados para empresas especializadas em reciclagem, garantindo que componentes tóxicos e metais pesados não contaminem o solo e os recursos hídricos."
                ]}
                image={Bretas3}
                contacts={{
                    phone: "553121363441",
                    phoneFormatted: "(31) 2136-3441",
                    website: "https://www.bretas.com.br/",
                    email: "",
                    addresses: [
                        {
                            address: "1, R. José Duarte de Paiva, 376 - Santa Luzia, Sete Lagoas - MG, 35700-059",
                            mapLink: "https://maps.app.goo.gl/ZJSS5nra2cm59vTC6"
                        },
                        {
                            address: "2, R. Inhaúma, 1921 - São Dimas, Sete Lagoas - MG, 35700-219",
                            mapLink: "https://maps.app.goo.gl/SuTXax8YYqa6RpVc8"
                        }
                    ],
                    instagram: "https://www.instagram.com/bretasatacarejo.mg/",
                    whatsapp: ""
                }}
                materials={[
                    "Celulares e tablets;",
                    "Notebooks e acessórios de informática;",
                    "Carregadores, cabos e fones de ouvido;",
                    "Controles remotos, pilhas e baterias domésticas;",
                    "Pequenos eletrodomésticos, como secadores de cabelo e liquidificadores."
                ]}
                mapEmbedUrl="https://www.google.com/maps/d/u/0/embed?mid=1-TxxIxyGyXzJ6n_BSXqVpshm3jTmjmA&ehbc=2E312F&noprof=1"
            />
        </>
    );
}
