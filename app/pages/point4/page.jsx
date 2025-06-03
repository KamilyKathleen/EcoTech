import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import Placeholder from '@/app/img/placeholder.webp';
import CB2 from '@/app/img/casas_bahia2.png';
import CB3 from '@/app/img/casas_bahia3.jpg';

export default function CasasBahia() {
    return (
        <>
            <Breadcrumb
                image={CB3}
                title="Casas Bahia – Ponto de Coleta de Lixo Eletrônico"
                page="Casas Bahia"
            />
            <CollectionPoint
                title="Casas Bahia"
                description={[
                    "As Casas Bahia se juntaram a um importante movimento nacional pela sustentabilidade ao aderirem ao Programa Reviva, uma iniciativa voltada à destinação correta de resíduos eletroeletrônicos. Essa ação é feita em parceria com a Green Eletron, uma gestora nacional autorizada pelo Ministério do Meio Ambiente para coleta e reciclagem de eletrônicos no Brasil.",
                    "Em suas lojas físicas, como a unidade de Sete Lagoas, os consumidores encontram um pequeno ponto de coleta onde é possível descartar gratuitamente itens de pequeno porte que não funcionam mais ou estão fora de uso. O objetivo é facilitar o acesso da população a locais seguros para descarte, contribuindo com a redução da poluição ambiental e incentivando a economia circular.",
                    "Os resíduos depositados nos coletores das Casas Bahia são encaminhados para empresas especializadas, que realizam o tratamento, separação e reaproveitamento dos materiais, garantindo que metais pesados, plásticos e componentes eletrônicos não causem danos ao meio ambiente."
                ]}
                image={CB2}
                contacts={{
                    phone: "553137756950",
                    phoneFormatted: "(31) 3775-6950",
                    website: "",
                    email: "",
                    addresses: [
                        {
                            address: "1, Av. Otávio Campelo Ribeiro, 2801 - Eldorado, Sete Lagoas - MG, 35702-153",
                            mapLink: "https://maps.app.goo.gl/9JkV1vxg8kqy2335A"
                        },
                        {
                            address: "2, R. Dr. Pedro Luiz, 256 - Centro, Sete Lagoas - MG, 35700-004",
                            mapLink: "https://maps.app.goo.gl/vxUVvSx4qxbAj8YR7"
                        }
                    ],
                    instagram: "https://www.instagram.com/casasbahia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                    whatsapp: "5531996032554"
                }}
                materials={[
                    "Celulares e tablets;",
                    "Notebooks e acessórios;",
                    "Carregadores, cabos e fones de ouvido;",
                    "Controles remotos, pilhas e baterias;",
                    "Pequenos eletrodomésticos (ex: liquidificadores, escovas elétricas)."
                ]}
                mapEmbedUrl="https://www.google.com/maps/d/u/0/embed?mid=1mz8ZEDkTTQfxkuEgYAKpqX4KMh63-Lw&ehbc=2E312F&noprof=1"
            />
        </>
    );
}
