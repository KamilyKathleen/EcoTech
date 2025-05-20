import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import RSM from '@/app/img/reciclagem_santa_maria2.png';
import RNS from '@/app/img/reciclagem_norte_sul.png';

export default function About() {
    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Reciclagem Norte Sul"
                page="Reciclagem Norte Sul"
            />
            <CollectionPoint
                title="Reciclagem Norte Sul"
                description={[
                    "Uma empresa mineira, fundada nos anos 60...",
                    "Para melhor atender seus clientes...",
                    "Especializada em gerenciamento de resíduos..."
                ]}
                image={RNS}
                contacts={{
                    phone: "5531999999999",
                    phoneFormatted: "(31) 99999-9999",
                    website: "https://www.reciclagemsantamaria.com.br",
                    email: "contato@reciclagemstamaria.com.br",
                    address: "Rua Otávio Campelo Ribeiro, 2800...",
                    instagram: "https://www.instagram.com/reciclagemstmaria7lagoas/",
                    whatsapp: "5531999999999"
                }}
                materials={[
                    "Biomassa (Cavaco de madeira)",
                    "Lâmpadas fluorescentes",
                    "Papel e Papelão",
                    "Vidro",
                    "Borracha e Pneus",
                    "Metais (alumínio, cobre e ferro)",
                    "Plásticos"
                ]}
                mapUrl="https://maps.app.goo.gl/25Esw7ceVScCy7Dg7"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.6233318261993!2d-44.27322422448005!3d-19.471800281815927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa650f5ec6e0a9b%3A0x20cd0c38acbd8f82!2sAv.%20Ot%C3%A1vio%20Campelo%20Ribeiro%2C%202800a%20-%20b%20-%20Eldorado%2C%20Sete%20Lagoas%20-%20MG%2C%2035702-153!5e0!3m2!1spt-BR!2sbr!4v1747608697456!5m2!1spt-BR!2sbr"
            />
        </>
    );
}
