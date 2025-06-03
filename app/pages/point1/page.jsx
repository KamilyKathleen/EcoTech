import Breadcrumb from "@/app/components/breadcrumb";
import CollectionPoint from "@/app/components/collectionPoint";
import Banner from '@/app/img/banner.jpg';
import RSM from '@/app/img/reciclagem_santa_maria2.png';
import RSM2 from '@/app/img/reciclagem_santa_maria1.png';

export default function ReciclagemSantaMaria() {
    return (
        <>
            <Breadcrumb
                image={RSM2}
                title="Reciclagem Santa Maria"
                page="Reciclagem Santa Maria"
            />
            <CollectionPoint
                title="Reciclagem Santa Maria"
                description={[
                    "Uma empresa mineira, fundada nos anos 60, formada por laços de familiaridade e sólida estrutura profissional. Assim é o grupo Reciclagem Santa Maria, responsável pelo atendimento das principais indústrias do estado de Minas Gerais e atuante também nos estados de São Paulo e Rio de Janeiro.",
                    "Para melhor atender seus clientes a Reciclagem Santa Maria possui 10 Unidades localizadas nos municípios de Varginha (Sede), Belo Horizonte, Contagem, Sete Lagoas, Pouso Alegre, Lavras, Extrema e Guaxupé.",
                    "Especializada em gerenciamento de resíduos industriais e transformar os mesmos em matéria prima, a Santa Maria evolui constantemente seu processo de gestão, segregação, transformação, destinação final e formação de novos recursos de matéria e fontes de energia."
                ]}
                image={RSM}
                contacts={{
                    phone: "553137735521",
                    phoneFormatted: "(31) 3773-5521",
                    website: "https://www.reciclagemsantamaria.com.br",
                    email: "contato@reciclagemstamaria.com.br",
                    addresses: [
                        {
                            address: "Rua Otávio Campelo Ribeiro, 2800 lote B.Bairro Eldorado, Sete Lagoas 35702153",
                            mapLink: "https://maps.app.goo.gl/25Esw7ceVScCy7Dg7"
                        }
                    ],
                    instagram: "https://www.instagram.com/reciclagemstmaria7lagoas/",
                    whatsapp: "5531998951863"
                }}
                materials={[
                    "Biomassa (Cavaco de madeira);",
                    "Lâmpadas fluorescentes;",
                    "Papel e Papelão;",
                    "Vidro;",
                    "Borracha e Pneus;",
                    "Metais (alumínio, cobre e ferro);",
                    "Plásticos."
                ]}
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.6233318261993!2d-44.27322422448005!3d-19.471800281815927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa650f5ec6e0a9b%3A0x20cd0c38acbd8f82!2sAv.%20Ot%C3%A1vio%20Campelo%20Ribeiro%2C%202800a%20-%20b%20-%20Eldorado%2C%20Sete%20Lagoas%20-%20MG%2C%2035702-153!5e0!3m2!1spt-BR!2sbr!4v1747608697456!5m2!1spt-BR!2sbr"
            />
        </>
    );
}
