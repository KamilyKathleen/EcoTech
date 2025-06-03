import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import PEV from '@/app/img/pev1.jpg';
import PEV1 from '@/app/img/pev2.png';
import PEV2 from '@/app/img/pev3.jpg';

export default function PEVs() {
    return (
        <>
            <Breadcrumb
                image={PEV2}
                title="Entrega Voluntária de Resíduos Sólidos"
                page="Entrega Voluntária de Resíduos Sólidos (PEVs)"
            />
            <CollectionPoint
                title="Entrega Voluntária de Resíduos Sólidos (PEVs)"
                description={[
                    "A Prefeitura de Sete Lagoas, por meio da Secretaria Municipal de Meio Ambiente, Desenvolvimento Econômico e Turismo, disponibiliza à população diversos pontos fixos para a entrega voluntária de resíduos sólidos. A iniciativa visa facilitar o descarte correto de materiais como entulho de construção, metais, madeira e móveis velhos, contribuindo para a preservação do meio ambiente e a melhoria da qualidade de vida da população.",
                    "Localizados em pontos estratégicos da cidade, nos bairros Orozimbo Macedo, Nova Cidade, CDI II e Verde Vale, os Pontos de Entrega Voluntária (PEVs) oferecem uma alternativa prática e segura para que os cidadãos possam descartar seus resíduos de forma adequada. "
                ]}
                image={PEV1}
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
                mapEmbedUrl="https://www.google.com/maps/d/u/0/embed?mid=1ZM7918bsU3zx5Km1XThH-LBtsPVM4qc&ehbc=2E312F&noprof=1"
            />
        </>
    );
}
