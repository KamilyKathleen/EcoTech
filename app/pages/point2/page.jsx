import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import RNS from '@/app/img/reciclagem_norte_sul.png';
import RNS2 from '@/app/img/reciclagem_norte_sul2.png';

export default function ReciclagemNorteSul() {
    return (
        <>
            <Breadcrumb
                image={RNS}
                title="Reciclagem Norte Sul"
                page="Reciclagem Norte Sul"
            />
            <CollectionPoint
                title="Reciclagem Norte Sul"
                description={[
                    "A Reciclagem Norte Sul, oficialmente registrada como Reciclagem Ferro Velho Norte Sul LTDA, é uma empresa localizada em Sete Lagoas, Minas Gerais, especializada na recuperação e reciclagem de materiais metálicos e plásticos. Com atuação desde 2020, a empresa desempenha um papel importante na gestão de resíduos sólidos na região.",
                    "A Reciclagem Norte Sul está comprometida com a sustentabilidade e a economia circular, oferecendo soluções eficientes para o reaproveitamento de resíduos e contribuindo para a preservação ambiental na região de Sete Lagoas."
                ]}
                image={RNS2}
                contacts={{
                    phone: "5531984089912",
                    phoneFormatted: "(31) 98408-9912",
                    website: "",
                    email: "",
                    addresses: [
                        {
                            address: "Rua Francisco Avelar, 61, Bairro Progresso, Sete Lagoas/MG, CEP 35701-130",
                            mapLink: "https://maps.app.goo.gl/29PxArQzvMYeJBvG9"
                        }
                    ],
                    instagram: "https://www.instagram.com/reciclagemnortesul/?hl=pt",
                    whatsapp: "5531984089912"
                }}
                materials={[
                    "Latas de Alumínio,",
                    "Papel e Papelão,",
                    "Plásticos."
                ]}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.703380234222!2d-44.231532324480064!3d-19.468351481818683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa65a94ca9aa6a5%3A0x77037401ff4419fa!2sR.%20Francisco%20Avelar%2C%2061%20-%20Progresso%2C%20Sete%20Lagoas%20-%20MG%2C%2035701-130!5e0!3m2!1spt-BR!2sbr!4v1747867708395!5m2!1spt-BR!2sbr"
            />
        </>
    );
}
