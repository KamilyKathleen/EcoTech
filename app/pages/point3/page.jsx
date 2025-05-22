import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import RNS from '@/app/img/reciclagem_norte_sul2.png';
import PEV from '@/app/img/pev1.jpg';

export default function About() {
    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Entrega Voluntária de Resíduos Sólidos"
                page="Entrega Voluntária de Resíduos Sólidos (PEVs)"
            />
            <CollectionPoint
                title="Entrega Voluntária de Resíduos Sólidos (PEVs)"
                description={[
                    "A Prefeitura de Sete Lagoas, por meio da Secretaria Municipal de Meio Ambiente, Desenvolvimento Econômico e Turismo, disponibiliza à população diversos pontos fixos para a entrega voluntária de resíduos sólidos. A iniciativa visa facilitar o descarte correto de materiais como entulho de construção, metais, madeira e móveis velhos, contribuindo para a preservação do meio ambiente e a melhoria da qualidade de vida da população.",
                    "Localizados em pontos estratégicos da cidade, nos bairros Orozimbo Macedo, Nova Cidade, CDI II e Verde Vale, os Pontos de Entrega Voluntária (PEVs) oferecem uma alternativa prática e segura para que os cidadãos possam descartar seus resíduos de forma adequada. "
                ]}
                image={PEV}
                contacts={{
                    phone: "",
                    phoneFormatted: "",
                    website: "",
                    email: "",
                    addresses: [
                        {
                            address: "Orozimbo Macedo (av. Norte Sul com rua Belmiro Ramos de Abreu)",
                            mapLink: "https://maps.app.goo.gl/Lm19qcd841Ez76P4A"
                        },
                        {
                            address: "R. Suíssa, 1521 - Nova Cidade",
                            mapLink: "https://maps.app.goo.gl/zunsbMckKjBf1pMk7"
                        },
                        {
                            address: "Av. Dr. Renato Azeredo, 5298 - Canaã",
                            mapLink: "https://maps.app.goo.gl/WHMWM44TDqzzW6Yx7"
                        },
                        {
                            address: "Av. Galdino Rodrigues de Paula, 357 - Sete Lagoas",
                            mapLink: "https://maps.app.goo.gl/SoH1MA4XwpPD1fBQ6"
                        }
                    ],
                    instagram: "",
                    whatsapp: ""
                }}
                materials={[
                    "Resíduos de construção civil,",
                    "Metais,",
                    "Galhos de podas de árvores e jardins,",
                    "Madeiras,",
                    "Móveis velhos,",
                    "Vidros,",
                    "Isopor,",
                    "Gesso"
                ]}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3762.8377663644346!2d-44.235225124786005!3d-19.41941438185721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzA5LjkiUyA0NMKwMTMnNTcuNSJX!5e0!3m2!1spt-BR!2sbr!4v1747870608012!5m2!1spt-BR!2sbr"
            />
        </>
    );
}
